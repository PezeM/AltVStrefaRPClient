import * as alt from 'alt';
import * as game from 'natives';
import { showUiAndFreezePlayer } from 'source/src/Helpers/uiHelper';
import mainUi from 'source/src/Modules/Ui/mainUi';
import Animations from 'source/src/Modules/animations';
import trashBin from 'source/src/Environment/trashBin';
import vehicleShop from 'source/src/Modules/Vehicle/vehicleShop';
import banking from 'source/src/Modules/banking';
import { EntityTypes } from 'source/src/Constans/entityTypes';

enum test {
    None,
    Ped,
    Vehicle,
    Object
}

class CircleMenuController {
    menuOpened: boolean;
    menuName: string;
    entityHit: number;
    screenResolution: any[];
    animations: Animations;
    constructor() {
        this.menuOpened = false;
        this.menuName = '';
        this.entityHit = -1;
        this.screenResolution = game.getActiveScreenResolution(0, 0);
        this.animations = new Animations();
        mainUi.onUiEvent('circleMenuCallback', this.circleMenuCallback.bind(this));
    }

    get isMenuOpened() {
        return this.menuOpened;
    }

    openMenu(menuName: string, freezePlayer = true) {
        if (this.menuOpened) return;

        this.menuName = menuName;
        mainUi.openMenu('openCircleMenu', true, freezePlayer, this.menuName);
        this.menuOpened = true;
        alt.setCursorPos({
            x: this.screenResolution[1] / 2,
            y: this.screenResolution[2] / 2
        });
    }

    closeMenu(hideMenu = false) {
        if (hideMenu)
            mainUi.emitUiEvent('closeCircleMenu');

        this.menuOpened = false;
        mainUi.viewOpened = false;
        mainUi.unfocusView();
        showUiAndFreezePlayer(true);
        alt.showCursor(false);
    }

    onKeyPress(entityHit: number) {
        this.entityHit = entityHit;
        const entityType: EntityTypes = game.getEntityType(this.entityHit);
        switch (entityType) {
            case 1:
                this.onPedFound();
                break;
            case 2:
                this.onVehicleFound();
                break;
            case 3:
                this.onObjectFound();
                break;
        }
    }

    onPedFound() {
        const isPlayer = alt.Player.all.some(p => p.scriptID === this.entityHit);
        if (isPlayer) {
            alt.log('Found player');
            this.openMenu('player');
        } else if (banking.pedList.includes(this.entityHit)) {
            alt.log(`Found bank ped`);
            this.openMenu('bank');
        } else if (vehicleShop.isVehicleSeller(this.entityHit)) {
            alt.log(`Vehicle seller ped`);
            this.openMenu('vehicleShop');
        }
    }

    onVehicleFound() {
        const vehicleFound = alt.Vehicle.all.some(v => v.scriptID === this.entityHit);
        if (vehicleFound) {
            alt.log(`Found vehicle`)
            this.openMenu('vehicle');
        }
    }

    onObjectFound() {
        const entityModel = game.getEntityModel(this.entityHit);
        if (banking.atmModels.includes(entityModel)) {
            alt.log(`Found atm`);
            this.openMenu('atm');
        } else if (trashBin.includesBin(entityModel)) {
            alt.log(`Found trash bin`);
            this.openMenu('trashBin');
        }
    }

    circleMenuCallback(option: string) {
        alt.log(`Inside circle menu callback: ${option}`);
        this.closeMenu();
        if (option === 'close') return;

        switch (this.menuName) {
            case "vehicle":
                this.vehicleCircleMenuCallback(option);
                break;
            case "animations":
                this.animations.findAnimation(option);
                break;
            case "bank":
                this.bankCircleMenuCallback(option);
                break;
            case "atm":
                this.atmCircleMenuCallback(option);
                break;
            case "trashBin":
                trashBin.searchBinMenuCallback(option, this.entityHit);
                break;
            case "vehicleShop":
                vehicleShop.openVehicleShopMenuCallback(option, this.entityHit);
                break;
        }
    }

    vehicleCircleMenuCallback(option: string) {
        switch (option) {
            case "openVehicle":
                const vehicle = alt.Vehicle.all.find(v => v.scriptID === this.entityHit);
                alt.log(`Found vehicle ${JSON.stringify(vehicle)}`);
                alt.emitServer("TryToOpenVehicle", vehicle);
                break;
            case "sellVehicle":
                alt.log(`Sell vehicle`);
                break;
            case "despawnVehicle":
                const vehicleToDespawn = alt.Vehicle.all.find(v => v.scriptID === this.entityHit);
                if (vehicleToDespawn == null) return;
                alt.emitServer("DespawnVehicle", vehicleToDespawn);
                break;
            // case "information":
            //     let vehicle = alt.Vehicle.all.find(v => v.scriptID === this.entityHit);
            //     if (vehicle == null) break;
            //     let vehicleDisplayName = game.getDisplayNameFromVehicleModel(vehicle.scriptID);
            //     let vehiclePlate = game.getVehicleNumberPlateText(vehicle.scriptID);
            //     mainUi.showCefNotification(0, "Pojazd", `VehicleDisplayName = ${vehicleDisplayName} VehiclePlateText = ${vehiclePlate}`, 6000);
            //     break;
        }
    }

    bankCircleMenuCallback(option: string) {
        switch (option) {
            case "openBank":
                alt.emitServer("TryToOpenBankMenu");
                break;
            case "createAccount":
                alt.emitServer("CreateBankAccount");
                break;
            case "information":
                mainUi.showCefNotification(0, "Bank", "Widzisz bankiera, możesz u niego zarządzać aktualnym kontem bankowym lub założyć nowe", 6000);
                break;
        }
    }

    atmCircleMenuCallback(option: string) {
        switch (option) {
            case "openAtm":
                alt.emitServer("TryToOpenBankMenu");
                break;
            case "information":
                mainUi.showCefNotification(0, "Bankomat", "Widzisz bankomat w którym możesz zarządząć swoim kontem bankowym.", 5500);
                break;
        }
    }
}

const circleMenuController = new CircleMenuController();
export default circleMenuController;