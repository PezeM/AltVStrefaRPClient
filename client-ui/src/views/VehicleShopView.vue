<template>
  <transition name="fade" mode="out-in">
    <div id="vehicle-shop-view">
      <div class="container-fluid">
        <div class="row aling-items-start justify-content-between">
          <div class="col-auto mr-auto">
            <div class="color-picker">Vehicle color picker</div>
          </div>
          <div class="buy-buttons col-auto">
            <button type="button" class="btn btn-danger" @click="closeShop">ZAMKNIJ</button>
            <button type="button" class="btn btn-success" @click="buyVehicle">ZAKUP</button>
          </div>
        </div>

        <div class="row fixed-bottom">
          <div class="col-12">
            <Vehicle-shop-carousel :vehiclesData="vehicleShopData" :shopId="shopId"/>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import VehicleShopCarousel from '@/components/VehicleShopCarousel.vue';
import EventBus from '@/event-bus.js';

export default {
    name: 'vehicleShopView',
    components: {
        VehicleShopCarousel,
    },
    props: {
        shopId: Number,
        vehicleShopData: Array,
    },
    methods: {
        closeShop() {
            alt.emit('closeVehicleShop');
        },
        buyVehicle() {
            EventBus.$emit('buyVehicle');
        },
    },
};
</script>

<style scoped>
#vehicle-shop-view {
    padding: 0;
    margin: 0;
    display: flex;
    /* align-items: center;
    justify-content: center; */
    height: 100vh;
}

.fixed-bottom {
    bottom: 2%;
    margin: 0 10px;
}

.buy-buttons .btn {
    margin: 16px 8px;
    width: 6rem;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-active {
    opacity: 0;
}
</style>
