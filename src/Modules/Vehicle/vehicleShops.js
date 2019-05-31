/// <reference path="../../../altv.d.ts" />
/// <reference path="../../../alt.d.ts" />

import alt from 'alt';
import game from 'natives';
import mainUi from 'src/Modules/Ui/mainUi.js';
import Camera from 'src/Helpers/camera.js';
import cameraRotator from 'src/Helpers/cameraRotator.js';

let localPlayer = alt.getLocalPlayer();
let currentVehicleShopData = null;
let currentVehicle = null;
let shopCamera = null;
let vehicleSellers = [];
const vehicleShopData = [
    {
        id: 1, pedPosition: { x: -44.58461, y: -1105.648, z: 25.5, rot: 0 },
        cameraPosition: { x: -45.5, y: -1095.7, z: 26.5 }, cameraRotation: { x: 0, y: 0, z: 308 },
        vehicleSpawn: { x: -43.9, y: -1096.6, z: 26.1 }
    },
    {
        id: 2, pedPosition: { x: -986.62817, y: -2947.9396, z: 13, rot: 340.29 },
        cameraPosition: { x: 0, y: 0, z: 0 }, cameraRotation: { x: 0, y: 0, z: 0 },
        vehicleSpawn: { x: 0, y: 0, z: 0 }
    },
    {
        id: 3, pedPosition: { x: -182.4818, y: -1383.7307, z: 31, rot: 165.78 },
        cameraPosition: { x: 0, y: 0, z: 0 }, cameraRotation: { x: 0, y: 0, z: 0 },
        vehicleSpawn: { x: 0, y: 0, z: 0 }
    },
];

const pedHash = 1206185632;

function initializePeds() {
    alt.loadModel(pedHash);

    vehicleShopData.forEach(shopPed => {
        var ped = game.createPed(26, pedHash, shopPed.pedPosition.x, shopPed.pedPosition.y, shopPed.pedPosition.z, shopPed.pedPosition.rot, false, true);
        game.setEntityCanBeDamaged(ped, false);
        game.setPedCanRagdoll(ped, false);
        game.freezeEntityPosition(ped, true);
        vehicleSellers.push({ pedId: ped, id: shopPed.id });
    });
}
initializePeds();

function getVehicleShopData(vehicleShopId) {
    return vehicleShopData.find(s => s.id == vehicleShopId);
}

export function isVehicleSeller(entityHit) {
    return vehicleSellers.some(s => s.pedId == entityHit);
}

export function openVehicleShopMenuCallback(option, entityHit) {
    switch (option) {
        case "openMenu":
            openVehicleShopMenu(entityHit);
            break;
        case "information":
            mainUi.showCefNotification(0, "Sprzedawca", "Widzisz sprzedawcę pojazdów. Możesz u niego zakupić swój upragiony samochód.", 6000);
            break;
    }
}

export function changeVehicle(newVehicleData, shopId) {
    try {
        if (currentVehicle || currentVehicle != 0) {
            game.deleteEntity(currentVehicle);
        }

        let vehicleShopData = getVehicleShopData(shopId);
        if (vehicleShopData == null) return;

        alt.loadModel(newVehicleData.model);
        currentVehicle = game.createVehicle(newVehicleData.model, vehicleShopData.vehicleSpawn.x, vehicleShopData.vehicleSpawn.y,
            vehicleShopData.vehicleSpawn.z, 180, true, true);
        game.setVehicleOnGroundProperly(currentVehicle);
    } catch (error) {
        alt.log(`Error while changing vehicle in vehicleShops.js = ${e}`);
    }
}

function openVehicleShopMenu(entityHit) {
    var sellerPed = vehicleSellers.find(s => s.pedId == entityHit);
    if (sellerPed == null || typeof sellerPed == 'undefined') return;
    alt.emitServer('OpenVehicleShop', sellerPed.id);
}

function generateVehicleData(shopData) {
    currentVehicleShopData = [];
    JSON.parse(shopData).forEach(vehicle => {
        var vehicleData = {
            vehicleModel: vehicle.VehicleModel,
            vehiclePrice: vehicle.Price,
            vehicleClass: game.getVehicleClassFromName(vehicle.VehicleModel),
            name: game.getDisplayNameFromVehicleModel(vehicle.VehicleModel),
            maxSpeed: (game.getVehicleModelMaxSpeed(vehicle.VehicleModel) * 3.6).toFixed(0),
        };
        vehicleData.maxAcceleration = (game.getVehicleModelAcceleration(vehicle.VehicleModel) / game.getVehicleClassMaxAcceleration(vehicleData.vehicleClass) * 100).toFixed(2);
        vehicleData.maxBraking = (game.getVehicleModelMaxBraking(vehicle.VehicleModel) / game.getVehicleClassMaxBraking(vehicleData.vehicleClass) * 100).toFixed(2);
        currentVehicleShopData.push(vehicleData);
    });

    return currentVehicleShopData;
}

function renderShopCamera(vehicleShopData) {
    shopCamera = new Camera('DEFAULT_SCRIPTED_CAMERA', vehicleShopData.cameraPosition, vehicleShopData.cameraRotation, 45);
    shopCamera.setActive(true);
    game.renderScriptCams(true, true, 300, true, false);
}

function createVehicle(vehicleModel, vehicleShopData) {
    alt.loadModel(vehicleModel);
    currentVehicle = game.createVehicle(vehicleModel, vehicleShopData.vehicleSpawn.x, vehicleShopData.vehicleSpawn.y,
        vehicleShopData.vehicleSpawn.z, 180, true, true);
    game.setVehicleDoorsLocked(currentVehicle, 1);
    alt.log(`Doors are currently: ${game.getVehicleDoorLockStatus(JSON.stringify(currentVehicle))}`);
    game.setVehicleOnGroundProperly(currentVehicle);
}

function setupCameraRotator(vehicleShopData) {
    var vehiclePos = game.getEntityCoords(currentVehicle, true);
    cameraRotator.start(shopCamera, vehicleShopData.cameraPosition, vehiclePos, { x: 4.5, y: 2.5, z: 0 }, 180);
    cameraRotator.setZBound(-0.8, 1.6);
    cameraRotator.setZUpMultipler(3);
}

export function setupVehicleShop(shopId, vehicleShopData) {
    let vehiclesData = generateVehicleData(vehicleShopData);
    let currentVehicleShopData = getVehicleShopData(shopId);

    renderShopCamera(currentVehicleShopData);
    createVehicle(vehiclesData[0].vehicleModel, currentVehicleShopData);
    setupCameraRotator(currentVehicleShopData);

    return vehiclesData;
}

export function exitVehicleShop() {
    cameraRotator.pause(true);
    cameraRotator.stop();
    if (shopCamera) {
        shopCamera.destroy(true);
        shopCamera = null;
    }

    game.renderScriptCams(false, true, 300, true, false);
}