import * as alt from 'alt';
import * as game from 'natives';
import mainUi from 'source/src/Modules/Ui/mainUi.js';
const localPlayer = alt.getLocalPlayer();

alt.onServer('teleportToWaypoint', () => {
    const waypointBlip = game.getFirstBlipInfoId(8);
    alt.log('Waypoint blip info: ' + JSON.stringify(waypointBlip));
    if (waypointBlip <= 0) {
        mainUi.showCefNotification(3, "Brak blipa", "Nie znaleziono żadnego blipa.", 4000);
        return;
    }

    const waypointCoords = game.getBlipInfoIdCoord(waypointBlip); // z will be 1
    alt.log('Waypoint coords: ' + JSON.stringify(waypointCoords));
    if (waypointCoords == null) return;
    let groundFound = false;
    waypointCoords.z = 1000;

    game.setEntityCoords(localPlayer.scriptID, waypointCoords.x, waypointCoords.y, 800, true, false, false, true);
    game.startPlayerTeleport(localPlayer.scriptID, waypointCoords.x, waypointCoords.y, waypointCoords.z, 0, true, true, false);

    let i = 0;
    const interval = alt.setInterval(() => {
        game.setEntityCoords(localPlayer.scriptID, waypointCoords.x, waypointCoords.y, waypointCoords.z, true, false, false, true);

        const [isGroundFound, positionZ] = game.getGroundZFor3dCoord(waypointCoords.x, waypointCoords.y, waypointCoords.z, 0, false);
        if (isGroundFound) {
            groundFound = true;
            if (!game.isPlayerTeleportActive()) {
                game.startPlayerTeleport(localPlayer.scriptID, waypointCoords.x, waypointCoords.y, positionZ, 0, true, true, false);
            }
            game.setEntityCoords(localPlayer.scriptID, waypointCoords.x, waypointCoords.y, positionZ, true, false, false, true);
            mainUi.showCefNotification(1, "Sukces", `Znaleziono pozycje poczas ${i} iteracji. PozycjaZ ${positionZ}`, 4000);
            alt.clearInterval(interval);
        }

        alt.log(`Iteration ${i} current position: ${positionZ}`);
        waypointCoords.z = positionZ;
        i++;
        if (i > 1000) alt.clearInterval(interval);
    }, 5);

    if (!groundFound) {
        game.setEntityCoords(localPlayer.scriptID, waypointCoords.x, waypointCoords.y, 1000, true, false, false, true);
    }
    else {
        alt.log('Setting Z coord to ' + waypointCoords.z);
    }
});