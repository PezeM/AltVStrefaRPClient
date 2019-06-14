/// <reference path="../../../natives.d.ts" />
/// <reference path="../../../alt.d.ts" />

import * as alt from 'alt';
import * as game from 'natives';
import mainUi from 'src/Modules/Ui/mainUi.js';
import Camera from 'src/Helpers/camera.js';
import cameraRotator from 'src/Helpers/cameraRotator.js';

const VEHICLE_SHOP_DATA = [
    {
        id: 1,
        pedPosition: { x: -44.58461, y: -1105.648, z: 25.5, rot: 0 },
        cameraPosition: { x: -45.5, y: -1095.7, z: 26.5 }, cameraRotation: { x: 0, y: 0, z: 308 },
        vehicleSpawn: { x: -43.9, y: -1096.6, z: 26.1 }
    },
    {
        id: 2,
        pedPosition: { x: -986.62817, y: -2947.9396, z: 13, rot: 340.29 },
        cameraPosition: { x: 0, y: 0, z: 0 }, cameraRotation: { x: 0, y: 0, z: 0 },
        vehicleSpawn: { x: 0, y: 0, z: 0 }
    },
    {
        id: 3,
        pedPosition: { x: -182.4818, y: -1383.7307, z: 31, rot: 165.78 },
        cameraPosition: { x: 0, y: 0, z: 0 }, cameraRotation: { x: 0, y: 0, z: 0 },
        vehicleSpawn: { x: 0, y: 0, z: 0 }
    },
];

class VehicleShop {
    constructor() {
        this.pedHash = 1206185632;
        this.vehicleSellers = [];
        this.currentVehicleShopData = null;
        this.spawnedVehicle = null;
        this.shopCamera = null;
        this.createPeds();
    }

    createPeds() {
        alt.loadModel(this.pedHash);
        VEHICLE_SHOP_DATA.forEach(shopPed => {
            var ped = game.createPed(26, this.pedHash, shopPed.pedPosition.x, shopPed.pedPosition.y, shopPed.pedPosition.z, shopPed.pedPosition.rot, false, true);
            game.freezeEntityPosition(ped, true);
            game.disablePedPainAudio(ped, true);
            game.setEntityInvincible(ped, true);
            game.setBlockingOfNonTemporaryEvents(ped, true);
            this.vehicleSellers.push({ pedId: ped, id: shopPed.id });
        });
    }

    getVehicleShopData(vehicleShopId) {
        return VEHICLE_SHOP_DATA.find(s => s.id === vehicleShopId);
    }

    isVehicleSeller(entityHit) {
        let isVehicleSeller = false;
        for (let i = 0; i < this.vehicleSellers.length; i++) {
            if (this.vehicleSellers[i].pedId === entityHit) {
                isVehicleSeller = true;
            }
        }
        return isVehicleSeller;
    }

    openVehicleShopMenu(entityHit) {
        let sellerPed = this.vehicleSellers.find(s => s.pedId === entityHit);
        if (sellerPed == null || typeof sellerPed == 'undefined') return;
        alt.emitServer('OpenVehicleShop', sellerPed.id);
    }

    openVehicleShopMenuCallback(option, entityHit) {
        switch (option) {
            case "openMenu":
                this.openVehicleShopMenu(entityHit);
                break;
            case "information":
                mainUi.showCefNotification(0, "Sprzedawca", "Widzisz sprzedawcę pojazdów. Możesz u niego zakupić swój upragiony samochód.", 6000);
                break;
        }
    }

