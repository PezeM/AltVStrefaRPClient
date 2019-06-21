<template>
  <div class="town-hall-taxes-page">
    <h1 class="text-center">Aktualne podatki</h1>
    <div class="row mb-5">
      <div class="col-7">
        <div class="card shadow rounded border">
          <div class="card-body">
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Nazwa</th>
                  <th scope="col">Wartość</th>
                  <th scope="col">Akcje</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(tax, index) in data.taxes" v-bind:key="index">
                  <th scope="col">{{ index }}</th>
                  <td>{{ tax.name }}</td>
                  <td>{{ tax.value * 100 }}%</td>
                  <td>
                    <button class="btn btn-primary" @click="editTax(tax)">
                      <v-icon name="edit"/>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div class="col-5" v-if="finances">
        <div class="card shadow rounded border">
          <div class="card-body">
            <h4>Ostatnie podatki</h4>
            <div class="overflow-auto last-taxes-list">
              <table class="table">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Wartość</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(money, index) in finances" v-bind:key="index">
                    <th scope="col">{{ index }}</th>
                    <td>{{ money }}$</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-awesome/icons/edit';
import Icon from 'vue-awesome/components/Icon';

export default {
    name: 'townHallTaxesPage',
    components: {
        'v-icon': Icon,
    },
    props: {
        data: {
            type: Object,
        },
        finances: {
            type: Array,
        },
    },
    data() {
        return {
            currentTax: null,
        };
    },
    methods: {
        editTax(tax) {
            this.currentTax = tax;
            // Show modal
        },
    },
    mounted() {
        this.$emit('update-menu-name', 'Podatki i finanse');
    },
};
</script>

<style scoped>
.town-hall-taxes-page {
    padding-top: 12px;
    width: 100%;
    height: 100%;
    color: #3d3d3d;
}

.town-hall-taxes-page table {
    margin: 0px;
}

.town-hall-taxes-page table td,
.town-hall-taxes-page table th {
    vertical-align: middle;
}

.last-taxes-list {
    max-height: 20em;
}
</style>
