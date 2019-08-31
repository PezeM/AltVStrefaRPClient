<template>
    <div id="enter-house-interaction-menu">
        <div class="enter-house-interaction-menu container">
            <div class="row menu-header">
                <div class="col">
                    <p class="mt-1 mb-1 menu-header-text">{{ getHouseTypeName }}</p>
                </div>
            </div>
            <div class="row enter-house-interaction-menu-container">
                <div class="col-6">
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
                        :price="house.price"
                        :buttonText="house.houseType == 1 ? 'KUP' : 'WYNAJMIJ'"
                    />
                </div>
                <div class="col-6">Col 2</div>
            </div>
        </div>
    </div>
</template>

<script>
import BuyButton from '@/components/Housing/BuyButton.vue';

export default {
    name: 'enterHouseInteractionMenu',
    components: {
        BuyButton,
    },
    props: {
        house: {
            type: Object,
            default: function() {
                return {
                    houseType: 1,
                    price: 150,
                    position: { x: 1, y: 1, z: 2 },
                    interiorName: 'Małe mieszkanie',
                    owner: false,
                    isClosed: true,
                    streetName: 'Dłuższa nazwa ulicy',
                };
            },
        },
    },
    computed: {
        getHouseTypeName() {
            return this.house.houseType == 1 ? 'Mieszkanie' : 'Hotel';
        },
        getInteriorImage() {
            return require('@/assets/images/townHallLogo.png');
        },
    },
};
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
    max-width: 40vh;
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