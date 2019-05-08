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
            bone: 60309,
            position: {
                x: 0.025,
                y: 0.08,
                z: 0.255
            },
            rotation: {
                x: -145.0,
                y: 290.0,
                z: 0.0
            },
            extraZPosition: 0.2
        }
    },
    "metal": {
        dict: "anim@heists@box_carry@",
        name: "idle",
        flag: 63,
        exitFlag: 49,
        exitAnim: "exit",
        waitTime: 1000,
        prop: {
            name: "prop_rub_scrap_07",
            bone: 60309,
            position: {
                x: 0.050,
                y: 0.0,
                z: 0.255
            },
            rotation: {
                x: 150.0,
                y: 290.0,
                z: 0.0
            },
            extraZPosition: 0.2
        }
    },
    "toolbox": {
        dict: "rcmepsilonism8",
        name: "bag_handler_idle_a",
        flag: 63,
        exitFlag: 49,
        exitAnim: "exit",
        waitTime: 1000,
        prop: {
            name: "prop_tool_box_04",
            bone: 57005,
            position: {
                x: 0.043,
                y: 0.0,
                z: -0.02
            },
            rotation: {
                x: -90.0,
                y: 0.0,
                z: 90.0
            },
            extraZPosition: 0.0
        }
    },
    "toolbox2": {
        dict: "rcmepsilonism8",
        name: "bag_handler_idle_a",
        flag: 63,
        exitFlag: 49,
        exitAnim: "exit",
        waitTime: 1000,
        prop: {
            name: "prop_tool_box_01",
            bone: 57005,
            position: {
                x: 0.5,
                y: 0.0,
                z: 0.01
            },
            rotation: {
                x: -100.0,
                y: 0.0,
                z: 90.0
            },
            extraZPosition: 0.0
        }
    },
    "toolbox3": {
        dict: "rcmepsilonism8",
        name: "bag_handler_idle_a",
        flag: 63,
        exitFlag: 49,
        exitAnim: "exit",
        waitTime: 1000,
        prop: {
            name: "prop_toolchest_01",
            bone: 57005,
            position: {
                x: 0.5,
                y: 0.0,
                z: 0.05
            },
            rotation: {
                x: -100.0,
                y: 0.0,
                z: 90.0
            },
            extraZPosition: 0.0
        }
    },
    "suitcase": {
        dict: "anim@heists@narcotics@trash",
        name: "walk",
        flag: 50,
        exitFlag: 49,
        exitAnim: "exit",
        waitTime: 1000,
        prop: {
            name: "prop_suitcase_03",
            bone: 57005,
            position: {
                x: 0.36,
                y: -0.5,
                z: 0.0
            },
            rotation: {
                x: -50.0,
                y: -60.0,
                z: 15.0
            },
            extraZPosition: 0.0
        }
    },
    "walizka": {
        dict: "rcmepsilonism8",
        name: "bag_handler_idle_a",
        flag: 63,
        exitFlag: 49,
        exitAnim: "exit",
        waitTime: 1000,
        prop: {
            name: "prop_ld_case_01",
            bone: 57005,
            position: {
                x: 0.13,
                y: 0.0,
                z: -0.02
            },
            rotation: {
                x: -90.0,
                y: 0.0,
                z: 90.0
            },
            extraZPosition: 0.2
        }
    },
    "walizka2": {
        dict: "rcmepsilonism8",
        name: "bag_handler_idle_a",
        flag: 63,
        exitFlag: 49,
        exitAnim: "exit",
        waitTime: 1000,
        prop: {
            name: "prop_ld_suitcase_01",
            bone: 57005,
            position: {
                x: 0.36,
                y: 0.0,
                z: -0.02
            },
            rotation: {
                x: -90.0,
                y: 0.0,
                z: 90.0
            },
            extraZPosition: 0.2
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
            this.setupAnimation(animations[animationName]);
        } else {
            alt.log(`Nie znaleziono animacji z nazwą ${animationName}.`);
        }
    }
    setupAnimation(animation) {
        if (this.holdingProp) {
            alt.log(`Deleting prop with id ${this.propID}`);
            game.detachEntity(this.propID, true, true);
            game.deleteObject(this.propID);
            this.holdingProp = false;
            this.propID = -1;
        } else {
            alt.log(`Holding prop set to false`);
        }

        if (game.isEntityPlayingAnim(this.playerId, animation.dict, animation.name, 3)) {
            alt.log('Entity is playing animation');
            this.stopAnimation(animation);
        } else if (this.currentAnimation && game.isEntityPlayingAnim(this.playerId, this.currentAnimation.dict, this.currentAnimation.name, 3)) {
            alt.log('Entity is playing previous animation and want to play next anim.');
            this.stopAnimation(this.currentAnimation, () => {
                alt.log('Some callback function');
                this.loadAnimationAndPlay(animation);
            });
        } else {
            this.loadAnimationAndPlay(animation);
        }
    }
    loadAnimationAndPlay(animation) {
        this.loadAnimDict(animation.dict).then(() => {
            this.playAnimation(animation);
        });
    }
    playAnimation(animation) {
        this.currentAnimation = animation;
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
        this.propID = game.createObject(game.getHashKey(this.propModel),
            position.x, position.y, position.z + animation.prop.extraZPosition, true, true, true);
        alt.log(`Created prop with id: ${this.propID}`);
        game.attachEntityToEntity(this.propID, this.playerId, game.getPedBoneIndex(this.playerId, animation.prop.bone),
            animation.prop.position.x, animation.prop.position.y, animation.prop.position.z,
            animation.prop.rotation.x, animation.prop.rotation.y, animation.prop.rotation.z, true, true, false, true, 1, true);
        game.taskPlayAnim(this.playerId, animation.dict, animation.name, 3.0, -8, -1, animation.flag, 0, false, false, false);
    }
    stopAnimation(animation, cb = null) {
        if (animation.hasOwnProperty("prop")) {
            this.stopPropAnimation(animation, cb);
        } else {
            this.stopNormalAnimation(animation, cb);
        }
    }
    stopNormalAnimation(animation, cb = null) {
        alt.log(`Stoping normal animation`);
        if (animation.hasOwnProperty("waitTime")) {
            this.waitTime = animation.waitTime;
        }

        game.taskPlayAnim(this.playerId, animation.dict, animation.exitAnim, 8.0, 1.0, -1,
            animation.exitFlag ? animation.exitFlag : animation.flag, 0, false, false, false);
        alt.setTimeout(() => {
            game.clearPedSecondaryTask(this.playerId);
            this.currentAnimation = null;
            this.clearPropState();
            if (cb != null)
                cb();
        }, this.waitTime);

    }
    stopPropAnimation(animation, cb = null) {
        if (game.doesEntityExist(this.propID) || this.holdingProp) {
            this.holdingProp = false;
            game.detachEntity(this.propID, true, true);
            game.deleteObject(this.propID);
            this.propID = -1;
        }
        this.stopNormalAnimation(animation, cb);
    }
    forceAnimationStop() {
        if (this.currentAnimation) {
            alt.log('Found animation to force stop');
            this.stopAnimation(this.currentAnimation);
        } else {
            game.clearPedTasks(this.playerId);
            game.clearPedSecondaryTask(this.playerId);
            this.currentAnimation = null;
            this.clearPropState();
        }
    }
    loadAnimDict(animDict) {
        return new Promise((resolve, reject) => {
            game.requestAnimDict(animDict);
            if (!game.hasAnimDictLoaded(animDict)) {
                const request = alt.setInterval(() => {
                    if (game.hasAnimDictLoaded(animDict)) {
                        resolve();
                        alt.clearInterval(request);
                    }
                }, 5);
            } else {
                resolve();
            }
        });
    }
    clearPropState() {
        this.propID = null;
        this.propModel = null;
        this.holdingProp = false;
    }
}