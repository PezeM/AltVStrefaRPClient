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

// export interface MValue {
//     boolValue?: boolean,
//     doubleValue?: number,
//     stringValue?: string,
//     intValue?: number,
//     uintValue?: number,
//     dictionaryValue?: any,
//     listValue?: any[],
//     entityValue?: number,
//     nullValue?: boolean
// }

// export interface INetworkingEntity {
//     id: number,
//     position: Vector3,
//     dimension: number,
//     data: {
//         [key: string]: MValue
//     },
//     [key: string]: any
// }

// export interface INetworkingEntityDataChangeEvent {
//     id: number,
//     key: string,
//     value: MValue
// }