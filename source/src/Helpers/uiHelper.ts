import * as alt from 'alt';
import * as game from 'natives';
import utils from 'source/src/Helpers/utility.js';
import { IMinimap } from 'source/src/Constans/interfaces';

const localPlayer = alt.getLocalPlayer();

export function showUi(toggle: boolean) {
    alt.toggleGameControls(toggle);
    game.displayHud(toggle);
    game.displayRadar(toggle);
}

export function showUiAndFreezePlayer(toggle: boolean) {
    showUi(toggle);
    game.freezeEntityPosition(localPlayer.scriptID, !toggle);
}

export function freezePlayer(toggle: boolean) {
    game.freezeEntityPosition(localPlayer.scriptID, toggle);
}

export async function showNotification(title: string, subtitle: string, message: string, char = "CHAR_DEFAULT", flashing = false, icon = 7) {
    game.requestStreamedTextureDict(char, true);
    await utils.promise(() => game.hasStreamedTextureDictLoaded(char));

    game.setNotificationTextEntry("STRING");
    game.addTextComponentSubstringPlayerName(message);
    game.setNotificationMessage2(char, char, flashing, icon, title, subtitle);
    game.drawNotification(false, true);
}

export function drawText(text: string, position: number[], font: number, color: number[], scale: number, outline = true, center = true) {
    game.setTextFont(font);
    game.setTextProportional(true);
    game.setTextScale(scale, scale);
    game.setTextColour(color[0], color[1], color[2], color[3]);
    game.setTextEdge(2, 0, 0, 0, 150);
    game.setTextDropShadow();

    if (center) game.setTextCentre(center);
    if (outline) game.setTextOutline();

    game.beginTextCommandDisplayText("STRING");
    game.addTextComponentSubstringPlayerName(text);
    game.endTextCommandDisplayText(position[0], position[1]);
}

export function draw3DText(text: string, position: number[], font: number, color: number[], scale: number, outline = true,
    drawBackground = true, backgroundColor = [0, 0, 0, 90]) {
    const camCoord = game.getGameplayCamCoords();
    let distance = game.getDistanceBetweenCoords(position[0], position[1], position[2], camCoord.x, camCoord.y, camCoord.z, true);

    if (distance > 20) distance = 20;
    scale *= 1 - (distance / 20);

    game.setTextScale(scale, scale);
    game.setTextFont(font);
    game.setTextProportional(true);
    game.setTextColour(color[0], color[1], color[2], color[3]);
    game.setTextDropshadow(10, 0, 0, 0, 255);
    game.setTextEdge(2, 0, 0, 0, 150);
    game.setTextDropShadow();
    game.setTextCentre(true);

    if (outline)
        game.setTextOutline();

    game.setDrawOrigin(position[0], position[1], position[2], 0);
    game.beginTextCommandDisplayText("STRING");
    game.addTextComponentSubstringPlayerName(text);

    game.endTextCommandDisplayText(0, 0);

    if (drawBackground)
        drawRectangleBackground(text, scale, font, backgroundColor);

    game.clearDrawOrigin();
}

export function drawRectangleBackground(text: string, scale: number, font: number, backgroundColor: number[]) {
    game.beginTextCommandWidth("STRING");
    game.addTextComponentSubstringPlayerName(text);
    game.setTextFont(font);
    game.setTextScale(scale, scale);

    const height = game.getTextScaleHeight(1.2 * scale, font);
    const width = game.endTextCommandGetWidth(true);

    game.drawRect(0, 0 + scale / 25, width, height, backgroundColor[0], backgroundColor[1], backgroundColor[2], backgroundColor[3]);
}

export function getMinimapAnchor() {
    const sfX = 1.0 / 20.0;
    const sfY = 1.0 / 20.0;
    const safeZone = game.getSafeZoneSize();
    const aspectRatio = game.getAspectRatio(false);
    const resolution = game.getActiveScreenResolution(0, 0); // Returns [null,x,y]
    const scaleX = 1.0 / resolution[1];
    const scaleY = 1.0 / resolution[2];

    const minimap: IMinimap = {
        width: scaleX * (resolution[1] / (4 * aspectRatio)),
        height: scaleY * (resolution[2] / 5.674),
        scaleX,
        scaleY,
        leftX: scaleX * (resolution[1] * (sfX * (Math.abs(safeZone - 1.0) * 10))),
        bottomY: 1.0 - scaleY * (resolution[2] * (sfY * (Math.abs(safeZone - 1.0) * 10))),
        rightX: 0,
        topY: 0
    };

    minimap.rightX = minimap.leftX + minimap.width;
    minimap.topY = minimap.bottomY - minimap.height;
    return minimap;
}