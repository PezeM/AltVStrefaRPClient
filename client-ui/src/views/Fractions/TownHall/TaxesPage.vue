<template>
  <div class="town-hall-taxes-page">
    <ChangeTaxModal v-on:update-tax-value="tryToUpdateTaxValue"/>
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
                  <td>{{ getTaxText(tax.value) }}%</td>
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
            <div class="overflow-auto last-taxes-list table-responsive">
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
import ChangeTaxModal from '@/components/Modals/Fractions/ChangeTaxModal.vue';
import EventBus from '@/event-bus.js';

export default {
    name: 'townHallTaxesPage',
    components: {
        'v-icon': Icon,
        ChangeTaxModal,
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
    mounted() {
        this.$emit('update-menu-name', 'Podatki i finanse');
        EventBus.$on('updateTaxValue', this.updateTaxValue);
    },
    methods: {
        getTaxText(taxValue) {
            return Math.floor(taxValue * 100);
        },
        editTax(tax) {
            this.currentTax = {
                id: tax.id,
                name: tax.name,
                value: Math.floor(tax.value * 100),
            };
            this.$modal.show('change-tax-modal', this.currentTax);
        },
        tryToUpdateTaxValue(newTax) {
            var taxValue = newTax.value / 100;
            if (newTax.value > 0) {
                alt.emit('tryToUpdateTaxValue', newTax.id, taxValue);
                this.$modal.hide('change-tax-modal');
            } else {
                alt.emit('showNotification', 3, 'Błąd', 'Podano błędną wartość podatku.', 5000);
            }
        },
        updateTaxValue(taxId, newValue) {
            if (this.data.taxes) {
                for (let i = 0; i < this.data.taxes.length; i++) {
                    if (this.data.taxes[i].id == taxId) {
                        this.data.taxes[i].value = newValue;
                    }
                }
            }
        },
    },
    beforeDestroy() {
        EventBus.$off('updateTaxValue', this.updateTaxValue);
    },
};

alt.on('updateTaxValue', (taxId, newValue) => {
    EventBus.$emit('updateTaxValue', taxId, newValue);
});
</script>

<style scoped>
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
