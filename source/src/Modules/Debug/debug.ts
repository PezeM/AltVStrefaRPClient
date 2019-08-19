import * as alt from 'alt';
import * as game from 'natives';
import mainUi from 'source/src/Modules/Ui/mainUi';
import { NotificationTypes } from 'source/src/Constans/notificationTypes';
import { drawText } from 'source/src/Helpers/uiHelper';
import utils from 'source/src/Helpers/utils';
import sounds from 'source/src/Modules/Core/soundsController';

const localPlayer = alt.Player.local;

class Debug {
    debugEnabled: boolean;
    tick: number;
    constructor() {
        this.debugEnabled = false;
        this.tick = alt.setInterval(this.onTick.bind(this), 0);
        alt.on('consoleCommand', this.consoleCommandHandler.bind(this));
    }

    consoleCommandHandler(command: string, ...args: string[]) {
        switch (command) {
            case "debug":
                this.debugEnabled = !this.debugEnabled;
                mainUi.showCefNotification(NotificationTypes.Notice, "Debug", this.debugEnabled ? 'Włączono debug mode' : 'Wyłączono debug mode');
                break;
            case "loadIpl":
                this.loadIpl(args[0]);
                break;
            case "activateInterior":
                this.activateInteriorAtPlayerCoords();
                break;
            case "test3DSound":
                this.test3DSound();
                break;
            case "setMaxDistance":
                this.setMaxDistance(args[0]);
                break;
            case "setRefDistance":
                this.setRefDistance(args[0]);
                break;
            case "setRollofFactor":
                this.setRollofFactor(args[0]);
                break;
            case "setDistanceModel":
                this.setDistanceModel(args[0]);
                break;
            default:
                break;
        }
    }

    onTick() {
        if (!this.debugEnabled) return;

        drawText(`Health: ${game.getEntityHealth(localPlayer.scriptID)}`, [0.03, 0.05], 4, [255, 255, 255, 255], 0.4, true, false);
        drawText(`Armor: ${game.getPedArmour(localPlayer.scriptID)}`, [0.03, 0.07], 4, [255, 255, 255, 255], 0.4, true, false);
        drawText(`Pos: x: ${localPlayer.pos.x.toFixed(3)} y: ${localPlayer.pos.y.toFixed(3)} z: ${localPlayer.pos.z.toFixed(3)}`,
            [0.03, 0.09], 4, [255, 255, 255, 255], 0.4, true, false);
        drawText(`Heading: ${game.getEntityHeading(localPlayer.scriptID).toFixed(4)}`, [0.03, 0.11], 4, [255, 255, 255, 255], 0.4, true, false);
        drawText(`HaG: ${game.getEntityHeightAboveGround(localPlayer.scriptID).toFixed(4)}`, [0.03, 0.13], 4, [255, 255, 255, 255], 0.4, true, false);
        drawText(`Speed: ${game.getEntitySpeed(localPlayer.scriptID).toFixed(4)}`, [0.03, 0.15], 4, [255, 255, 255, 255], 0.4, true, false);
        drawText(`Frame time: ${game.getFrameTime().toFixed(4)}`, [0.03, 0.17], 4, [255, 255, 255, 255], 0.4, true, false);
        drawText(`Model: ${localPlayer.model}`, [0.03, 0.19], 4, [255, 255, 255, 255], 0.4, true, false);
        drawText(`ScriptID: ${localPlayer.scriptID}`, [0.03, 0.21], 4, [255, 255, 255, 255], 0.4, true, false);
        drawText(`ID: ${localPlayer.id}`, [0.03, 0.23], 4, [255, 255, 255, 255], 0.4, true, false);
    }

    loadIpl(iplName: string) {
        try {
            game.requestIpl(iplName);
        } catch (error) {
            alt.log(`Error loading ipl ${iplName}`);
        }
    }

    activateInteriorAtPlayerCoords() {
        const interiorId = game.getInteriorAtCoords(localPlayer.pos.x, localPlayer.pos.y, localPlayer.pos.z);
        mainUi.showCefNotification(NotificationTypes.Notice, "Interior", interiorId > 0 ?
            `Aktywowano interior ${interiorId}` : `Nie jesteś w srodku zadnego interioru`);
        if (interiorId < 1) return;
        game.setInteriorActive(interiorId, true);
        game.unpinInterior(interiorId);
    }

    test3DSound() {
        const object = game.createObject(utils.joaat("prop_speaker_07"), localPlayer.pos.x + 1, localPlayer.pos.y + 1, localPlayer.pos.z - 0.5,
            true, false, false);
        const objectPos = game.getEntityCoords(object, false);
        const [_, rightVector, forwardVector, upVector, position] = game.getEntityMatrix(object, null, null, null, null);
        alt.log(`Object coords = ${JSON.stringify(objectPos, null, 2)}`);
        sounds.play3DCefSound("test.mp3", 1.0, objectPos, forwardVector, localPlayer.pos, true);
        mainUi.showCefNotification(NotificationTypes.Notice, "3D Sound", "Odtwarzanie dźwieku 3D dev", 3500);

        const matrix = game.getEntityMatrix(object, null, null, null, null);
        alt.log(`Matrix = ${JSON.stringify(matrix)}`);
    }

    setRollofFactor(arg0: string) {
        const factor = Number(arg0);
        mainUi.emitUiEvent("soundsSetRollofFactor", factor);
    }

    setRefDistance(arg0: string) {
        const refDistance = Number(arg0);
        mainUi.emitUiEvent("soundsSetRefDistance", refDistance);
    }

    setMaxDistance(arg0: string) {
        const maxDistance = Number(arg0);
        mainUi.emitUiEvent("soundsSetMaxDistance", maxDistance);
    }

    setDistanceModel(arg: string) {
        mainUi.emitUiEvent("soundsSetDistanceModel", arg);
    }
}

const debug = new Debug();
export default debug;