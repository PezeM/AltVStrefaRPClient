/// <reference path="../../altv.d.ts" />
/// <reference path="../../alt.d.ts" />

import alt from 'alt';
import game from 'natives';
let localPlayer = alt.getLocalPlayer();

export function showUi(toogle) {
    alt.toggleGameControls(toogle);
    game.displayHud(toogle);
    game.displayRadar(toogle);
}

export function showUiAndFreezePlayer(toggle) {
    showUi(toggle);
    game.freezeEntityPosition(localPlayer.scriptID, !toggle);
}

export function freezePlayer(toggle) {
    game.freezeEntityPosition(localPlayer.scriptID, toggle);
}

export function showNotification(title, subtitle, message, char = "CHAR_DEFAULT", flashing = false, icon = 7) {
    alt.nextTick(() => {
        // streamTextureDict(char);
        game.setNotificationTextEntry("STRING");
        game.addTextComponentSubstringPlayerName(message);
        game.setNotificationMessage2(char, char, flashing, icon, title, subtitle);
        game.drawNotification(false, true);
    });
}

function streamTextureDict(dict) {
    alt.log('UiHelper streamTextureDict called');
    let tries = 0;
    if (!game.hasStreamedTextureDictLoaded(dict)) {
        alt.log('UiHelper streamTextureDict was not loaded.');
        game.requestStreamedTextureDict(dict, true);

        while (game.hasStreamedTextureDictLoaded(dict) && tries < 50) {
            alt.log('UiHelper streamTextureDict trying to load dict for ' + tries + ' time.');
            tries++;
            alt.wait(1);
        }

        if (tries >= 50) return false;
    }
}

export function drawText(text, position, font, color, scale, outline = true, center = true) {
    game.setTextFont(font);
    game.setTextProportional(0);
    game.setTextScale(scale, scale);
    game.setTextColour(color[0], color[1], color[2], color[3]);
    game.setTextEdge(2, 0, 0, 0, 150);
    game.setTextDropShadow(0, 0, 0, 0, 55);
    game.setTextDropShadow();

    if (center) game.setTextCentre(1);
    if (outline) game.setTextOutline();

    game.beginTextCommandDisplayText("STRING");
    game.addTextComponentSubstringPlayerName(text);
    game.endTextCommandDisplayText(position[0], position[1]);
}

export function draw3DText(text, position, font, color, scale, outline = true, drawBackground = true, backgroundColor = [0, 0, 0, 60]) {
    var camCoord = game.getGameplayCamCoords();
    var distance = game.getDistanceBetweenCoords(position[0], position[1], position[2], camCoord.x, camCoord.y, camCoord.z, true);

    if (distance > 20) distance = 20;
    scale *= 1 - (distance / 20);

    game.setTextScale(scale, scale);
    game.setTextFont(font);
    game.setTextProportional(1);
    game.setTextColour(color[0], color[1], color[2], color[3]);
    game.setTextDropshadow(10, 0, 0, 0, 255);
    game.setTextEdge(2, 0, 0, 0, 150);
    game.setTextDropShadow();
    game.setTextCentre(1);

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

export function drawRectangleBackground(text, scale, font, backgroundColor) {
    game.beginTextCommandWidth("STRING");
    game.addTextComponentSubstringPlayerName(text);
    game.setTextFont(font);
    game.setTextScale(scale, scale);

    var height = game.getTextScaleHeight(1.2 * scale, font);
    var width = game.endTextCommandGetWidth(font);

    game.drawRect(0, 0 + scale / 25, width, height, backgroundColor[0], backgroundColor[1], backgroundColor[2], backgroundColor[3]);
}

export function getMinimapAnchor() {
    let sfX = 1.0 / 20.0;
    let sfY = 1.0 / 20.0;
    let safeZone = game.getSafeZoneSize();
    let aspectRatio = game.getAspectRatio(false);
    let resolution = game.getActiveScreenResolution(0, 0); // Returns [null,x,y]
    let scaleX = 1.0 / resolution[1];
    let scaleY = 1.0 / resolution[2];

    let minimap = {
        width: scaleX * (resolution[1] / (4 * aspectRatio)),
        height: scaleY * (resolution[2] / 5.674),
        scaleX: scaleX,
        scaleY: scaleY,
        leftX: scaleX * (resolution[1] * (sfX * (Math.abs(safeZone - 1.0) * 10))),
        bottomY: 1.0 - scaleY * (resolution[2] * (sfY * (Math.abs(safeZone - 1.0) * 10))),
    };

    minimap.rightX = minimap.leftX + minimap.width;
    minimap.topY = minimap.bottomY - minimap.height;
    return minimap;
}