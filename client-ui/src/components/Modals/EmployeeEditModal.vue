<template>
  <modal name="employee-edit-modal" transition="pop-out" height="auto" @before-open="beforeOpen">
    <div class="container">
      <div class="modal-header">
        <h5
          class="modal-title"
          id="modalCenterTitle"
        >{{ selectedEmployee.name }} {{ selectedEmployee.lastName }}</h5>
      </div>
      <div class="modal-body">
        <div class="form-group row">
          <label class="col-sm-4 col-form-label">ID</label>
          <div class="col-sm-8">
            <input
              type="text"
              readonly
              class="form-control-plaintext"
              v-model="selectedEmployee.id"
            >
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-4 col-form-label">Imię</label>
          <div class="col-sm-8">
            <input
              type="text"
              readonly
              class="form-control-plaintext"
              v-model="selectedEmployee.name"
            >
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-4 col-form-label">Nazwisko</label>
          <div class="col-sm-8">
            <input
              type="text"
              readonly
              class="form-control-plaintext"
              v-model="selectedEmployee.lastName"
            >
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-4 col-form-label">Wiek</label>
          <div class="col-sm-8">
            <input
              type="text"
              readonly
              class="form-control-plaintext"
              v-model="selectedEmployee.age"
            >
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-4 col-form-label">Stanowisko</label>
          <div class="col-sm-8">
            <vSelect
              :value="newRank"
              @input="setSelected"
              label="rankName"
              :options="allBusinessRanks"
              :clearable="false"
              :filterable="true"
            />
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="closeEmployeeModal">Zamknij</button>
        <button
          type="button"
          class="btn btn-primary"
          :disabled="!rankChanged"
          @click="saveEmployeeChanges"
        >Zapisz zmiany</button>
      </div>
    </div>
  </modal>
</template>

<script>
import vSelect from 'vue-select';

export default {
    name: 'employeeEditModal',
    components: {
        vSelect,
    },
    data() {
        return {
            selectedEmployee: {
                id: 1,
                name: 'Imie',
                lastName: 'nazwisko',
                age: 23,
                rankName: 'Pracownik',
                rankId: 4,
            },
            allBusinessRanks: [],
            newRank: null,
            rankChanged: false,
        };
    },
    methods: {
        beforeOpen(event) {
            this.resetData();
            this.selectedEmployee = event.params.employee;
            this.allBusinessRanks = event.params.ranks;
            this.allBusinessRanks = event.params.ranks.sort((a, b) => b.priority - a.priority);
            var employeeRank = this.allBusinessRanks.find(q => q.id == this.selectedEmployee.rankId);
            if (employeeRank != null) {
                this.newRank = employeeRank;
            }
        },
        saveEmployeeChanges() {
            console.log(`Clicked`);
            if (this.rankChanged && !!this.newRank) {
                this.$emit('save-employee-changes', this.selectedEmployee, this.newRank);
            }
        },
        closeEmployeeModal() {
            this.$modal.hide('employee-edit-modal');
        },
        setSelected(value) {
            this.newRank = value;
            if (!this.rankChanged) this.rankChanged = true;
        },
        resetData() {
            this.rankChanged = false;
            this.newRank = null;
            this.allBusinessRanks = null;
            this.selectedEmployee = null;
        },
    },
};
</script>

<style></style>
