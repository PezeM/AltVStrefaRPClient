<template>
  <div class="town-hall-main-page">
    <div class="row mb-1">
      <h1 class="mx-auto">Witaj na stronie urzędu miasta</h1>
    </div>
    <div class="row mb-5">
      <div class="col-md-7 col-sm-6">
        <div class="card shadow rounded border">
          <div class="card-body">
            <h5>Aktualne podatki</h5>
            <p v-for="tax in data.taxes" v-bind:key="tax.id" class="card-text">
              {{ tax.name }}
              <strong>{{ getTaxText(tax.value) }}%</strong>
            </p>
          </div>
        </div>
      </div>
      <div class="col-md-5 col-sm-6">
        <div class="card shadow rounded border">
          <div class="card-body text-center">
            <h6>Data powstania urzędu miasta Los Santos</h6>
            <h4 class="font-weight-bold indigo-text py-2">{{ data.creationDate }}</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-4 col-sm-6">
        <div class="card shadow rounded border">
          <div class="card-body text-center">
            <h6>Ilość pieniędzy w urzędzie</h6>
            <h4 class="font-weight-bold indigo-text py-2">{{ data.money }} $</h4>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-6">
        <div class="card shadow rounded border">
          <div class="card-body text-center">
            <h6>Ilość pracowników w urzędzie</h6>
            <h4 class="font-weight-bold indigo-text py-2">{{ data.employeesCount }}</h4>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-6">
        <div class="card shadow rounded border">
          <div class="card-body text-center">
            <h6>Ilość stanowisk w urzędzie</h6>
            <h4 class="font-weight-bold indigo-text py-2">{{ data.rolesCount }}</h4>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'townHallMainPage',
    props: {
        data: {
            type: Object,
        },
    },
    mounted() {
        this.$emit('update-menu-name', 'Strona główna');
    },
    created() {
        console.log(`Created MainPage.vue component`);
    },
    methods: {
        getTaxText(taxValue) {
            return Math.floor(taxValue * 100);
        },
    },
};
</script>

<style scoped>
.town-hall-main-page {
    text-align: center;
}

.card {
    height: 100%;
}

.card-body {
    min-height: 120px;
}

.card-text {
    margin-bottom: 0;
    font-family: 'Roboto', sans-serif;
}
</style>
