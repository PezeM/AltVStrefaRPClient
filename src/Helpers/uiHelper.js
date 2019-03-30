/// <reference path="../../altv.d.ts" />
/// <reference path="../../alt.d.ts" />

import alt from 'alt';
import game from 'natives';

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
    game.addTextComponentScaleform(text);
    game.setTextCentre(1);
    // game.addTextComponentSubstringPlayerName(text);
    game.endTextCommandDisplayText(position[0], position[1]);
}

export function draw3DText(text, position, font, color, scale, outline = true) {
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

    alt.log('Position x' + position[0] + ' y ' + position[1] + 'z ' + position[2])
    game.setDrawOrigin(position[0], position[1], position[2], 0);
    game.beginTextCommandDisplayText("STRING");
    game.addTextComponentSubstringPlayerName(text);
    game.endTextCommandDisplayText(0, 0);
    game.clearDrawOrigin();
}