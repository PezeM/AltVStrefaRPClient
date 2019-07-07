import * as alt from 'alt';
import * as game from 'natives';
import utils from 'src/Helpers/utility.js';
let localPlayer = alt.getLocalPlayer();

const Ui = {};

Ui.showUi = function (toggle) {
    alt.log(`Showing UI = ${toggle}`);
    alt.toggleGameControls(toggle);
    game.displayHud(toggle);
    game.displayRadar(toggle);
}

Ui.showUiAndFreezePlayer = function (toggle) {
    Ui.showUi(toggle);
    game.freezeEntityPosition(localPlayer.scriptID, !toggle);
}

Ui.showNotification = async function (title, subtitle, message, char = "CHAR_DEFAULT", flashing = false, icon = 7) {
    game.requestStreamedTextureDict(char, true);
    await utils.promise(() => game.hasStreamedTextureDictLoaded(char));

    game.setNotificationTextEntry("STRING");
    game.addTextComponentSubstringPlayerName(message);
    game.setNotificationMessage2(char, char, flashing, icon, title, subtitle);
    game.drawNotification(false, true);
}

Ui.drawRectangleBackground = function (text, scale, font, backgroundColor) {
    game.beginTextCommandWidth("STRING");
    game.addTextComponentSubstringPlayerName(text);
    game.setTextFont(font);
    game.setTextScale(scale, scale);

    const height = game.getTextScaleHeight(1.2 * scale, font);
    const width = game.endTextCommandGetWidth(font);

    game.drawRect(0, 0 + scale / 25, width, height, backgroundColor[0], backgroundColor[1], backgroundColor[2], backgroundColor[3]);
}

Ui.drawText = function (text, position, font, color, scale, outline = true, center = true) {
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

Ui.drawText3D = function (text, position, font, color, scale, outline = true, drawBackground = true, backgroundColor = [0, 0, 0, 90]) {
    const camCoord = game.getGameplayCamCoords();
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
        Ui.drawRectangleBackground(text, scale, font, backgroundColor);

    game.clearDrawOrigin();
}

Ui.getMinimapAnchor = function () {
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

export default Ui;