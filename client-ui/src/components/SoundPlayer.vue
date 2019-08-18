<template></template>

<script>
import { Howl, Howler } from 'howler';
import sono from 'sono';
import panner from 'sono/effects/panner';
import EventBus from '@/event-bus.js';

export default {
    name: 'soundPlayer',
    mounted() {
        EventBus.$on('soundsPlaySound', this.playSound);
        EventBus.$on('soundsEmitPlayerPosition', this.updatePosition);
        EventBus.$on('soundsPlay3DSound', this.play3DSound);
        console.log('Sound player mounted');

        // setTimeout(() => {
        //     console.log('Playing 3d sound');
        //     const soundPosition = { x: 0, y: 0, z: 0 };
        //     const playerPosition = { x: 1, y: 1, z: 1 };
        //     this.play3DSound(1, 'test', 0.5, soundPosition, playerPosition, false);
        //     // setInterval(() => {
        //     //     playerPosition.x++;
        //     //     console.log('Changed player position x to ' + playerPosition.x);
        //     //     this.updatePosition(playerPosition);
        //     // }, 1000);
        // }, 2000);
        sono.log();
    },
    data() {
        return {
            soundPlayers: new Map(),
        };
    },
    methods: {
        playSound(id, soundName, volume, loop = false) {
            const player = {
                id: id,
                soundName: soundName,
                howl: new Howl({
                    src: require(`@/assets/sounds/${soundName}.webm`),
                    volume: volume,
                    autoplay: true,
                    loop: loop,
                }),
            };

            this.soundPlayers.set(player.id, player);

            player.howl.on('loaderror', () => {
                console.log(`Couldn't play sound named: ${soundName}.`);
                EventBus.$emit('showNotification', 3, 'Błąd', 'Wystąpił błąd z odtworzeniem dźwięku. Zgłoś ten problem administracji.');
            });

            player.howl.on('end', () => {
                player.howl.unload();
                player.howl = null;
                alt.emit('soundsSoundEnded', player.id);
                this.soundPlayers.delete(player.id);
            });

            console.log(`Should play sound`);
        },
        play3DSound(id, soundName, volume, soundPosition, soundForwardVector, playerPosition, loop = false) {
            const player = {
                id: id,
                soundName: soundName,
                sono: sono.create({
                    id: id,
                    url: require(`@/assets/sounds/${soundName}.mp3`),
                    volume: volume,
                    loop: loop,
                    effects: [
                        sono.panner({
                            panningModel: 'HRTF',
                            distanceModel: 'exponential',
                            refDistance: 0.8,
                            maxDistance: 1000,
                            rolloffFactor: 2,
                            coneInnerAngle: 360,
                            coneOuterAngle: 0,
                            coneOuterGain: 0,
                        }),
                    ],
                }),
            };
            this.soundPlayers.set(player.id, player);
            player.sono.on('error', () => {
                console.log(`Couldn't play sound named: ${soundName}.`);
                EventBus.$emit('showNotification', 3, 'Błąd', 'Wystąpił błąd z odtworzeniem dźwięku. Zgłoś ten problem administracji.');
            });

            player.sono.on('ended', () => {
                player.sono.destroy();
                player.sono = null;
                alt.emit('soundsSoundEnded', player.id);
                this.soundPlayers.delete(player.id);
            });

            player.sono.effects[0].setPosition(soundPosition);
            player.sono.effects[0].setOrientation(0, 0, 0);

            player.sono.effects[0].setListenerPosition(playerPosition);
            player.sono.effects[0].setListenerOrientation(0, 0, 0);

            player.sono.play();
        },
        play3DSound2(id, soundName, volume, soundPosition, playerPosition, loop = false) {
            const player = {
                id: id,
                soundName: soundName,
                howl: new Howl({
                    src: require(`@/assets/sounds/${soundName}.mp3`),
                    volume: volume,
                    loop: loop,
                }),
            };
            this.soundPlayers.set(player.id, player);
            const soundId = player.howl.play();

            player.howl.on('loaderror', () => {
                console.log(`Couldn't play sound named: ${soundName}.`);
                EventBus.$emit('showNotification', 3, 'Błąd', 'Wystąpił błąd z odtworzeniem dźwięku. Zgłoś ten problem administracji.');
            });

            player.howl.on('end', () => {
                player.howl.unload();
                player.howl = null;
                alt.emit('soundsSoundEnded', player.id);
                this.soundPlayers.delete(player.id);
            });

            player.howl.once('play', () => {
                // player.volume(1);
                player.howl.pos(soundPosition.x, soundPosition.y, soundPosition.z);

                player.howl.pannerAttr(
                    {
                        panningModel: 'HRTF',
                        refDistance: 1,
                        rolloffFactor: 10,
                        distanceModel: 'inverse',
                    },
                    soundId
                );
            });

            Howler.pos(playerPosition.x, playerPosition.y, playerPosition.z);
            // Howler.orientation(0, 0, 0, 0, 1, 0);
        },
        muteAllSounds() {
            Howler.mute(true);
        },
        updatePosition(playerPosition, forwardVector) {
            // Howler.pos(playerPosition.x, playerPosition.y, playerPosition.z);

            panner.setListenerPosition(playerPosition.x, playerPosition.y, playerPosition.z);
            panner.setListenerOrientation(forwardVector.x, 0, 0);
            // console.log('Changed panner position');
        },
        changeGlobalVolume(volume) {
            if (volume < 0 && volume > 1) {
                EventBus.$emit('showNotification', 3, 'Błąd', 'Musisz podać wartość pomiędzy 0 a 1');
                return;
            }

            Howler.volume(volume);
        },
    },
    beforeDestroy() {
        EventBus.$off('soundsPlaySound', this.playSound);
        EventBus.$off('soundsEmitPlayerPosition', this.updatePosition);
        EventBus.$off('soundsPlay3DSound', this.play3DSound);
    },
};

alt.on('soundsPlaySound', (id, soundName, volume, loop) => {
    EventBus.$emit('soundsPlaySound', id, soundName, volume, loop);
});

alt.on('soundsPlay3DSound', (id, soundName, volume, soundPosition, soundForwardVector, playerPosition, loop) => {
    EventBus.$emit('soundsPlay3DSound', id, soundName, volume, soundPosition, soundForwardVector, playerPosition, loop);
});

alt.on('soundsEmitPlayerPosition', (position, forwardVector) => {
    EventBus.$emit('soundsEmitPlayerPosition', position, forwardVector);
});
</script>