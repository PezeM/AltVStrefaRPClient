/// <reference path="../../../natives.d.ts" />
/// <reference path="../../../alt.d.ts" />

import * as alt from 'alt';
import * as game from 'natives';
import uiHelper from 'src/Helpers/uiHelpers.js';
import mainUi from 'src/Modules/Ui/mainUi.js';
import Animations from 'src/Modules/animations.js';
import trashBin from 'src/Environment/trashBin.js';
import { vehicleShop } from 'src/Modules/Vehicle/vehicleShop.js';
import banking from 'src/Modules/banking.js';

class CircleMenuController {
    constructor() {
        this.menuOpened = false;
        this.menuName = '';
        this.entityHit = -1;
        this.screenResolution = game.getActiveScreenResolution(null, null);
        this.animations = new Animations();
        mainUi.onUiEvent('circleMenuCallback', this.circleMenuCallback.bind(this));
    }

    get isMenuOpened() {
        return this.menuOpened;
    }

    openMenu(menuName, freezePlayer = true) {
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
        uiHelper.showUiAndFreezePlayer(true);
        alt.showCursor(false);
    }

    onKeyPress(entityHit) {
        this.entityHit = entityHit;
        let entityType = game.getEntityType(this.entityHit);
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
        let isPlayer = alt.Player.all.some(p => p.scriptID === this.entityHit);
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
        let vehicleFound = alt.Vehicle.all.some(v => v.scriptID === this.entityHit);
        if (vehicleFound) {
            alt.log(`Found vehicle`)
            this.openMenu('vehicle');
        }
    }

    onObjectFound() {
        let entityModel = game.getEntityModel(this.entityHit);
        if (banking.atmModels.includes(entityModel)) {
            alt.log(`Found atm`);
            this.openMenu('atm');
        } else if (trashBin.includesBin(entityModel)) {
            alt.log(`Found trash bin`);
            this.openMenu('trashBin');
        }
    }

    circleMenuCallback(option) {
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

    vehicleCircleMenuCallback(option) {
        switch (option) {
            case "openVehicle":
                var vehicle = alt.Vehicle.all.find(v => v.scriptID === this.entityHit);
                alt.log(`Found vehicle ${JSON.stringify(vehicle)}`);
                alt.emitServer("TryToOpenVehicle", vehicle);
                break;
            case "sellVehicle":
                alt.log(`Sell vehicle`);
                break;
            case "despawnVehicle":
                var vehicleToDespawn = alt.Vehicle.all.find(v => v.scriptID === this.entityHit);
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

    bankCircleMenuCallback(option) {
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

    atmCircleMenuCallback(option) {
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