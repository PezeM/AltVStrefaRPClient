/// <reference path="../../natives.d.ts" />
/// <reference path="../../alt.d.ts" />

import * as alt from 'alt';
import * as game from 'natives';
import mainUi from 'src/Modules/Ui/mainUi.js';
let localPlayerId = alt.getLocalPlayer();

alt.onServer('teleportToWaypoint', () => {
    var waypointBlip = game.getFirstBlipInfoId(8);
    alt.log('Waypoint blip info: ' + JSON.stringify(waypointBlip));
    if (waypointBlip <= 0) {
        mainUi.showCefNotification(3, "Brak blipa", "Nie znaleziono żadnego blipa.", 4000);
        return;
    }

    var waypointCoords = game.getBlipInfoIdCoord(waypointBlip); // z will be 1
    alt.log('Waypoint coords: ' + JSON.stringify(waypointCoords));
    if (waypointCoords == null) return;
    // var z = 0;
    var groundFound = false;
    waypointCoords.z = 1000;

    game.setEntityCoords(localPlayerId, waypointCoords.x, waypointCoords.y, 800, true, false, false, true);
    game.startPlayerTeleport(localPlayerId, waypointCoords.x, waypointCoords.y, waypointCoords.z, 0, true, true, false);

    for (var i = 0; i < 1000; i++) {
        game.setEntityCoords(localPlayerId, waypointCoords.x, waypointCoords.y, waypointCoords.z, true, false, false, true);

        var [isGroundFound, positionZ] = game.getGroundZFor3dCoord(waypointCoords.x, waypointCoords.y, waypointCoords.z, 0, false);
        if (isGroundFound) {
            groundFound = true;
            if (!game.isPlayerTeleportActive()) {
                game.startPlayerTeleport(localPlayerId, waypointCoords.x, waypointCoords.y, positionZ, 0, true, true, false);
            }
            game.setEntityCoords(localPlayerId, waypointCoords.x, waypointCoords.y, positionZ, true, false, false, true);
            mainUi.showCefNotification(1, "Sukces", `Znaleziono pozycje poczas ${i} iteracji. PozycjaZ ${positionZ}`, 4000);
            break;
        }

        alt.log(`Iteration ${i} current position: ${positionZ}`);
        waypointCoords.z = positionZ;
    }

    if (!groundFound) {
        game.setEntityCoords(localPlayerId, waypointCoords.x, waypointCoords.y, 1000, true, false, false, true);
    }
    else {
        alt.log('Setting Z coord to ' + waypointCoords.z);
    }
});

function getGroundCoords(position, tries) {
    var groundZ;
    for (var i = 0; i < tries; tries++) {
        game.RequestCollisionAtCoord(x, y, z)
    }

    return { x: position.x, y: position.y, z: 800.0 };
}