import { Vector3 } from "alt";
import { INetworkingEntity } from "networking-entity";

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

export interface IAnimationInfo {
    dict: string;
    name: string;
    flag: number;
    exitAnim: string;
}

export interface IAnimationWithProp extends IAnimationInfo {
    exitFlag: number;
    waitTime: number;
    prop: {
        name: string,
        bone: number,
        position: Vector3,
        rotation: Vector3,
        extraZPosition: number
    }
}

export interface IAnimationsObject {
    [key: string]: IAnimationInfo | IAnimationWithProp
}

export interface IServerCallback {
    callbackEventName: string,
    startTime: number,
    completed: boolean,
    callback: (...result: any) => void;
}

export interface IInventoryItem {
    Id: number;
    Name: string,
    StackSize: number,
    Quantity: number;
    IsDroppable: boolean,
    EquipmentSlot: number,
    SlotId: number;
}

export interface IItem {
    Id: number;
    Model: string;
    Name: string;
    StackSize: number;
    DrawableId?: number;
    TextureId?: number;
    PaletteId?: number;
    IsProp?: boolean;
    Slot?: number;
    Value?: number;
    WeaponModel?: number;
    Ammo?: number;
}

export interface INetworkingItem extends INetworkingEntity {
    item: {
        id: number,
        object: number,
        name: string,
        count: number
    }
}
