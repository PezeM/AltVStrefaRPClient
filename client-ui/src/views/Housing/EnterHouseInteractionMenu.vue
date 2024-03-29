<template>
    <div id="enter-house-interaction-menu">
        <div class="enter-house-interaction-menu container">
            <div class="row menu-header">
                <div class="col">
                    <p class="mt-1 mb-1 menu-header-text">{{ getHouseTypeName }}</p>
                </div>
            </div>
            <div class="row enter-house-interaction-menu-container">
                <div class="col-7">
                    <div class="row">
                        <div class="col text-center">
                            <img :src="getInteriorImage" class="img-fluid" />
                        </div>
                    </div>
                    <div class="row mt-2">
                        <div class="col">
                            <h5 class="text-uppercase">Ulica</h5>
                            <p class="font-italic">{{ house.streetName }}</p>
                        </div>
                    </div>
                    <buy-button
                        v-if="!house.owner"
                        :price="house.price"
                        :buttonText="house.houseType == 1 ? 'KUP' : 'WYNAJMIJ'"
                        @buy-button-clicked="onBuyClick"
                    />
                </div>
                <div class="col-5">
                    <house-enter-menu v-if="house.houseType == 1" :isClosed="house.isClosed" />
                    <hotel-enter-menu v-else-if="house.houseType == 2" :hotelRoom.sync="hotelRoom" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import BuyButton from '@/components/Housing/BuyButton.vue';
import HouseEnterMenu from '@/components/Housing/HouseEnterMenu.vue';
import HotelEnterMenu from '@/components/Housing/HotelEnterMenu.vue';
import { getRemainingCooldown } from './../../scripts/helpers.js';
import EventBus from '@/event-bus.js';

export default {
    name: 'enterHouseInteractionMenu',
    components: {
        BuyButton,
        HouseEnterMenu,
        HotelEnterMenu,
    },
    mounted() {
        alt.log('May this be the problem wtf');
        EventBus.$on('toggleHouseLock', this.toggleHouseLock);
        EventBus.$on('successfullyBoughtHouse', this.successfullyBoughtHouse);
    },
    props: {
        houseProp: {
            type: Object,
            default: function() {
                return {
                    houseType: 2,
                    price: 150,
                    position: { x: 1, y: 1, z: 2 },
                    interiorName: 'Małe mieszkanie',
                    owner: false,
                    isClosed: false,
                    streetName: 'Dłuższa nazwa ulicy',
                };
            },
        },
    },
    data() {
        return {
            hotelRoom: 0,
            lastTimeButtonPressed: new Date().getTime() - this.cooldownTime,
            cooldownTime: 1000,
            house: this.houseProp,
        };
    },
    methods: {
        onBuyClick() {
            if (getRemainingCooldown(this.cooldownTime, this.lastTimeButtonPressed) > 0) {
                EventBus.$emit(
                    'showNotification',
                    3,
                    'Spokojnie',
                    `Spokojnie, spróbuj ponownie za ${getRemainingCooldown(this.cooldownTime, this.lastTimeButtonPressed)}s`
                );
                return;
            }

            if (this.house.houseType == 1) {
                alt.emit('tryBuyHouse');
            } else if (this.house.houseType == 2) {
                alt.emit('tryRentHotelRoom', this.hotelRoom);
            }

            this.lastTimeButtonPressed = new Date().getTime();
        },
        toggleHouseLock(isLocked) {
            console.log('Toggle house lock on UI');
            if (!this.house) return;
            this.house.isClosed = isLocked;
            console.log('Set house lock status to ' + this.house.isClosed);
        },
        successfullyBoughtHouse(houseId) {
            // if (this.house.id != houseId) return; For later
            this.house.owner = true;
        },
    },
    computed: {
        getHouseTypeName() {
            return this.house.houseType == 1 ? 'Mieszkanie' : 'Hotel';
        },
        getInteriorImage() {
            switch (this.house.interiorName) {
                case 'Małe mieszkanie':
                    return require('@/assets/images/small_interior.png');
                case 'Większe mieszkanie':
                    return require('@/assets/images/bigger_interior.png');
                default:
                    return require('@/assets/images/townHallLogo.png');
            }
        },
        hasOwner() {
            if (this.house.hasOwnProperty('owner')) {
                return this.house.owner;
            } else {
                return false;
            }
        },
    },
    beforeDestroy() {
        EventBus.$off('toggleHouseLock', this.toggleHouseLock);
        EventBus.$off('successfullyBoughtHouse', this.successfullyBoughtHouse);
    },
};

alt.on('toggleHouseLock', isLocked => {
    EventBus.$emit('toggleHouseLock', isLocked);
});

alt.on('successfullyBoughtHouse', houseId => {
    EventBus.$emit('successfullyBoughtHouse', houseId);
});
</script>

<style scoped>
#enter-house-interaction-menu {
    background-image: url('../../assets/example-image.jpg');
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.enter-house-interaction-menu {
    max-width: 30rem;
    position: relative;
    background-color: #000000e3;
    color: #f3f3f3;
    overflow: hidden;
    border-radius: 6px;
    box-shadow: 0 0 15px 8px rgba(0, 0, 0, 0.25);
}

.enter-house-interaction-menu-container {
    padding: 1rem;
}

.enter-house-interaction-menu p {
    font-family: 'Roboto';
}

.menu-header {
    background-color: #f8f8f8;
    box-shadow: 0 0 15px 6px rgba(0, 0, 0, 0.5);
}

.menu-header-text {
    font-family: 'Roboto' !important;
    color: #333333;
    font-size: 1.3rem;
}
</style>

<style>
/* Colors
    black: #0C1024,
    blue: #222A53,
    text: #C2B2D4,
    light-blue: #7187AD
    light-blue2: #444AB7
    red: #BD326C,
    light-purple: #BC6ACA
 */
</style>