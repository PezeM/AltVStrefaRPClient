<template></template>

<script>
import { Howl, Howler } from 'howler';
import EventBus from '@/event-bus.js';

export default {
    name: 'soundPlayer',
    mounted() {
        EventBus.$on('soundsPlaySound', this.playSound);
        EventBus.$on('soundsEmitPlayerPosition', this.updatePosition);
        EventBus.$on('soundsPlay3DSound', this.play3DSound);
        console.log('Sound player mounted');
        setTimeout(() => {
            this.playSound(1, 'unbuckle', 0.5);
        }, 3000);

        // setTimeout(() => {
        //     console.log('Playing 3d sound');
        //     const soundPosition = { x: 0, y: 0, z: 0 };
        //     const playerPosition = { x: 1, y: 1, z: 1 };
        //     this.play3DSound('test', 1, soundPosition, playerPosition);

        //     setInterval(() => {
        //         playerPosition.x++;
        //         console.log('Changed player position x to ' + playerPosition.x);
        //         this.updatePosition(playerPosition);
        //     }, 5000);
        // }, 2000);
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
        play3DSound(id, soundName, volume, soundPosition, playerPosition, loop = false) {
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
        updatePosition(playerPosition) {
            Howler.pos(playerPosition.x, playerPosition.y, playerPosition.z);
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

alt.on('soundsPlay3DSound', (id, soundName, volume, soundPosition, playerPosition, loop) => {
    EventBus.$emit('soundsPlay3DSound', id, soundName, volume, soundPosition, playerPosition, loop);
});

alt.on('soundsEmitPlayerPosition', position => {
    EventBus.$emit('soundsEmitPlayerPosition', position);
});
</script>