<template>
  <div id="vehicle-shop-view">
    <div class="container-fluid">
      <div class="row aling-items-start justify-content-between">
        <div class="col-auto mr-auto">
          <div class="color-picker">Vehicle color picker</div>
        </div>
        <div class="col-auto">
          <button class="btn btn-secondary" @click="closeShop">ZAMKNIJ</button>
          <br>
          <button class="btn btn-primary" @click="buyVehicle">ZAKUP</button>
        </div>
      </div>

      <div class="row fixed-bottom">
        <div class="col-12">
          <Vehicle-shop-carousel :vehiclesData="vehicleShopData"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VehicleShopCarousel from '@/components/VehicleShopCarousel.vue';

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
            alt.emit('buyVehicle', this.shopId);
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
    bottom: 10%;
    margin: 0 10px;
}
</style>
