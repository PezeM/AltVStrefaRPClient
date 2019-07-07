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

export enum GameState {
    Loading,
    Playing
}

export type TrashBinArray = Array<TrashBinType>;
export type AnimList = Array<Array<string | string[]>>;
