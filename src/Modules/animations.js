import game from 'natives';
import alt from 'alt';

const animations = {
    // Tance
    "dance1": {
        dict: "mp_safehouse",
        name: "lap_dance_girl",
        flag: 15,
        exitAnim: "exit",

    },
    "dance2": {
        dict: "special_ped@mountain_dancer@monologue_1@monologue_1a",
        name: "mtn_dnc_if_you_want_to_get_to_heaven",
        flag: 15,
        exitAnim: "exit",
    },
    "dance3": {
        dict: "special_ped@mountain_dancer@monologue_2@monologue_2a",
        name: "mnt_dnc_angel",
        flag: 15,
        exitAnim: "exit",
    },
    // Animacje z propami
    "box": {
        dict: "anim@heists@box_carry@",
        name: "idle",
        flag: 63,
        exitFlag: 49,
        exitAnim: "exit",
        waitTime: 1000,
        prop: {
            name: "hei_prop_heist_box",
            boneIndex: 60309,
            position: {
                x: 0.1,
                y: 0.1,
                z: 0.255
            },
            rotation: {
                x: -145.0,
                y: 290.0,
                z: 0.0
            }
        }
    }
};

export default class Animations {
    constructor() {
        alt.log('Animations class initialized');
        this.playerId = alt.getLocalPlayer().scriptID;
        this.currentAnimation = null;
        this.waitTime = 600;
        this.propID = null;
        this.propModel = null;
        this.holdingProp = false;
    }
    findAnimation(animationName) {
        alt.log('Looking for animation named ' + animationName);
        if (animations[animationName]) {
            this.currentAnimation = animations[animationName];
            this.setupAnimation(this.currentAnimation);
        } else {
            alt.log(`Nie znaleziono animacji z nazwą ${animationName}.`);
        }
    }
    setupAnimation(animation) {
        if (game.isEntityPlayingAnim(this.playerId, animation.dict, animation.name, 3)) {
            alt.log('Entity is playing animation');
            this.stopAnimation(animation);
        } else {
            this.loadAnimDict(animation.dict);
            if (!game.hasAnimDictLoaded(animation.dict)) {
                alt.log(`Anim dict named: ${animation.dict} didnt load properly`);
            }
            this.playAnimation(animation);
        }
    }
    playAnimation(animation) {
        if (animation.hasOwnProperty("prop")) {
            alt.log(`Playing prop animation`);
            this.playPropAnimation(animation);
        } else {
            alt.log(`Playing normal animation`);
            game.taskPlayAnim(this.playerId, animation.dict, animation.name, 8.0, 1.0, -1, animation.flag, 0, false, false, false);
        }
    }
    playPropAnimation(animation) {
        this.holdingProp = true;
        this.propModel = animation.prop.name;
        var position = game.getEntityCoords(this.playerId, true);
        this.propID = game.createObject(game.getHashKey(this.propModel), position.x, position.y, position.z + 0.2, true, true, true);
        alt.log(`Created prop with id: ${this.propID}`);
        game.attachEntityToEntity(this.propID, this.playerId, game.getPedBoneIndex(this.playerId, animation.prop.boneIndex),
            animation.prop.position.x, animation.prop.position.y, animation.prop.position.z,
            animation.prop.rotation.x, animation.prop.rotation.y, animation.prop.rotation.z, true, true, false, true, 1, true);
        game.taskPlayAnim(this.playerId, animation.animDict, animation.name, 3.0, -8, -1, animation.flag, 0, false, false, false);
    }
    stopAnimation(animation) {
        alt.log('Stopping animation');
        if (this.holdingProp) {
            alt.log(`Deleting prop with id ${this.propID}`);
            game.detachEntity(this.propID, true, true);
            game.deleteObject(this.propID);
            this.holdingProp = false;
        } else {
            alt.log(`Holding prop set to false`);
        }

        if (animation.hasOwnProperty("waitTime")) {
            this.waitTime = animation.waitTime;
        }
        if (animation.hasOwnProperty("prop")) {
            this.stopPropAnimation(animation);
        } else {
            this.stopNormalAnimation(animation);
        }
    }
    stopNormalAnimation(animation) {
        game.taskPlayAnim(this.playerId, animation.dict, animation.exitAnim, 8.0, 1.0, -1,
            animation.exitFlag ? animation.exitFlag : animation.flag, 0, false, false, false);
        alt.setTimeout(() => {
            game.clearPedSecondaryTask(this.playerId);
        }, this.waitTime);
        this.clearPropState();
    }
    stopPropAnimation(animation) {
        this.holdingProp = false;
        game.detachEntity(this.propID, true, true);
        game.deleteObject(this.propID);
        this.stopNormalAnimation(animation);
    }
    forceAnimationStop() {
        if (this.currentAnimation) {
            alt.log('Found animation to force stop');
            this.stopAnimation(this.currentAnimation);
        } else {
            game.clearPedTasks(this.playerId);
            this.clearPropState();
        }
    }
    loadAnimDict(animDict) {
        game.requestAnimDict(animDict);
        if (!game.hasAnimDictLoaded(animDict)) {
            var requestId = alt.setInterval(() => {
                if (!game.hasAnimDictLoaded(animDict)) {
                    game.requestAnimDict(animDict);
                    alt.log('Loading dict ' + animDict);
                } else {
                    alt.clearInterval(requestId);
                }
            }, 0);
        }
    }
    clearPropState() {
        this.propID = null;
        this.propModel = null;
        this.holdingProp = false;
    }
}
