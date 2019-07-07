import * as alt from 'alt';
import * as game from 'natives';
import mainUi from 'src/Modules/Ui/mainUi.js';
import { draw3DText } from 'source/src/Helpers/uiHelper';

const BIN_OBJECTS = [
    {
        model: 218085040, bigTrashbin: true,
    },
    {
        model: 666561306, bigTrashbin: true,
    },
    {
        model: 4236481708, bigTrashbin: true,
    },
    {
        model: 1437508529, bigTrashbin: false,
    },
    {
        model: 4164154385, bigTrashbin: false,
    },
    {
        model: 1329570871, bigTrashbin: false,
    }
];

class TrashBin {
    constructor() {
        this.searchedBins = [];
        this.searchingInBin = false;
        this.currentBinId = -1;
        this.percentage = 0;

        this.tickInterval = alt.setInterval(this.tick.bind(this), 0);
        alt.log(`Initialized TrashBin class`);
    }

    includesBin(model) {
        return BIN_OBJECTS.some(bin => bin.model === model);
    }

    getBin(model) {
        for (const bin of BIN_OBJECTS) {
            if (bin.model === model) {
                return bin;
            }
        }
    }

    searchBinMenuCallback(option, trashBinId) {
        alt.log(`Inside searchBinMenuCallback`);
        switch (option) {
            case "searchBin":
                this.searchTrashbin(trashBinId);
                break;
            case "information":
                mainUi.showCefNotification(0, "Śmietnik", "Widzisz smietnik, możesz go przeszukać w celu odnalezienia ciekawych przedmiotów.", 6000);
                break;
        }
    }

    tick() {
        if (this.searchingInBin) {
            let binCoords = game.getEntityCoords(this.currentBinId, true);
            draw3DText(`Przeszukiwanie śmietnika ~g~ ${Math.floor((this.percentage / 10000) * 100)} ~r~%`,
                [binCoords.x, binCoords.y, binCoords.z], 4, [255, 255, 255, 255], 0.65, true);
        }
    }

    searchTrashbin(trashBinId) {
        alt.log(`Inside searchTrashbin`);
        if (!this.checkIfValid(trashBinId)) return;
        else if (this.searchedBins.includes(trashBinId)) {
            mainUi.showCefNotification(3, "Śmietnik przeszukany", "Ten śmietnik był już przez ciebie przeszukiwany.", 5000);
            return;
        }

        let localPlayer = alt.getLocalPlayer();
        this.searchingInBin = true;
        this.currentBinId = trashBinId;
        this.searchedBins.push(trashBinId);

        alt.setTimeout(() => {
            this.searchedBins.splice(searchedBins.indexOf(trashBinId), 1);
            alt.log('Searched bins array: ' + JSON.stringify(searchedBins));
        }, 60000 * 15);
        game.taskStartScenarioInPlace(localPlayer.scriptID, "PROP_HUMAN_BUM_BIN", 0, true);

        this.percentage = 100;
        let binInterval = alt.setInterval(() => {
            this.percentage += 100;
        }, 100);

        alt.setTimeout(() => {
            game.clearPedTasks(localPlayer.scriptID);
            alt.emitServer("SearchedInBin", this.getBin(game.getEntityModel(trashBinId)).bigTrashbin);
            this.searchingInBin = false;
            this.currentBinId = -1;
            this.percentage = 0;
            alt.clearInterval(binInterval);
        }, 11000);
    }

    checkIfValid(trashBinId) {
        if (!this.includesBin(game.getEntityModel(trashBinId)) || !game.doesEntityExist(trashBinId) || this.searchingInBin) return false;
        else return true;
    }
}

let trashBin = new TrashBin();
export default trashBin;