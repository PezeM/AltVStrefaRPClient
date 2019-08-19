import * as alt from 'alt';
import * as game from 'natives';
import mainUi from 'source/src/Modules/Ui/mainUi';
import IdGenerator from 'source/src/Modules/Core/idGenerator';
import Sound from 'source/src/Modules/Core/Models/Sound';
import { drawText } from 'source/src/Helpers/uiHelper';

const localPlayer = alt.Player.local;

class SoundsController {
    idGenerator: IdGenerator;
    updatePlayerPosition: boolean;
    sounds: Sound[];
    soundTick: number;
    forwardVector: alt.Vector3;
    testTick: number;
    constructor() {
        this.idGenerator = new IdGenerator(1000000);
        this.sounds = [];
        this.updatePlayerPosition = false;
        this.soundTick = alt.setInterval(this.onSoundTick.bind(this), 100);
        this.forwardVector = new alt.Vector3(0, 0, 0);

        mainUi.onUiEvent('soundsSoundEnded', this.onSoundEndedPlaying.bind(this));

        alt.onServer('soundsPlaySoundInRange', this.onPlayCefSoundInRange.bind(this));
        this.testTick = alt.setInterval(this.onTestTick.bind(this), 0);
    }

    onTestTick() {
        drawText(`Forward vector: x: ${this.forwardVector.x.toFixed(4)} y: ${this.forwardVector.y.toFixed(4)} z: ${this.forwardVector.z.toFixed(4)}`,
            [0.7, 0.1], 4, [255, 255, 255, 255], 0.35, true);
    }

    playSound(soundId: number, audioName: string, audioRef: string, p5: boolean) {
        return game.playSound(soundId, audioName, audioRef, false, 0, p5);
    }

    playSoundFromEntity(audioName: string, entityId: number, audioRef: string) {
        return game.playSoundFromEntity(-1, audioName, entityId, audioRef, false, 0);
    }

    playSoundFromCoords(audioName: string, audioRef: string, position: Vector3) {
        return game.playSoundFromCoord(-1, audioName, position.x, position.y, position.z, audioRef, false, 0, false);
    }

    playSoundFrontend(audioName: string, audioRef: string, p3: boolean) {
        return game.playSoundFrontend(-1, audioName, audioRef, p3);
    }

    playSpeech(pedId: number, speechName: string, speechParam: string) {
        game.playAmbientSpeech1(pedId, speechName, speechParam);
    }

    // https://gist.github.com/alexguirre/0af600eb3d4c91ad4f900120a63b8992
    // https://docs.ragepluginhook.net/html/M_Rage_Ped_PlayAmbientSpeech_2.htm
    playSpeechWithVoice(pedId: number, speechName: string, voiceName: string, speechParam: string) {
        game.playAmbientSpeechWithVoice(pedId, speechName, voiceName, speechParam, false);
    }

    playCefSoundInRange(soundName: string, volume: number, range: number, position: Vector3, loop: boolean = false) {
        alt.emitServer('SoundsPlaySoundInRange', soundName, volume, range, position, loop);
    }

    playCefSound(soundName: string, volume: number, loop: boolean = false) {
        const nextSoundId = this.idGenerator.getNextId();
        this.sounds.push(new Sound(nextSoundId, soundName, false));
        mainUi.emitUiEvent('soundsPlaySound', nextSoundId, soundName, volume, loop);
    }

    play3DCefSound(soundName: string, volume: number, soundPosition: alt.Vector3, soundForwardVector: alt.Vector3,
        playerPosition: alt.Vector3, loop: boolean = false) {
        const nextSoundId = this.idGenerator.getNextId();
        this.sounds.push(new Sound(nextSoundId, soundName, true));
        mainUi.emitUiEvent('soundsPlay3DSound', nextSoundId, soundName, volume, soundPosition, soundForwardVector, playerPosition, loop);
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
        const [_, rightVector, forwardVector, upVector, position] = game.getEntityMatrix(localPlayer.scriptID, null, null, null, null);
        this.forwardVector = forwardVector;
        mainUi.emitUiEvent('soundsEmitPlayerPosition', localPlayer.pos, forwardVector);
    }
}

const sounds = new SoundsController();
export default sounds;