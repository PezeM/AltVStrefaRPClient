/// <reference path="../../altv.d.ts" />
/// <reference path="../../alt.d.ts" />

import alt from 'alt';
import game from 'natives';
import mainUi from 'src/Modules/Ui/mainUi.js';
import { draw3DText } from 'src/Helpers/uiHelper.js';

alt.log('thrashBins.js loaded');
let searchedBins = [];
const binObjects = [
    {
        model: 218085040, bigThrashbin: true,
    },
    {
        model: 666561306, bigThrashbin: true,
    },
    {
        model: 4236481708, bigThrashbin: true,
    },
    {
        model: 1437508529, bigThrashbin: false,
    },
    {
        model: 4164154385, bigThrashbin: false,
    },
    {
        model: 1329570871, bigThrashbin: false,
    }
];
let searchingInBin = false;
let currentBinId = -1;
let percentage = 0;
let localPlayer = alt.getLocalPlayer();

export function getBin(binModel) {
    return binObjects.find(b => b.model == binModel);
}

export function includesBin(model) {
    return binObjects.some(b => b.model == model);
}

export function searchBinMenuCallback(option, thrashBinId) {
    switch (option) {
        case "searchBin":
            searchThrashbin(thrashBinId);
            break;
        case "information":
            mainUi.showCefNotification(0, "Śmietnik", "Widzisz smietnik, możesz go przeszukać w celu odnalezienia ciekawych przedmiotów.", 6000);
            break;
    }
}

function searchThrashbin(thrashBinId) {
    if (!checkIfValid(thrashBinId)) return;

    if (searchedBins.includes(thrashBinId)) {
        mainUi.showCefNotification(3, "Śmietnik przeszukany", "Ten śmietnik był już ciebie przeszukiwany.", 5000);
        return;
    }

    searchingInBin = true;
    currentBinId = thrashBinId;
    searchedBins.push(thrashBinId);
    alt.setTimeout(() => {
        searchedBins.splice(searchedBins.indexOf(thrashBinId), 1);
        alt.log('Searched bins array: ' + JSON.stringify(searchedBins));
    }, 60000 * 15);
    game.taskStartScenarioInPlace(localPlayer.scriptID, "PROP_HUMAN_BUM_BIN", 0, true);

    percentage = 100;
    let binInterval = alt.setInterval(() => {
        percentage += 100;
        alt.log(`Updating percentage to ${percentage}`);
    }, 100);

    alt.setTimeout(() => {
        game.clearPedTasks(localPlayer.scriptID);
        alt.emitServer("SearchedInBin", getBin(game.getEntityModel(thrashBinId)).bigThrashbin);
        searchingInBin = false;
        currentBinId = -1;
        percentage = 0;
        alt.clearInterval(binInterval);
    }, 10100);
}

function checkIfValid(thrashBinId) {
    if (!includesBin(game.getEntityModel(thrashBinId)) || !game.doesEntityExist(thrashBinId) || searchingInBin) return false;
    else return true;
}

export function onUpdate() {
    if (searchingInBin) {
        var binCoords = game.getEntityCoords(currentBinId, true);
        draw3DText(`Przeszukiwanie śmietnika ~g~ ${Math.floor((percentage / 10000) * 100)} ~r~%`,
            [binCoords.x, binCoords.y, binCoords.z], 4, [255, 255, 255, 255], 0.5, true);
    }
}

export default { includesBin, searchBinMenuCallback, onUpdate };