    generateVehicleData(vehiclesData) {
        this.currentVehicleShopData = [];
        JSON.parse(vehiclesData).forEach(vehicle => {
            var vehicleData = {
                vehicleModel: vehicle.VehicleModel,
                price: vehicle.Price,
                vehicleClass: game.getVehicleClassFromName(vehicle.VehicleModel),
                name: game.getDisplayNameFromVehicleModel(vehicle.VehicleModel),
                maxSpeed: (game.getVehicleModelMaxSpeed(vehicle.VehicleModel) * 3.6).toFixed(0),
            };
            vehicleData.maxAcceleration = (game.getVehicleModelAcceleration(vehicle.VehicleModel) / game.getVehicleClassMaxAcceleration(vehicleData.vehicleClass) * 100).toFixed(2);
            vehicleData.maxBraking = (game.getVehicleModelMaxBraking(vehicle.VehicleModel) / game.getVehicleClassMaxBraking(vehicleData.vehicleClass) * 100).toFixed(2);
            vehicleData.maxTraction = (game.getVehicleModelMaxTraction(vehicle.VehicleModel) / game.getVehicleClassMaxTraction(vehicleData.vehicleClass) * 100).toFixed(2);
            this.currentVehicleShopData.push(vehicleData);
        });

        return this.currentVehicleShopData;
    }

    changeVehicle(newVehicleModel, vehicleShopData) {
        try {
            if (this.spawnedVehicle || this.spawnedVehicle !== 0) {
                game.deleteEntity(this.spawnedVehicle);
                this.spawnedVehicle = null;
            }

            alt.loadModel(newVehicleModel);
            this.spawnedVehicle = game.createVehicle(newVehicleModel, vehicleShopData.vehicleSpawn.x, vehicleShopData.vehicleSpawn.y,
                vehicleShopData.vehicleSpawn.z, 180, true, true);
            game.setVehicleOnGroundProperly(this.spawnedVehicle);
            game.setVehicleUndriveable(this.spawnedVehicle, true);
        } catch (error) {
            alt.log(`Error while changing vehicle in vehicleShops.js = ${e}`);
        }
    }

    renderShopCamera(vehicleShopData) {
        console.log(`Setting camera to positon ${vehicleShopData.cameraPosition}`);
        this.shopCamera = new Camera('DEFAULT_SCRIPTED_CAMERA', vehicleShopData.cameraPosition, vehicleShopData.cameraRotation, 45);
        this.shopCamera.setActive(true);
        game.renderScriptCams(true, false, 0, true, false);
    }

    setupCameraRotator(vehicleShopData) {
        var vehiclePos = game.getEntityCoords(this.spawnedVehicle, true);
        cameraRotator.start(this.shopCamera, vehicleShopData.cameraPosition, vehiclePos, { x: 4.3, y: 2.3, z: 0 }, 180);
        cameraRotator.setZBound(-0.8, 1.6);
        cameraRotator.setZUpMultipler(3);
    }

    setupVehicleShop(shopId, vehiclesData) {
        let newVehicleData = this.generateVehicleData(vehiclesData);
        var vehicleShop = this.getVehicleShopData(shopId);

        this.changeVehicle(newVehicleData[0].vehicleModel, vehicleShop);
        this.renderShopCamera(vehicleShop);
        this.setupCameraRotator(vehicleShop);
        return newVehicleData;
    }

    buyVehicle(shopId, vehicleModel) {
        let vehicleShop = this.getVehicleShopData(shopId);
        if (vehicleShop == null) {
            mainUi.showCefNotification(2, "Błąd", "Nie udało się zakupić pojazdu w sklepie.", 5000);
            return;
        }

        alt.emitServer('BuyVehicle', vehicleShop.id, Number(vehicleModel));
    }

    exitVehicleShop() {
        if (this.spawnedVehicle || this.spawnedVehicle !== 0) {
            game.deleteEntity(this.spawnedVehicle);
            this.spawnedVehicle = null;
        }

        cameraRotator.pause(true);
        cameraRotator.stop();
        if (this.shopCamera) {
            this.shopCamera.destroy(true);
            this.shopCamera = null;
        }
        this.currentVehicleShopData = null;
        game.renderScriptCams(false, false, 0, true, false);
    }
}

let vehicleShop = null;
alt.on('gameStateChanged', state => {
    if (state === 'playing') {
        alt.log('Initializing vehicle shops');
        vehicleShop = new VehicleShop();
    }
})

export { vehicleShop };