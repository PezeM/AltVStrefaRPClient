/// <reference path="../../../natives.d.ts" />
/// <reference path="../../../alt.d.ts" />

import * as alt from 'alt';
import * as game from 'natives';
import uiHelper from 'src/Helpers/uiHelpers.js';
import mainUi from 'src/Modules/Ui/mainUi.js';
import Animations from 'src/Modules/animations.js';
import trashBin from 'src/Environment/trashBin.js';
import vehicleShop from 'src/Modules/Vehicle/vehicleShop.js';
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

    openCircleMenu(menuName, freezePlayer = true) {
        if (this.menuOpened) return;

        this.menuName = menuName;
        mainUi.emitUiEvent('openCircleMenu', this.menuName);
        this.menuOpened = true;
        if (freezePlayer) {
            uiHelper.showUiAndFreezePlayer(!freezePlayer);
        }
        alt.setCursorPos({
            x: this.screenResolution[0] / 2,
            y: this.screenResolution[1] / 2
        });
        alt.showCursor(true);
        alt.toggleGameControls(false);
        mainUi.focusView();
    }

    closeCircleMenu(hideMenu = false) {
        if (hideMenu)
            mainUi.emitUiEvent('closeCircleMenu');

        this.menuOpened = false;
        uiHelper.showUiAndFreezePlayer(true);
        alt.showCursor(false);
        alt.toggleGameControls(true);
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
        alt.log(`Found ped`);
        let isPlayer = alt.Player.all.some(p => p.scriptID === this.entityHit);
        if (isPlayer) {
            alt.log('Found player');
            this.openCircleMenu('player');
        } else if (banking.pedList.includes(this.entityHit)) {
            alt.log(`Found bank ped`);
            this.openCircleMenu('bank');
        } else if (vehicleShop.isVehicleSeller(this.entityHit)) {
            alt.log(`Vehicle seller ped`);
            this.openCircleMenu('vehicleShop');
        }
    }

    onVehicleFound() {
        let vehicleFound = alt.Vehicle.all.some(v => v.scriptID === this.entityHit);
        if (vehicleFound) {
            alt.log(`Found vehicle`)
            openCircleMenu('vehicle');
        }
    }

    onObjectFound() {
        let entityModel = game.getEntityModel(this.entityHit);
        if (banking.atmModels.includes(entityModel)) {
            alt.log(`Found atm`);
            this.openCircleMenu('atm');
        } else if (trashBin.includesBin(entityModel)) {
            alt.log(`Found trash bin`);
            this.openCircleMenu('trashBin');
        }
    }

    circleMenuCallback(option) {
        alt.log(`Circle menu callback: ${option}`);
        closeCircleMenu();
        if (option === 'close') return;

        switch (this.menuOpened) {
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


alt.on('gameStateChanged', state => {
    if (state === 'playing') {
        alt.log('Initializing circleMenu controller');
        const circleMenuController = new CircleMenuController();
    } else { }
});
