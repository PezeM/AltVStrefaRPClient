<template>
  <modal name="delete-employee-modal" transition="pop-out" height="auto" @before-open="beforeOpen">
    <div class="container">
      <div class="modal-header">
        <h5 class="modal-title" id="modalCenterTitle">Usuwanie pracowników</h5>
      </div>
      <div class="modal-body">
        <div class="form-group row">
          <label class="col-sm-4 col-form-label">Wybierz pracownika</label>
          <div class="col-sm-8">
            <vSelect
              v-model="employeeToDelete"
              label="FullName"
              :options="allEmployees"
              :clearable="false"
              :filterable="true"
            ></vSelect>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" @click="closeDeleteEmployeeModal">Zamknij</button>
        <button type="button" class="btn btn-danger" @click="deleteEmployee">Usuń pracownika</button>
      </div>
    </div>
  </modal>
</template>

<script>
import vSelect from 'vue-select';

export default {
    name: 'deleteEmployeeModal',
    components: {
        vSelect,
    },
    data() {
        return {
            employeeToDelete: null,
            allEmployees: [],
        };
    },
    methods: {
        beforeOpen(event) {
            console.log(JSON.stringify(event.params));
            this.allEmployees = event.params;
        },
        closeDeleteEmployeeModal() {
            this.$modal.hide('delete-employee-modal');
        },
        deleteEmployee() {
            if (this.employeeToDelete) {
                this.$emit('delete-employee', this.employeeToDelete);
            }
        },
    },
};
</script>


<style>
</style>
