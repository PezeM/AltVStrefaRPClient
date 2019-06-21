<template>
  <modal name="add-new-employee-modal" transition="pop-out" height="auto" @before-open="beforeOpen">
    <div class="container">
      <div class="modal-header">
        <h5 class="modal-title" id="modalCenterTitle">Dodaj nowego pracownika</h5>
      </div>
      <div class="modal-body">
        <div class="form-group row">
          <label class="col-sm-4 col-form-label">Imię</label>
          <div class="col-sm-8">
            <input
              type="text"
              class="form-control"
              v-model="newEmployee.Name"
              placeholder="Podaj imię"
            >
          </div>
        </div>

        <div class="form-group row">
          <label class="col-sm-4 col-form-label">Nazwisko</label>
          <div class="col-sm-8">
            <input
              type="text"
              class="form-control"
              v-model="newEmployee.LastName"
              placeholder="Podaj nazwisko"
            >
          </div>
        </div>
      </div>

      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="closeNewEmployeeModal">Zamknij</button>
        <button type="button" class="btn btn-primary" @click="addNewEmployee">Dodaj pracownika</button>
      </div>
    </div>
  </modal>
</template>

<script>
export default {
    name: 'addNewEmployeeModal',
    data() {
        return {
            newEmployee: {
                Name: '',
                LastName: '',
            },
        };
    },
    methods: {
        beforeOpen(event) {
            console.log(JSON.stringify(event.params));
            this.newEmployee = event.params;
        },
        addNewEmployee() {
            if (!this.validateNewEmployee()) return;
            this.$emit('add-new-employee', this.newEmployee);
        },
        validateNewEmployee() {
            if (this.newEmployee == null || typeof this.newEmployee == 'undefined') {
                return false;
            } else if (this.newEmployee.Name === '' || this.newEmployee.LastName === '') {
                alt.emit('showNotification', 3, 'Błąd', 'Podaj imię i nazwisko pracownika.', 5000);
                return false;
            } else {
                return true;
            }
        },
        closeNewEmployeeModal() {
            this.$modal.hide('add-new-employee-modal');
        },
    },
};
</script>
