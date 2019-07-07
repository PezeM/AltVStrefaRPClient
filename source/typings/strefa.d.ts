export interface SoundTypes {
    id: number,
    soundName: string,
    soundSetName: string
}

export interface ControlsIds {
    [key: string]: number
}

export type AnimList = Array<Array<string | string[]>>;
