import { Vector3 } from "alt";
import { INetworkingEntity } from "networking-entity";
import { HouseType } from "source/src/Constans/HouseTypes";

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

export interface IInventoryContainer {
    inventoryId: number;
    inventoryName: string;
    inventorySlots: number;
    items: IInventoryItem[];
}

export interface IInventoryItem {
    id: number;
    name: string;
    stackSize: number;
    quantity: number;
    isDroppable: boolean;
    equipmentSlot: number;
    slotId: number;
    description: string;
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
        id: number;
        object: number;
        name: string;
        count: number
    }
}

export interface IBlipWrapper {
    id: number;
    name: string;
    color: number;
    sprite: number;
    scale: number;
    position: Vector3;
}

export interface HouseMenu {
    houseType: HouseType;
    price: number;
    position: Vector3;
    interiorName: string;
    owner?: string;
    isClosed?: boolean;
}