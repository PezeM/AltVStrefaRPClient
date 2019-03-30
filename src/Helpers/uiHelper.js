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
    game.setTextCentre(1);

    if (outline) game.setTextOutline();

    game.beginTextCommandDisplayText("STRING");
    // game.addTextComponentScaleform(text);
    game.addTextComponentSubstringPlayerName(text);
    game.endTextCommandDisplayText(position[0], position[1]);
}

export function draw3DText(text, position, font, color, scale, outline = true) {
    game.setDrawOrigin(position[0], position[1], position[3], 0);
    game.setTextFont(font);
    game.setTextProportional(0);
    game.setTextScale(scale, scale);
    game.setTextColour(color[0], color[1], color[2], color[3]);
    game.setTextDropShadow(0, 0, 0, 0, 255);
    game.setTextDropShadow();
    game.setTextEdge(2, 0, 0, 0, 255);
    game.setTextCentre(1);

    if (outline) game.setTextOutline();

    game.beginTextCommandDisplayText("STRING");
    // game.addTextComponentScaleform(text);
    game.addTextComponentSubstringPlayerName(text);
    game.endTextCommandDisplayText(position[0], position[1]);

    game.clearDrawOrigin();
}