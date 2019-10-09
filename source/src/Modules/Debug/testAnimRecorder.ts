import * as alt from 'alt';
import * as game from 'natives';
import utils from 'source/src/Helpers/utils';
import { drawText } from 'source/src/Helpers/uiHelper';

const localPlayer = alt.Player.local;
const GREENSCREEN_POS: Vector3 = {
    x: -975.1438598632812,
    y: -3338.376220703125,
    z: 8.944438934326172
}

const GREENSCREEN_PLAYER_POS: Vector3 = {
    x: -975.1438598632812,
    y: -3338.376220703125,
    z: 8.944438934326172
}

const ANIMS_TO_PLAY: IAnim[] = [
    {
        animDictionary: 'mp_safehouse',
        animName: 'lap_dance_girl',
        displayName: 'Pierwszy taniec'
    },
    {
        animDictionary: 'special_ped@mountain_dancer@monologue_1@monologue_1a',
        animName: 'mtn_dnc_if_you_want_to_get_to_heaven',
        displayName: 'Drugi taniec'
    }
];


interface IAnimDuration {
    animDictionary: string;
    animName: string;
    displayName: string;
    duration: number;
}

interface IAnim {
    animDictionary: string;
    animName: string;
    displayName: string;
}

class AnimRecorderHandler {
    animDurations: IAnimDuration[];
    private renderTick: number;
    private currentlyPlayingAnimation: IAnim | null;

    constructor() {
        alt.log('Test anim recorder initialized');
        this.animDurations = [];
        this.renderTick = alt.setInterval(this.render.bind(this), 0);
        this.currentlyPlayingAnimation = null;

        alt.on('consoleCommand', this.onConsoleCommand.bind(this));
    }

    render() {
        if (this.currentlyPlayingAnimation == null) return;

        drawText(this.currentlyPlayingAnimation.displayName, [0.5, 0.02], 4, [255, 255, 255, 255], 0.6, false, false);
    }

    async onConsoleCommand(command: string, ...args: string[]) {
        switch (command) {
            case 'createGreenscreen':
                this.createGreenscreen();
                break;

            case 'teleportToGreenscreen':
                this.teleportToGreenScreen();
                break;

            case 'testAnim':
                await this.testAnim();
                break;

            case 'testAnims':
                await this.testAnims();
                break;

            case 'printAnimDurations':
                this.printAnimDurations();
                break;

            case 'clearAnimsDurationList':
                this.clearAnimDurationList();
                break;
            default:
                break;
        }

    }

    async testAnim() {
        await this.loadAnimDict('pickup_object');
        alt.setTimeout(() => {
            const animDuration = game.getAnimDuration('pickup_object', 'pickup_low');
            game.taskPlayAnim(localPlayer.scriptID, 'pickup_object', 'pickup_low', 8.0, 1.0, -1, 0, 0, false, false, false);
            this.animDurations.push({
                animDictionary: 'pickup_object',
                animName: 'pickup_low',
                displayName: 'Podnoszenie',
                duration: animDuration,
            });
        }, 3000);
    }

    async testAnims() {
        ANIMS_TO_PLAY.forEach(async (anim) => {
            await this.prepareAnim(anim);
            await this.playAnim(anim);
            this.clearAnim(anim);
        });
        this.printAnimDurations();
    }

    async prepareAnim(anim: IAnim) {
        alt.log('Preparing for playing nexta animation');
        game.doScreenFadeOut(200);
        // this.teleportToGreenScreen();
        await this.loadAnimDict(anim.animDictionary);
        this.setDaytime();
        await utils.delay(3000);
        game.doScreenFadeIn(0);
        this.currentlyPlayingAnimation = anim;
    }

    async playAnim(anim: IAnim) {
        const animDuration = game.getAnimDuration(anim.animDictionary, anim.animName);
        game.taskPlayAnim(localPlayer.scriptID, anim.animDictionary, anim.animName, 8.0, 1, -1, 0, 0.0, false, false, false);
        this.animDurations.push({
            animDictionary: anim.animDictionary,
            animName: anim.animName,
            displayName: anim.displayName,
            duration: animDuration
        });

        await utils.waitFor(() => game.hasEntityAnimFinished(localPlayer.scriptID, anim.animDictionary, anim.animName, 3));
    }

    clearAnim(anim: IAnim) {
        if (game.isEntityPlayingAnim(localPlayer.scriptID, anim.animDictionary, anim.animName, 0)) {
            game.clearPedSecondaryTask(localPlayer.scriptID);
        } else {
            this.currentlyPlayingAnimation = null;
        }
    }

    printAnimDurations() {
        alt.log(JSON.stringify(this.animDurations, null, 4));
    }

    clearAnimDurationList() {
        this.animDurations = [];
        alt.log('Cleared anim duration list');
    }

    createGreenscreen() {
        const greenScreen = game.createObject(game.getHashKey('prop_hanger_door_1'),
            GREENSCREEN_POS.x, GREENSCREEN_POS.y, GREENSCREEN_POS.z, true, false, false);
        game.setEntityRotation(greenScreen, 0, 0, 160, 2, true);
        this.setDaytime();
    }

    teleportToGreenScreen() {
        game.setEntityCoords(localPlayer.scriptID, GREENSCREEN_PLAYER_POS.x, GREENSCREEN_PLAYER_POS.y,
            GREENSCREEN_PLAYER_POS.z,
            false, false, false, false);
    }

    test() {
        const pos = alt.Player.local.pos;
        const [_, posZ] = game.getGroundZFor3dCoord(pos.x, pos.y, pos.z, 0, false, false);

        const backWall = game.createObject(game.getHashKey('prop_hanger_door_1'), pos.x, pos.y, posZ - 4, true, false, false);
        game.setEntityRotation(backWall, 0, 0, 160, 2, true);
    }

    private loadAnimDict(animDict: string) {
        return new Promise((resolve, reject) => {
            alt.log('Loading anim dict');
            game.requestAnimDict(animDict);
            if (!game.hasAnimDictLoaded(animDict)) {
                const request = alt.setInterval(() => {
                    if (game.hasAnimDictLoaded(animDict)) {
                        alt.log('Still Loading anim dict');
                        resolve();
                        alt.clearInterval(request);
                    }
                }, 5);
            } else {
                resolve();
            }
        });
    }

    private setDaytime() {
        game.setClockTime(12, 0, 0);
    }
}

const animRecorderHandler = new AnimRecorderHandler();
export default animRecorderHandler;