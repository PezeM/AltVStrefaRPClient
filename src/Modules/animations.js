import game from 'natives';
import alt from 'alt';

const animations = {
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
            // showCefNotification(3, `Nie znaleziono animacji z nazwą ${animationName}.`, 5000);
        }
    }
    setupAnimation(animation) {
        this.loadAnimDict(animation.dict);
        if (!game.hasAnimDictLoaded(animation.dict)) {
            alt.log(`Anim dict named: ${animation.dict} didnt load properly`);
            return;
        }

        if (game.isEntityPlayingAnim(this.playerId, animation.dict, animation.name, animation.flag)) {
            this.stopAnimation(animation);
        } else {
            this.playAnimation(animation);
        }
    }
    playAnimation(animation) {
        game.taskPlayAnim(this.playerId, animation.dict, animation.name, 8.0, 1.0, -1, animation.flag, 0, false, false, false);
    }
    stopAnimation(animation) {
        if (animation.hasOwnProperty("waitTime")) {
            this.waitTime = animation.waitTime;
        }
        game.taskPlayAnim(this.playerId, animation.dict, animation.exitAnim, 8.0, 1.0, -1, animation.flag, 0, false, false, false);
        alt.setTimeout(() => {
            game.clearPedSecondaryTask(this.playerId);
        }, this.waitTime);
        this.clearPropState();
    }
    forceAnimationStop() {
        if (this.currentAnimation) {
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
