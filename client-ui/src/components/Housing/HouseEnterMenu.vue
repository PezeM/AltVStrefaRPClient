<template>
    <div class="house-enter-menu">
        <div class="row mb-3">
            <div class="col">
                <p class="text-center">
                    Drzwi:
                    <span
                        class="closed"
                        v-bind:class="{ opened: !isClosed }"
                    >{{ getDoorsText }}</span>
                </p>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col">
                <button type="button" class="btn btn-primary btn-block" @click="enterHouse">Wejdź</button>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col">
                <button
                    type="button"
                    class="btn btn-primary btn-block"
                    @click="openHouseDoor"
                >Otwórz drzwi</button>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col">
                <button
                    type="button"
                    class="btn btn-primary btn-block"
                    @click="closeHouseDoor"
                >Zamknij drzwi</button>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col">
                <button type="button" class="btn btn-danger btn-block" @click="closeMenu">Wyjdź</button>
            </div>
        </div>
    </div>
</template>

<script>
import { getRemainingCooldown } from '../../scripts/helpers.js';
import EventBus from '@/event-bus.js';

export default {
    props: {
        isClosed: {
            type: Boolean,
            required: true,
        },
    },
    data() {
        return {
            lastTimeButtonPressed: new Date().getTime() - this.cooldownTime,
            cooldownTime: 500,
        };
    },
    methods: {
        enterHouse() {
            if (getRemainingCooldown(this.cooldownTime, this.lastTimeButtonPressed) > 0) {
                EventBus.$emit(
                    'showNotification',
                    3,
                    'Spokojnie',
                    `Spokojnie, spróbuj ponownie za ${getRemainingCooldown(this.cooldownTime, this.lastTimeButtonPressed)}s`
                );
                return;
            }

            this.lastTimeButtonPressed = new Date().getTime();
            alt.emit('tryEnterHouse');
        },
        openHouseDoor() {
            if (getRemainingCooldown(this.cooldownTime, this.lastTimeButtonPressed) > 0) {
                EventBus.$emit(
                    'showNotification',
                    3,
                    'Spokojnie',
                    `Spokojnie, spróbuj ponownie za ${getRemainingCooldown(this.cooldownTime, this.lastTimeButtonPressed)}s`
                );
                return;
            }

            this.lastTimeButtonPressed = new Date().getTime();
            alt.emit('tryOpenHouseDoor');
        },
        closeHouseDoor() {
            if (getRemainingCooldown(this.cooldownTime, this.lastTimeButtonPressed) > 0) {
                EventBus.$emit(
                    'showNotification',
                    3,
                    'Spokojnie',
                    `Spokojnie, spróbuj ponownie za ${getRemainingCooldown(this.cooldownTime, this.lastTimeButtonPressed)}s`
                );
                return;
            }

            this.lastTimeButtonPressed = new Date().getTime();
            alt.emit('tryCloseHouseDoor');
        },
        closeMenu() {
            alt.emit('closeEnterHouseInteractionMenu');
        },
    },
    computed: {
        getDoorsText() {
            return this.isClosed ? 'Zamknięte' : 'Otwarte';
        },
    },
};
</script>

<style scoped>
.house-enter-menu p {
    font-family: 'Roboto';
}

.house-enter-menu .closed {
    color: red;
}

.house-enter-menu .opened {
    color: rgb(20, 150, 20);
}
</style>
