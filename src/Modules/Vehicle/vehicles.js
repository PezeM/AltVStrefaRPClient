/// <reference path="../../../altv.d.ts" />
/// <reference path="../../../alt.d.ts" />

import alt from 'alt';
import game from 'natives';
import { drawText, draw3DText } from 'src/Helpers/uiHelper.js';

let localPlayer = alt.getLocalPlayer();

alt.on('update', () => {
    if (game.isPedInAnyVehicle(localPlayer.scriptID, false)) {
        var vehicle = game.getVehiclePedIsIn(localPlayer.scriptID, false);
        drawText(`KM/H`, [0.9, 0.83], 4, [255, 255, 255, 255], 0.6, true, false);
        drawText(`~r~${(game.getEntitySpeed(vehicle) * 3.6).toFixed(0)}`, [0.9, 0.86], 4, [255, 255, 255, 255], 0.6, true, false);

        if (game.isRadarHidden() || !game.isRadarEnabled()) {
            alt.log('Radar was hidden, enabling it');
            game.displayRadar(true);
        }

    } else {
        if (!game.isRadarHidden() || game.isRadarEnabled()) {
            alt.log('Radar was enabled, hiding it');
            game.displayRadar(false);
        }
    }


    var coords = game.getEntityCoords(localPlayer.scriptID, true);
    var vehicle = game.getClosestVehicle(coords.x, coords.y, coords.z, 80, 0, 71);
    if (vehicle == 0) return;
    let vehiclePosition = game.getEntityCoords(vehicle, true);

    draw3DText('ID: ' + vehicle, [vehiclePosition.x, vehiclePosition.y, vehiclePosition.z + 1],
        4, [255, 255, 255, 200], 0.5, true);
});

alt.onServer('putIntoVehicle', veh => {
    game.setPedIntoVehicle(localPlayer.scriptID, veh.getScriptID(), -1);
});
