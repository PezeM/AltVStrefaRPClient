export default class Sound {
    id: number;
    is3D: boolean;
    soundName: string;
    constructor(id: number, soundName: string, is3D: boolean = false) {
        this.id = id;
        this.soundName = soundName;
        this.is3D = is3D;
    }
}