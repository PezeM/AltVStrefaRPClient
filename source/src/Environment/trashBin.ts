import * as alt from 'alt';
import * as game from 'natives';
import mainUi from 'src/Modules/Ui/mainUi.js';
import { draw3DText } from 'source/src/Helpers/uiHelper';
import { TrashBinArray } from 'source/typings/strefa';

const BIN_OBJECTS: TrashBinArray = [
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
    searchedBins: number[];
    searchingInBin: boolean;
    currentBinId: number;
    percentage: number;
    tickInterval: number;
    constructor() {
        this.searchedBins = [];
        this.searchingInBin = false;
        this.currentBinId = -1;
        this.percentage = 0;

        this.tickInterval = alt.setInterval(this.tick.bind(this), 0);
        alt.log(`Initialized TrashBin class`);
    }

    includesBin(model: number) {
        return BIN_OBJECTS.some(bin => bin.model === model);
    }

    getBin(model: number) {
        for (const bin of BIN_OBJECTS) {
            if (bin.model === model) {
                return bin;
            }
        }
    }

    searchBinMenuCallback(option: string, trashBinId: number) {
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
            const binCoords = game.getEntityCoords(this.currentBinId, true);
            draw3DText(`Przeszukiwanie śmietnika ~g~ ${Math.floor((this.percentage / 10000) * 100)} ~r~%`,
                [binCoords.x, binCoords.y, binCoords.z], 4, [255, 255, 255, 255], 0.65, true);
        }
    }

    searchTrashbin(trashBinId: number) {
        alt.log(`Inside searchTrashbin`);
        if (!this.checkIfValid(trashBinId)) return;
        else if (this.searchedBins.includes(trashBinId)) {
            mainUi.showCefNotification(3, "Śmietnik przeszukany", "Ten śmietnik był już przez ciebie przeszukiwany.", 5000);
            return;
        }

        const localPlayerId = game.playerPedId();
        this.searchingInBin = true;
        this.currentBinId = trashBinId;
        this.searchedBins.push(trashBinId);

        alt.setTimeout(() => {
            this.searchedBins.splice(this.searchedBins.indexOf(trashBinId), 1);
            alt.log('Searched bins array: ' + JSON.stringify(this.searchedBins));
        }, 60000 * 15);
        game.taskStartScenarioInPlace(localPlayerId, "PROP_HUMAN_BUM_BIN", 0, true);

        this.percentage = 100;
        const binInterval = alt.setInterval(() => {
            this.percentage += 100;
        }, 100);

        alt.setTimeout(() => {
            game.clearPedTasks(localPlayerId);
            const trashBinModel = this.getBin(game.getEntityModel(trashBinId));
            if (trashBinModel == null) return;
            alt.emitServer("SearchedInBin", trashBinModel.bigTrashbin);
            this.searchingInBin = false;
            this.currentBinId = -1;
            this.percentage = 0;
            alt.clearInterval(binInterval);
        }, 11000);
    }

    checkIfValid(trashBinId: number) {
        if (!this.includesBin(game.getEntityModel(trashBinId)) || !game.doesEntityExist(trashBinId) || this.searchingInBin) return false;
        else return true;
    }
}

const trashBin = new TrashBin();
export default trashBin;