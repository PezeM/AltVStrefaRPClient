<template></template>

<script>
import sono from 'sono';
import panner from 'sono/effects/panner';
import EventBus from '@/event-bus.js';

export default {
    name: 'soundPlayer',
    mounted() {
        EventBus.$on('soundsPlaySound', this.playSound);
        EventBus.$on('soundsEmitPlayerPosition', this.updatePosition);
        EventBus.$on('soundsPlay3DSound', this.play3DSound);

        EventBus.$on('soundsSetRollofFactor', this.setRolloffFactor);
        EventBus.$on('soundsSetRefDistance', this.setRefDistance);
        EventBus.$on('soundsSetMaxDistance', this.setMaxDistance);
        EventBus.$on('soundsSetDistanceModel', this.setDistanceModel);

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
            globalVolume: 1,
        };
    },
    methods: {
        playSound(id, soundName, volume, loop = false) {
            const player = {
                id: id,
                soundName: soundName,
                startVolume: volume,
                sono: sono.create({
                    id: id,
                    url: require(`@/assets/sounds/${soundName}`),
                    volume: volume * this.globalVolume,
                    loop: loop,
                }),
            };

            this.soundPlayers.set(player.id, player);
            player.sono.on('error', () => {
                console.log(`Couldn't play sound named: ${soundName}.`);
                EventBus.$emit('showNotification', 3, 'Błąd', 'Wystąpił błąd z odtworzeniem dźwięku. Zgłoś ten problem administracji.');
                player.sono.destroy();
                player.sono = null;
                alt.emit('soundsSoundEnded', player.id);
                this.soundPlayers.delete(player.id);
            });

            player.sono.once('ended', () => {
                player.sono.destroy();
                player.sono = null;
                alt.emit('soundsSoundEnded', player.id);
                this.soundPlayers.delete(player.id);
            });

            player.sono.play();
        },
        play3DSound(id, soundName, volume, soundPosition, soundForwardVector, playerPosition, loop = false) {
            const player = {
                id: id,
                soundName: soundName,
                startVolume: volume,
                sono: sono.create({
                    id: id,
                    url: require(`@/assets/sounds/${soundName}`),
                    // url: 'https://raw.githubusercontent.com/Stinkstudios/sono/master/examples/audio/dnb-loop.ogg',
                    volume: volume * this.globalVolume,
                    loop: loop,
                    effects: [
                        sono.panner({
                            panningModel: 'HRTF',
                            distanceModel: 'exponential',
                            refDistance: 1,
                            maxDistance: 100,
                            rolloffFactor: 1.6,
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
                player.sono.destroy();
                player.sono = null;
                alt.emit('soundsSoundEnded', player.id);
                this.soundPlayers.delete(player.id);
            });

            player.sono.once('ended', () => {
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
        setRolloffFactor(factor) {
            const player = this.soundPlayers.get(1000001);
            player.sono.effects[0].rolloffFactor = factor;
            console.log(`Set rolloff factor to ${player.sono.effects[0].rolloffFactor}`);
        },
        setRefDistance(refDistance) {
            const player = this.soundPlayers.get(1000001);
            player.sono.effects[0].refDistance = refDistance;
            console.log(`Set ref distance to ${player.sono.effects[0].refDistance}`);
        },
        setMaxDistance(maxDistance) {
            const player = this.soundPlayers.get(1000001);
            player.sono.effects[0].maxDistance = maxDistance;
            console.log(`Set max distance to ${player.sono.effects[0].maxDistance}`);
        },
        setDistanceModel(distanceModel) {
            const player = this.soundPlayers.get(1000001);
            player.sono.effects[0].distanceModel = distanceModel;
            console.log(`Set distance model to ${player.sono.effects[0].distanceModel}`);
        },
        muteAllSounds() {
            for (const player of this.soundPlayers.values()) {
                if (player == null || player.sono == null) continue;
                player.sono.volume = 0;
            }
        },
        updatePosition(playerPosition, forwardVector) {
            panner.setListenerPosition(playerPosition.x, playerPosition.y, playerPosition.z);
            panner.setListenerOrientation(forwardVector.x, 0, 0);
        },
        changeGlobalVolume(volume) {
            if (volume < 0 && volume > 1) {
                EventBus.$emit('showNotification', 3, 'Błąd', 'Musisz podać wartość pomiędzy 0 a 1');
                return;
            }

            this.globalVolume = volume;

            for (const player of this.soundPlayers.values()) {
                if (player == null || player.sono == null) continue;
                player.sono.volume = player.startVolume * this.globalVolume;
            }
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

alt.on('soundsSetRollofFactor', factor => {
    EventBus.$emit('soundsSetRollofFactor', factor);
});

alt.on('soundsSetRefDistance', refDistance => {
    EventBus.$emit('soundsSetRefDistance', refDistance);
});

alt.on('soundsSetMaxDistance', maxDistance => {
    EventBus.$emit('soundsSetMaxDistance', maxDistance);
});

alt.on('soundsSetDistanceModel', distanceModel => {
    EventBus.$emit('soundsSetDistanceModel', distanceModel);
});
</script>