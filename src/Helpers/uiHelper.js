/// <reference path="../../altv.d.ts" />
/// <reference path="../../alt.d.ts" />

import alt from 'alt';
import game from 'natives';
let playerId = alt.getLocalPlayer().scriptID;

export function showUi(toogle) {
    alt.toggleGameControls(toogle);
    game.displayHud(toogle);
    game.displayRadar(toogle);
}

export function drawText(text, position, font, color, scale, outline = true) {
    game.setTextFont(font);
    game.setTextProportional(0);
    game.setTextScale(scale, scale);
    game.setTextColour(color[0], color[1], color[2], color[3]);
    game.setTextEdge(2, 0, 0, 0, 150);
    game.setTextDropShadow(0, 0, 0, 0, 55);
    game.setTextDropShadow();

    if (outline) game.setTextOutline();

    game.beginTextCommandDisplayText("STRING");
    // game.addTextComponentScaleform(text);
    game.setTextCentre(1);
    game.addTextComponentSubstringPlayerName(text);
    game.endTextCommandDisplayText(position[0], position[1]);
}

export function draw3DText(text, position, font, color, scale, outline = true) {
    var camCoord = game.getGameplayCamCoords();
    var distance = game.getDistanceBetweenCoords(position[0], position[1], position[2], camCoord.x, camCoord.y, camCoord.z, true);
    var newScale = ((1 / distance) * 2) * (1 / game.getGameplayCamFov()) * 100;

    game.setTextScale(scale, scale);
    game.setTextFont(font);
    game.setTextProportional(1);
    game.setTextColour(color[0], color[1], color[2], color[3]);
    game.setTextDropshadow(0, 0, 0, 0, 255);
    game.setTextEdge(2, 0, 0, 0, 150);
    game.setTextDropShadow();

    if (outline)
        game.setTextOutline();

    game.setTextCentre(1);

    game.setDrawOrigin(position[0], position[1], position[2], 0);
    game.beginTextCommandDisplayText("STRING");
    game.addTextComponentSubstringPlayerName(text);
    game.endTextCommandDisplayText(0, 0);
    game.clearDrawOrigin();
}

export function getMinimapAnchor() {
    let sfX = 1.0 / 20.0;
    let sfY = 1.0 / 20.0;
    let safeZone = game.getSafeZoneSize();
    let aspectRatio = game.getAspectRatio(false);
    let resolution = game.getActiveScreenResolution(0, 0);
    let scaleX = 1.0 / resolution.x;
    let scaleY = 1.0 / resolution.y;

    let minimap = {
        width: scaleX * (resolution.x / (4 * aspectRatio)),
        height: scaleY * (resolution.y / 5.674),
        scaleX: scaleX,
        scaleY: scaleY,
        leftX: scaleX * (resolution.x * (sfX * (Math.abs(safeZone - 1.0) * 10))),
        bottomY: 1.0 - scaleY * (resolution.y * (sfY * (Math.abs(safeZone - 1.0) * 10))),
    };

    minimap.rightX = minimap.leftX + minimap.width;
    minimap.topY = minimap.bottomY - minimap.height;
    return minimap;
}