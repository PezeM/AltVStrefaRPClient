<template>
  <div class="vehicle-shop-carousel">
    <div class="row">
      <div class="col-2">
        <div class="vehicle-classes-list list-group">
          <button
            v-for="vehicleClass in vehicleClasses"
            :key="vehicleClass.classNumber"
            @click="changeVehicleClasses(vehicleClass.classNumber)"
            type="button"
            class="list-group-item list-group-item-action"
            v-bind:class="{ active:vehicleClass.classNumber == currentVehicleClassNumber }"
          >{{ vehicleClass.className }}</button>
        </div>
      </div>
    </div>

    <carousel-3d
      @before-slide-change="onBeforeSlideChange"
      :border="0"
      :controls-visible="true"
      :controls-prev-html="'&#10092;'"
      :controls-next-html="'&#10093;'"
      :controls-width="30"
      :inverse-scaling="400"
      :space="320"
      :count="getSlidesNumber"
      :clickable="true"
    >
      <slide v-for="(vehicle, index) in currentVehicles" :index="index" v-bind:key="index">
        <div class="test-item">
          <div class="card h-100 text-dark vehicle-card">
            <div class="card-body">
              <h5 class="card-title">{{ vehicle.name }}</h5>

              <div class="row pt-2">
                <div class="col">
                  <p class="card-text">Cena</p>
                </div>
                <div class="col">
                  <p class="card-text price-text">{{ vehicle.price }} $</p>
                </div>
              </div>

              <div class="row pt-2">
                <div class="col">
                  <p class="card-text">Prędkość</p>
                </div>
                <div class="col">
                  <p class="card-text">{{ vehicle.maxSpeed }} Km/h</p>
                </div>
              </div>

              <div class="row pt-2">
                <div class="col">
                  <p class="card-text">Przyspieszenie</p>
                </div>
                <div class="col">
                  <div class="progress h-100">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      :style="{width: vehicle.maxAcceleration + '%'}"
                      :aria-valuenow="vehicle.maxAcceleration"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >{{ vehicle.maxAcceleration }}</div>
                  </div>
                </div>
              </div>

              <div class="row pt-2">
                <div class="col">
                  <p class="card-text">Hamowanie</p>
                </div>
                <div class="col">
                  <div class="progress h-100">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      :style="{width: vehicle.maxBraking + '%'}"
                      :aria-valuenow="vehicle.maxBraking"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >{{ vehicle.maxBraking }}</div>
                  </div>
                </div>
              </div>

              <div class="row pt-2">
                <div class="col">
                  <p class="card-text">Trakcja</p>
                </div>
                <div class="col">
                  <div class="progress h-100">
                    <div
                      class="progress-bar"
                      role="progressbar"
                      :style="{width: vehicle.maxTraction + '%'}"
                      :aria-valuenow="vehicle.maxTraction"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    >{{ vehicle.maxTraction }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </slide>
    </carousel-3d>
  </div>
</template>


<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
import EventBus from '@/event-bus.js';

const vehicleClasses = {
    0: 'Kompakty',
    1: 'Sedany',
    2: 'Suvy',
    3: 'Coupes',
    4: 'Muscle',
    5: 'Sportowe klasyki',
    6: 'Sportowe',
    7: 'Super',
    8: 'Motocykle',
    9: 'Off-Road',
    10: 'Przemysłowe',
    11: 'Pojazdy użytkowe',
    12: 'Vany',
    13: 'Rowery',
    14: 'Łodzie',
    15: 'Helikoptery',
    16: 'Samoloty',
    17: 'Służbowe',
    18: 'Emergency',
    19: 'Wojskowe',
    20: 'Towarowe',
    21: 'Pociągi',
};

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
                return [
                    {
                        vehicleModel: 767087018,
                        price: 100,
                        vehicleClass: 6,
                        name: 'ALPHA',
                        maxSpeed: '178',
                        maxAcceleration: '91.67',
                        maxBraking: '100.00',
                        maxTraction: '85.00',
                    },
                    {
                        vehicleModel: 3253274834,
                        price: 150,
                        vehicleClass: 6,
                        name: 'BANSHEE',
                        maxSpeed: '171',
                        maxAcceleration: '94.44',
                        maxBraking: '100.00',
                        maxTraction: '85.00',
                    },
                    {
                        vehicleModel: 2891838741,
                        price: 150,
                        vehicleClass: 7,
                        name: 'ZENTORNO',
                        maxSpeed: '179',
                        maxAcceleration: '104.12',
                        maxBraking: '100.00',
                        maxTraction: '85.00',
                    },
                    {
                        vehicleModel: 1922255844,
                        price: 150,
                        vehicleClass: 1,
                        name: 'SCHAFTER6',
                        maxSpeed: '135',
                        maxAcceleration: '71.15',
                        maxBraking: '91.11',
                        maxTraction: '85.00',
                    },
                    {
                        vehicleModel: 2537130571,
                        price: 150,
                        vehicleClass: 6,
                        name: 'SEVEN70',
                        maxSpeed: '183',
                        maxAcceleration: '93.06',
                        maxBraking: '100.00',
                        maxTraction: '85.00',
                    },
                    {
                        vehicleModel: 1663218586,
                        price: 150,
                        vehicleClass: 7,
                        name: 'T20',
                        maxSpeed: '179',
                        maxAcceleration: '107.35',
                        maxBraking: '110.00',
                        maxTraction: '85.00',
                    },
                    {
                        vehicleModel: 1504306544,
                        price: 150,
                        vehicleClass: 5,
                        name: 'TORERO',
                        maxSpeed: '171',
                        maxAcceleration: '100.00',
                        maxBraking: '71.43',
                        maxTraction: '85.00',
                    },
                    {
                        vehicleModel: 142944341,
                        price: 150,
                        vehicleClass: 2,
                        name: 'BALLER2',
                        maxSpeed: '162',
                        maxAcceleration: '100.00',
                        maxBraking: '75.00',
                        maxTraction: '85.00',
                    },
                    {
                        vehicleModel: 470404958,
                        price: 150,
                        vehicleClass: 2,
                        name: 'BALLER5',
                        maxSpeed: '162',
                        maxAcceleration: '100.00',
                        maxBraking: '72.50',
                        maxTraction: '85.00',
                    },
                    {
                        vehicleModel: 330661258,
                        price: 150,
                        vehicleClass: 3,
                        name: 'COGCABRI',
                        maxSpeed: '163',
                        maxAcceleration: '96.30',
                        maxBraking: '66.67',
                        maxTraction: '85.00',
                    },
                    {
                        vehicleModel: 704435172,
                        price: 150,
                        vehicleClass: 1,
                        name: 'COG552',
                        maxSpeed: '165',
                        maxAcceleration: '100.00',
                        maxBraking: '61.11',
                        maxTraction: '85.00',
                    },
                ];
            },
        },
        shopId: Number,
    },
    data() {
        return {
            currentVehicle: null,
            currentVehicleClassNumber: 0,
            vehicleClasses: [],
            currentVehicles: [
                {
                    vehicleModel: 767087018,
                    price: 100,
                    vehicleClass: 6,
                    name: 'Eldo',
                    maxSpeed: '178',
                    maxAcceleration: '91.67',
                    maxBraking: '100.00',
                    maxTraction: '85.00',
                },
            ],
        };
    },
    mounted() {
        this.$nextTick(() => {
            this.generateVehicleClasses();
        });
        EventBus.$on('buyVehicle', () => {
            this.buyVehicle();
        });
    },
    methods: {
        onBeforeSlideChange(index) {
            // Get the next vehicle if available. Call to client to respawn that vehicle and destroy current
            this.updateCurrentVehicle(index);
            this.spawnNextVehicle(index);
        },
        generateVehicleClasses() {
            this.vehiclesData.forEach(vehicleData => {
                const vehicleClass = vehicleData.vehicleClass;
                if (!this.vehicleClasses.some(v => v.classNumber == vehicleClass)) {
                    this.vehicleClasses.push({ classNumber: vehicleClass, className: vehicleClasses[vehicleClass] });
                }
            });
            this.currentVehicles = [];
            this.currentVehicles.push(...this.vehiclesData);
            this.updateCurrentVehicle(0);
        },
        changeVehicleClasses(index) {
            this.currentVehicles = [];
            this.vehiclesData.forEach(vehicleData => {
                if (vehicleData.vehicleClass == index) {
                    this.currentVehicles.push(vehicleData);
                }
            });

            this.currentVehicleClassNumber = index;
            this.updateCurrentVehicle(0);
            this.spawnNextVehicle(index);
        },
        updateCurrentVehicle(index) {
            this.currentVehicle = this.currentVehicles[index];
        },
        spawnNextVehicle(index) {
            if (this.currentVehicle && this.shopId) {
                alt.emit('spawnNextVehicle', this.shopId, this.currentVehicle.vehicleModel);
            }
        },
        buyVehicle() {
            if (this.currentVehicle == null || typeof this.currentVehicle == 'undefined') {
                console.log('Couldnt buy vehicle');
                return;
            }

            alt.emit('buyVehicle', this.shopId, this.currentVehicle.vehicleModel);
        },
    },
    computed: {
        getSlidesNumber() {
            return this.currentVehicles.length;
        },
    },
};
</script>

<style scoped>
.test-item {
    width: 100%;
    height: 100%;
}

.price-text {
    font-size: 1.2em;
    color: rgb(1, 105, 27);
}

.vehicle-card {
    background-color: rgba(255, 255, 255, 0.92);
}

p {
    font-family: 'Roboto', sans-serif !important;
}
</style>

<style>
.vehicle-shop-carousel .carousel-3d-controls .next,
.prev {
    font-size: 5em !important;
}

.vehicle-shop-carousel .carousel-3d-slide {
    box-shadow: 6px 2px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24) !important;
    border-radius: 8px !important;
}
</style>

