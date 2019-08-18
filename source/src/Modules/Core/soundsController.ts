import * as alt from 'alt';
import mainUi from 'source/src/Modules/Ui/mainUi';
import IdGenerator from 'source/src/Modules/Core/idGenerator';
import Sound from 'source/src/Modules/Core/Models/Sound';

const localPlayer = alt.Player.local;

class SoundsController {
    idGenerator: IdGenerator;
    updatePlayerPosition: boolean;
    sounds: Sound[];
    soundTick: number;
    constructor() {
        this.idGenerator = new IdGenerator(1000000);
        this.sounds = [];
        this.updatePlayerPosition = false;
        this.soundTick = alt.setInterval(this.onSoundTick.bind(this), 100);

        mainUi.onUiEvent('soundsSoundEnded', this.onSoundEndedPlaying.bind(this));

        alt.onServer('soundsPlaySoundInRange', this.onPlayCefSoundInRange.bind(this));
    }

    playCefSoundInRange(soundName: string, volume: number, range: number, position: Vector3, loop: boolean = false) {
        alt.emitServer('SoundsPlaySoundInRange', soundName, volume, range, position, loop);
    }

    playCefSound(soundName: string, volume: number, loop: boolean = false) {
        const nextSoundId = this.idGenerator.getNextId();
        this.sounds.push(new Sound(nextSoundId, soundName, false));
        mainUi.emitUiEvent('soundsPlaySound', nextSoundId, soundName, volume, loop);
    }

    play3DCefSound(soundName: string, volume: number, soundPosition: alt.Vector3, playerPosition: alt.Vector3, loop: boolean = false) {
        const nextSoundId = this.idGenerator.getNextId();
        this.sounds.push(new Sound(nextSoundId, soundName, false));
        mainUi.emitUiEvent('soundsPlay3DSound', nextSoundId, soundName, volume, soundPosition, playerPosition, loop);
        this.updatePlayerPosition = true;
    }

    onSoundEndedPlaying(soundId: number) {
        this.sounds = this.sounds.filter(s => s.id !== soundId);

        if (!this.sounds.some(s => s.is3D)) {
            this.updatePlayerPosition = false;
        }
    }

    private onPlayCefSoundInRange(soundId: number, soundName: string, volume: number, loop: boolean = false) {
        this.sounds.push(new Sound(soundId, soundName, false));
        mainUi.emitUiEvent('soundsPlaySound', soundId, soundName, volume, loop);
    }

    private onSoundTick() {
        if (!this.updatePlayerPosition) return;
        mainUi.emitUiEvent('soundsEmitPlayerPosition', localPlayer.pos);
    }
}

const sounds = new SoundsController();
export default sounds;