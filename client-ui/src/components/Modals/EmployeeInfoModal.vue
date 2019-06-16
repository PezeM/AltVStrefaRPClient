<template>
    <modal name="employee-info-modal" transition="pop-out" height="auto" @before-open="beforeOpen">
        <div class="container">
            <div class="modal-header">
                <h5 class="modal-title" id="modalCenterTitle">{{ selectedEmployee.Name }} {{ selectedEmployee.LastName }}</h5>
            </div>
            <div class="modal-body">
                <div class="form-group row">
                    <label class="col-sm-4 col-form-label">ID</label>
                    <div class="col-sm-8">
                        <input type="text" readonly class="form-control-plaintext" v-model="selectedEmployee.Id" />
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-sm-4 col-form-label">Imię</label>
                    <div class="col-sm-8">
                        <input type="text" readonly class="form-control-plaintext" v-model="selectedEmployee.Name" />
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-sm-4 col-form-label">Nazwisko</label>
                    <div class="col-sm-8">
                        <input type="text" readonly class="form-control-plaintext" v-model="selectedEmployee.LastName" />
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-sm-4 col-form-label">Płeć</label>
                    <div class="col-sm-8">
                        <input type="text" readonly class="form-control-plaintext" v-model="selectedEmployee.Gender" />
                    </div>
                </div>

                <div class="form-group row">
                    <label class="col-sm-4 col-form-label">Stanowisko</label>
                    <div class="col-sm-8">
                        <vSelect v-model="newRank" label="RankName" :options="allBusinessRanks" :clearable="false" :filterable="true" />
                    </div>
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" @click="closeEmployeeInfo">Zamknij</button>
                <button type="button" class="btn btn-primary" @click="saveEmployeeChanges">Zapisz zmiany</button>
            </div>
        </div>
    </modal>
</template>

<script>
import vSelect from 'vue-select';

export default {
    name: 'employeeInfoModal',
    components: {
        vSelect,
    },
    data() {
        return {
            newRank: null,
            selectedEmployee: {
                Name: '',
                LastName: '',
            },
            allBusinessRanks: [],
        };
    },
    methods: {
        beforeOpen(event) {
            console.log(JSON.stringify(event.params));
            this.selectedEmployee = event.params.selectedEmployee;
            this.newRank = event.params.newRank;
            this.allBusinessRanks = event.params.businessRanks;
        },
        deleteEmployee() {
            if (this.employeeToDelete) {
                this.$emit('delete-employee', this.employeeToDelete);
            }
        },
        saveEmployeeChanges() {
            this.$emit('save-employee-changes', this.selectedEmployee, this.newRank);
        },
        closeEmployeeInfo() {
            this.$modal.hide('employee-info-modal');
        },
    },
};
</script>

<style></style>
