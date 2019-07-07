export interface SoundTypes {
    id: number,
    soundName: string,
    soundSetName: string
}

export interface ControlsIds {
    [key: string]: number
}

export type AnimList = Array<Array<string | string[]>>;

export interface SittableArray {
    [key: string]: SittableObject
}

export interface SittableObject {
    scenario: string,
    verticalOffset: number,
    forwardOffset: number,
    leftOffset: number
}