import game from 'natives';
import alt from 'alt';
import { showCefNotification } from 'src/ui.js';

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
        this.currentAnimation = null;
    }
    findAnimation(animationName) {
        if (animations[animationName]) {
            this.currentAnimation = animations[animationName];
            this.playAnimation(this.currentAnimation);
        } else {
            showCefNotification(3, `Nie znaleziono animacji z nazwą ${animationName}.`, 5000);
        }
    }
    playAnimation(animation) {
        loadAnimDict(animation.dict);
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
            }, 5);
        }
    }
}
