import { Vector3 } from "alt";

export interface Vector3Rotation extends Vector3 {
    rot: number
}

export interface SoundTypes {
    id: number,
    soundName: string,
    soundSetName: string
}

export interface ControlsIds {
    [key: string]: number
}

export interface SittableArray {
    [key: string]: SittableObject
}

export interface SittableObject {
    scenario: string,
    verticalOffset: number,
    forwardOffset: number,
    leftOffset: number
}

export interface TrashBinType {
    model: number,
    bigTrashbin: boolean,
}

export interface VehicleShopObject {
    id: number,
    pedPosition: Vector3Rotation
    cameraPosition: Vector3
    cameraRotation: Vector3
    vehicleSpawn: Vector3
}
export enum GameState {
    Loading,
    Playing
}

export type TrashBinArray = Array<TrashBinType>;
export type AnimList = Array<Array<string | string[]>>;
export type VehicleShopList = Array<VehicleShopObject>;