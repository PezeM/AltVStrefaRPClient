<template>
  <div class="town-hall-residents-page">
    <h1 class="text-center">Spis mieszkańców</h1>
    <div class="row mb-5">
      <div class="col-12">
        <div class="card shadow rounded border">
          <div class="card-body text-center" v-on:keyup.enter="excuteQuery">
            <h6>Tutaj będzie wyszukiwanie informacji na temat mieszkańców</h6>
            <vue-bootstrap-typeahead
              ref="residentsAutoComplete"
              v-model="query"
              :data="residentsData"
              @keydown.enter="excuteQuery"
              @hit="selectedResident = $event"
              placeholder="Podaj imię i nazwisko..."
              :maxMatches="maxMatches"
              :minMatchingChars="minMatchingChars"
            >
              <template slot="append">
                <button @click="excuteQuery" class="btn btn-primary">Szukaj</button>
              </template>

              <template slot="suggestion" slot-scope="{ data, htmlText }">
                <span v-html="htmlText"></span>&nbsp;
                <small>{{ data.description }}</small>
              </template>
            </vue-bootstrap-typeahead>
          </div>
        </div>
      </div>
    </div>

    <div class="row" v-if="queriedResident">
      <div class="col-5">
        <div class="card shadow rounded border">
          <div class="card-body">
            <p class="card-text">Imie: {{ queriedResident.name }}</p>
            <p class="card-text">Nazwisko: {{ queriedResident.lastName }}</p>
            <p class="card-text">Wiek: {{ queriedResident.age }}</p>
            <p class="card-text">Numer konta bankowego: {{ queriedResident.bankAccount }}</p>
            <p class="card-text">Ilość pieniędzy na koncie: {{ queriedResident.bankMoney }}$</p>
          </div>
        </div>
      </div>
      <div class="col-7">
        <div class="card shadow rounded border">
          <div class="card-body">
            <p class="card-text">Zatrudniony w frakcji: {{ queriedResident.fractionName }}</p>
            <p class="card-text">Zatrudniony w biznesie: {{ queriedResident.businessName }}</p>
            <div class="overflow-auto vehicle-list-display">
              <table class="table table-sm">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Model</th>
                    <th scope="col">Rejestracja</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(vehicle, index) in queriedResident.vehicles" v-bind:key="index">
                    <th scope="col">{{ index }}</th>
                    <td>{{ vehicle.model }}</td>
                    <td>{{ vehicle.plateText }}</td>
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
import 'vue-awesome/icons/search';
import VueBootstrapTypeahead from 'vue-bootstrap-typeahead';
import Icon from 'vue-awesome/components/Icon';
import EventBus from '@/event-bus.js';

export default {
    name: 'townHallResidentsPage',
    components: {
        VueBootstrapTypeahead,
        'v-icon': Icon,
    },
    props: {
        data: {
            type: Object,
        },
        residentsData: {
            type: Array,
            default: function() {
                return ['Pierwszy mieszkaniec', 'Drugi mieszkaniec', 'Trzeci mieszkaniec', 'Czwarty mieszkaniec'];
            },
        },
    },
    data() {
        return {
            query: '',
            maxMatches: 5,
            minMatchingChars: 1,
            selectedResident: null,
            queriedResident: {
                id: 1,
                name: 'Imie',
                lastName: 'Nazwisko',
                age: 17,
                bankAccount: 321234,
                bankMoney: 132.43,
                fractionName: 'Urząd miasta',
                businessName: 'Brak',
                vehicles: [
                    { model: 'T20', plateText: 'SOMETEXT' },
                    { model: 'Zentorno', plateText: 'SOMETEXT' },
                    { model: 'T20', plateText: 'REJESTRACJA' },
                    { model: 'SEVEN', plateText: 'REJESTRACJA' },
                    { model: 'COG', plateText: 'REJESTRACJA' },
                    { model: 'DŁUZSZANAZWA', plateText: 'REJESTRACJA' },
                    { model: 'KOLEJNE', plateText: 'REJESTRACJA' },
                    { model: 'KOLEJNE', plateText: 'REJESTRACJA' },
                    { model: 'KOLEJNE', plateText: 'REJESTRACJA' },
                    { model: 'KOLEJNE', plateText: 'REJESTRACJA' },
                    { model: 'KOLEJNE', plateText: 'REJESTRACJA' },
                ],
            },
        };
    },
    mounted() {
        this.$emit('update-menu-name', 'Spis mieszkańców');
        EventBus.$on('populateResidentData', this.populateResidentData);
    },
    methods: {
        excuteQuery() {
            console.log(`Query = ${this.query} and selectedResidents = ${this.selectedResident}`);
            if (this.selectedResident) {
                this.sendQueryToServer(this.selectedResident);
            } else if (this.query.length > 3) {
                let fullNameArray = this.query.split(' ', 2);
                if (fullNameArray.length < 2) return;
                let upperCaseArray = fullNameArray.map(n => {
                    return n[0].toUpperCase() + n.slice(1);
                });
                let result = upperCaseArray[0] + ' ' + upperCaseArray[1];
                this.sendQueryToServer(result);
            } else {
                alt.emit('showNotification', 3, 'Błąd', 'Podano błędne imię lub nazwisko.', 5000);
            }
        },
        sendQueryToServer(residentName) {
            alt.emit('tryToGetResidentData', residentName);
            this.$refs.residentsAutoComplete.inputValue = '';
            this.selectedResident = null;
            this.query = '';
        },
        populateResidentData(residentData) {
            this.queriedResident = residentData;
            console.log(`New resident data = ${JSON.stringify(this.queriedResident, null, 4)}`);
        },
    },
    beforeDestroy() {
        EventBus.$off('populateResidentData', this.populateResidentData);
    },
};

alt.on('populateResidentData', residentData => {
    EventBus.$emit('populateResidentData', residentData);
});
</script>

<style scoped>
.town-hall-residents-page {
    padding-top: 12px;
    width: 100%;
    height: 100%;
    color: #3d3d3d;
}

.vehicle-list-display {
    max-height: 10em;
}

.town-hall-residents-page p {
    font-family: 'Roboto', sans-serif;
}
</style>
