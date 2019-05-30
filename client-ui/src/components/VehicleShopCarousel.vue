<template>
  <div class="vehicle-shop-carousel">
    Tutaj beda pojazdy
    <br>
    <carousel-3d
      @before-slide-change="onBeforeSlideChange"
      :controls-visible="true"
      :controls-prev-html="'&#10092;'"
      :controls-next-html="'&#10093;'"
      :controls-width="30"
      :controls-height="60"
      :clickable="false"
    >
      <slide v-for="(slide, i) in slides" :index="i" v-bind:key="i">
        <div class="test-item">
          <h1></h1>
        </div>
      </slide>
    </carousel-3d>
  </div>
</template>


<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';

export default {
    name: 'vehicle-shop-carousel',
    components: {
        Carousel3d,
        Slide,
    },
    props: {
        vehiclesData: {
            type: Array,
            default: function() {
                return [];
            },
        },
    },
    data() {
        return {
            slides: 8,
        };
    },
    methods: {
        onBeforeSlideChange(index) {
            console.log('@onBeforeSlideChange Callback Triggered', 'Slide Index ' + index);
            // Get the next vehicle if available. Call to client to respawn that vehicle and destroy current
            alt.emit('getNextVehicleInShop');
        },
    },
};
</script>

<style scoped>
.test-item {
    display: block;
    border: 2px solid black;
    width: 100%;
    height: 100%;
    background-color: rgb(71, 71, 71);
}
</style>
