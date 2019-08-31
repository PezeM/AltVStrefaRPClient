<template>
    <div class="hotel-enter-menu">
        <div class="row mb-3">
            <div class="col">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <span class="input-group-text small-input-label">Pokój</span>
                    </div>
                    <input
                        type="number"
                        min="0"
                        max="2000"
                        class="form-control"
                        placeholder="Pokój"
                        :value="hotelRoom"
                        @input="$emit('update:hotelRoom', Number($event.target.value))"
                    />
                </div>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col">
                <button
                    type="button"
                    class="btn btn-primary btn-block"
                    @click="enterHotelRoom"
                >Wejdź</button>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col">
                <button
                    type="button"
                    class="btn btn-primary btn-block"
                    @click="openHotelRoomDoor"
                >Otwórz drzwi</button>
            </div>
        </div>
        <div class="row mb-3">
            <div class="col">
                <button
                    type="button"
                    class="btn btn-primary btn-block"
                    @click="closeHotelRoomDoor"
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
        hotelRoom: {
            type: Number,
        },
    },
    data() {
        return {
            lastTimeButtonPressed: new Date().getTime() - this.cooldownTime,
            cooldownTime: 500,
        };
    },
    methods: {
        enterHotelRoom() {
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
            alt.emit('tryEnterHouse', this.hotelRoom);
        },
        openHotelRoomDoor() {
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
            alt.emit('tryOpenHouseDoor', this.hotelRoom);
        },
        closeHotelRoomDoor() {
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
            alt.emit('tryCloseHouseDoor', this.hotelRoom);
        },
        closeMenu() {
            alt.emit('closeEnterHouseInteractionMenu');
        },
    },
};
</script>

<style scoped>
.small-input-label {
    padding: 0rem 0.4rem;
}
</style>