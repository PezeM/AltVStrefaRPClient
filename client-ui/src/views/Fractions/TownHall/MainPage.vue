<template>
  <div class="town-hall-main-page">
    <div class="row mb-1">
      <h1 class="mx-auto">Witaj na stronie urzędu miasta</h1>
    </div>
    <div class="row mb-5">
      <div class="col-md-4 col-sm-4">
        <div class="card shadow rounded border">
          <div class="card-body text-center">
            <h6>Ilość pracowników w urzędzie</h6>
            <h4 class="font-weight-bold indigo-text py-2">{{ data.employeesCount }}</h4>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-6">
        <div class="card shadow rounded border">
          <div class="card-body">
            <h5>Aktualne podatki</h5>
            <p class="card-text">Podatek od pojazdów: {{ data.taxes.vehicleTax * 100 }} %</p>
            <p class="card-text">Podatek od pojazdów: {{ data.taxes.propertyTax * 100 }} %</p>
            <p class="card-text">Podatek od pojazdów: {{ data.taxes.gunTax * 100 }} %</p>
            <p class="card-text">Podatek od pojazdów: {{ data.taxes.globalTax * 100 }} %</p>
          </div>
        </div>
      </div>
      <div class="col-md-4 col-sm-6">
        <div class="card shadow rounded border">
          <div class="card-body text-center">
            <h6>Ilość pieniędzy w urzędzie</h6>
            <h4 class="font-weight-bold indigo-text py-2">{{ data.money }} $</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="card shadow rounded border">
          <div class="card-body text-center">
            <h6>Tutaj będzie wyszukiwanie informacji na temat mieszkańców</h6>
            <input type="text" class="form-control">
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
};
</script>

<style scoped>
.town-hall-main-page {
    padding-top: 12px;
    width: 100%;
    height: 100%;
    color: #3d3d3d;
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
