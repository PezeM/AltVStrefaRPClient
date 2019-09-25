import * as alt from 'alt';
import * as game from 'natives';
import Camera from 'source/src/Helpers/camera';
import cameraRotator from 'source/src/Helpers/cameraRotator';
import mainUi from 'source/src/Modules/Ui/mainUi';
import { IVehicleShop } from 'source/src/Constans/interfaces';
import { VehicleShopList } from 'source/src/Constans/types';
import utils from 'source/src/Helpers/utils';
import maths from 'source/src/Helpers/maths';

interface VehicleDataFromServer {
    VehicleModel: number;
    Price: number;
}

interface VehicleData {
    vehicleModel: number;
    price: number;
    vehicleClass: number;
    name: string;
    maxSpeed: string;
    maxAcceleration: string;
    maxBraking: string;
    maxTraction: string;
}

const VEHICLE_SHOP_DATA: VehicleShopList = [
    {
        id: 1,
        pedPosition: { x: -44.58461, y: -1105.648, z: 25.5, rot: 0 },
        // cameraPosition: { x: -45.5, y: -1095.7, z: 26.5 }, cameraRotation: { x: 0, y: 0, z: 308 },
        cameraPosition: { x: -50, y: -1094, z: 26.5 }, cameraRotation: { x: 0, y: 0, z: 260 },
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
    pedHash: number;
    vehicleSellers: any[];
    spawnedVehicle: number | null;
    shopCamera: Camera | null;
    constructor() {
        this.pedHash = 1206185632;
        this.vehicleSellers = [];
        this.spawnedVehicle = null;
        this.shopCamera = null;
        this.createPeds();

        alt.onServer('openVehicleShop', this.setupVehicleShop.bind(this));

        mainUi.onUiEvent('spawnNextVehicle', this.spawnNextVehicle.bind(this));
        mainUi.onUiEvent('buyVehicle', this.buyVehicle.bind(this));
        mainUi.onUiEvent('closeVehicleShop', this.exitVehicleShop.bind(this));
    }

    createPeds() {
        alt.loadModel(this.pedHash);
        VEHICLE_SHOP_DATA.forEach(shopPed => {
            const ped = game.createPed(26, this.pedHash, shopPed.pedPosition.x, shopPed.pedPosition.y, shopPed.pedPosition.z, shopPed.pedPosition.rot,
                false, true);
            game.freezeEntityPosition(ped, true);
            game.disablePedPainAudio(ped, true);
            game.setEntityInvincible(ped, true);
            game.setBlockingOfNonTemporaryEvents(ped, true);
            this.vehicleSellers.push({ pedId: ped, id: shopPed.id });
        });
    }

    getVehicleShopData(vehicleShopId: number) {
        return VEHICLE_SHOP_DATA.find(s => s.id === vehicleShopId);
    }

    isVehicleSeller(entityHit: number) {
        let isVehicleSeller = false;
        for (let i = 0; i < this.vehicleSellers.length; i++) {
            if (this.vehicleSellers[i].pedId === entityHit) {
                isVehicleSeller = true;
            }
        }
        return isVehicleSeller;
    }

    openVehicleShopMenu(entityHit: number) {
        const sellerPed = this.vehicleSellers.find(s => s.pedId === entityHit);
        if (sellerPed == null || typeof sellerPed === 'undefined') return;
        alt.emitServer('OpenVehicleShop', sellerPed.id);
    }

    openVehicleShopMenuCallback(option: string, entityHit: number) {
        switch (option) {
            case "openMenu":
                this.openVehicleShopMenu(entityHit);
                break;
            case "information":
                mainUi.showCefNotification(0, "Sprzedawca", "Widzisz sprzedawcę pojazdów. Możesz u niego zakupić swój upragiony samochód.", 6000);
                break;
        }
    }

    generateVehicleData(vehiclesData: string) {
        const currentVehicleShopData: VehicleData[] = [];
        JSON.parse(vehiclesData).forEach((vehicle: VehicleDataFromServer) => {
            const vehicleData = {
                vehicleModel: vehicle.VehicleModel,
                price: vehicle.Price,
                vehicleClass: game.getVehicleClassFromName(vehicle.VehicleModel),
                name: game.getDisplayNameFromVehicleModel(vehicle.VehicleModel),
                maxSpeed: (game.getVehicleModelMaxSpeed(vehicle.VehicleModel) * 3.6).toFixed(0),
                maxAcceleration: '',
                maxBraking: '',
                maxTraction: ''
            };
            vehicleData.maxAcceleration = (game.getVehicleModelAcceleration(vehicle.VehicleModel)
                / game.getVehicleClassMaxAcceleration(vehicleData.vehicleClass) * 100).toFixed(2);
            vehicleData.maxBraking = (game.getVehicleModelMaxBraking(vehicle.VehicleModel)
                / game.getVehicleClassMaxBraking(vehicleData.vehicleClass) * 100).toFixed(2);
            vehicleData.maxTraction = (game.getVehicleModelMaxTraction(vehicle.VehicleModel)
                / game.getVehicleClassMaxTraction(vehicleData.vehicleClass) * 100).toFixed(2);
            currentVehicleShopData.push(vehicleData);
        });

        return currentVehicleShopData;
    }

    changeVehicle(newVehicleModel: number, vehicleShopData: IVehicleShop) {
        try {
            if (this.spawnedVehicle || this.spawnedVehicle !== 0) {
                game.deleteEntity(this.spawnedVehicle as number);
                this.spawnedVehicle = null;
            }

            // Convert to async code
            utils.loadModelAsync(newVehicleModel).then(() => {
                alt.loadModel(newVehicleModel);
                this.spawnedVehicle = game.createVehicle(newVehicleModel, vehicleShopData.vehicleSpawn.x, vehicleShopData.vehicleSpawn.y,
                    vehicleShopData.vehicleSpawn.z, 180, false, false);
                game.setVehicleOnGroundProperly(this.spawnedVehicle, 0);
                game.setVehicleUndriveable(this.spawnedVehicle, true);
            })
        } catch (error) {
            alt.log(`Error while changing vehicle in vehicleShops = ${error}`);
        }
    }

    renderShopCamera(vehicleShopData: IVehicleShop) {
        alt.log(`Setting camera to positon ${JSON.stringify(vehicleShopData.cameraPosition, null, 2)}`);
        this.shopCamera = new Camera('DEFAULT_SCRIPTED_CAMERA', vehicleShopData.cameraPosition, vehicleShopData.cameraRotation, 65);
        this.shopCamera.setActive(true);
        game.renderScriptCams(true, false, 0, true, false);
    }

    setupCameraRotator(vehicleShopData: IVehicleShop) {
        const vehiclePos = game.getEntityCoords(this.spawnedVehicle as number, true);
        alt.log('Setting camera rotator');
        cameraRotator.start(this.shopCamera as Camera, vehicleShopData.cameraPosition, vehiclePos, { x: 4.3, y: 2.3, z: 0 }, 0);
        cameraRotator.setZBound(-0.8, 1.6);
        cameraRotator.setZUpMultipler(3);
    }

    setupVehicleShop(shopId: number, vehicleShopData: string) {
        const newVehicleData = this.generateVehicleData(vehicleShopData);
        const shopData = this.getVehicleShopData(shopId);

        this.changeVehicle(newVehicleData[0].vehicleModel, shopData as IVehicleShop);
        this.renderShopCamera(shopData as IVehicleShop);
        // this.setupCameraRotator(shopData as IVehicleShop);
        mainUi.openMenu("openVehicleShop", true, true, JSON.stringify(newVehicleData), shopId);
    }

    spawnNextVehicle(shopId: number, vehicleModel: number) {
        alt.log(`Inside spawnNextVehicle event with shopId = ${shopId} and vehicleModel = ${vehicleModel}`);
        const vehicleShopData = this.getVehicleShopData(shopId);
        if (vehicleShopData == null) return;
        this.changeVehicle(vehicleModel, vehicleShopData);
    }

    buyVehicle(shopId: number, vehicleModel: number) {
        const shopData = this.getVehicleShopData(shopId);
        if (shopData == null) {
            mainUi.showCefNotification(2, "Błąd", "Nie udało się zakupić pojazdu w sklepie.", 5000);
            return;
        }

        alt.emitServer('BuyVehicle', shopData.id, vehicleModel.toString());
    }

    exitVehicleShop() {
        if (this.spawnedVehicle || this.spawnedVehicle !== 0) {
            game.deleteEntity(this.spawnedVehicle as number);
            this.spawnedVehicle = null;
        }

        cameraRotator.pause(true);
        cameraRotator.stop();
        if (this.shopCamera !== null) {
            this.shopCamera.destroy(true);
            this.shopCamera = null;
        }
        mainUi.closeMenu();
        game.renderScriptCams(false, true, 400, true, false);
    }
}

const vehicleShop = new VehicleShop();
export default vehicleShop;