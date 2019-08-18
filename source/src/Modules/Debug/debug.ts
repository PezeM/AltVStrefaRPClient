import * as alt from 'alt';
import * as game from 'natives';
import mainUi from 'source/src/Modules/Ui/mainUi';
import { NotificationTypes } from 'source/src/Constans/notificationTypes';
import { drawText } from 'source/src/Helpers/uiHelper';

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
            default:
                break;
        }
    }

    onTick() {
        if (!this.debugEnabled) return;

        drawText(`Health: ${game.getEntityHealth(localPlayer.scriptID)}`, [0.1, 0.05], 4, [255, 255, 255, 255], 0.4, true, false);
        drawText(`Armor: ${game.getPedArmour(localPlayer.scriptID)}`, [0.1, 0.07], 4, [255, 255, 255, 255], 0.4, true, false);
        drawText(`Pos: x: ${localPlayer.pos.x.toFixed(3)} y: ${localPlayer.pos.y.toFixed(3)} z: ${localPlayer.pos.z.toFixed(3)}`,
            [0.1, 0.09], 4, [255, 255, 255, 255], 0.4, true, false);
        drawText(`Heading: ${game.getEntityHeading(localPlayer.scriptID)}`, [0.1, 0.11], 4, [255, 255, 255, 255], 0.4, true, false);
        drawText(`HaG: ${game.getEntityHeightAboveGround(localPlayer.scriptID)}`, [0.1, 0.13], 4, [255, 255, 255, 255], 0.4, true, false);
        drawText(`Speed: ${game.getEntitySpeed(localPlayer.scriptID)}`, [0.1, 0.15], 4, [255, 255, 255, 255], 0.4, true, false);
        drawText(`Frame time: ${game.getFrameTime()}`, [0.1, 0.17], 4, [255, 255, 255, 255], 0.4, true, false);
        drawText(`Model: ${localPlayer.model}`, [0.1, 0.19], 4, [255, 255, 255, 255], 0.4, true, false);
        drawText(`ScriptID: ${localPlayer.scriptID}`, [0.1, 0.21], 4, [255, 255, 255, 255], 0.4, true, false);
        drawText(`ID: ${localPlayer.id}`, [0.1, 0.23], 4, [255, 255, 255, 255], 0.4, true, false);
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
}

const debug = new Debug();
export default debug;