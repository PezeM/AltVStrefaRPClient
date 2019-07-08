import { Vector3 } from "alt";

export interface Vector3Rotation extends Vector3 {
    rot: number
}

export interface ISoundTypes {
    id: number,
    soundName: string,
    soundSetName: string
}

export interface IControlsIds {
    [key: string]: number
}

export interface ISittableArray {
    [key: string]: ISittableObject
}

export interface ISittableObject {
    scenario: string,
    verticalOffset: number,
    forwardOffset: number,
    leftOffset: number
}

export interface ITrashBin {
    model: number,
    bigTrashbin: boolean,
}

export interface IVehicleShop {
    id: number,
    pedPosition: Vector3Rotation
    cameraPosition: Vector3
    cameraRotation: Vector3
    vehicleSpawn: Vector3
}

export interface IMinimap {
    width: number;
    height: number;
    scaleX: number;
    scaleY: number;
    leftX: number;
    bottomY: number;
    rightX: number;
    topY: number;
}