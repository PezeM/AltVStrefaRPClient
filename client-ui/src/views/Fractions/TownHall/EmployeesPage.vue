<template>
  <div class="town-hall-employees-page">
    <v-dialog/>
    <EmployeeEditModal v-on:save-employee-changes="saveEmployeeChanges"/>
    <AddNewEmployeeModal v-on:add-new-employee="addNewEmployee"/>

    <div class="row mb-3">
      <div class="col-4">
        <div class="card h-100 shadow rounded border text-center">
          <div class="card-body">
            <button class="btn btn-primary action-button" @click="showNewEmployeeModal()">
              <v-icon name="user-plus"/>Dodaj pracownika
            </button>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card h-100 shadow rounded border text-center">
          <div class="card-body align-items-center d-flex justify-content-center">
            <p class="card-text">
              Aktualna liczba pracowników:
              <strong>{{ data.employeesCount }}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="row" v-if="employeesData">
      <div class="col-12">
        <div class="overflow-auto employees-table shadow">
          <table class="table table-sm table-hover">
            <thead class="thead-dark">
              <tr>
                <th>#</th>
                <th>ID</th>
                <th>Imię</th>
                <th>Nazwisko</th>
                <th>Wiek</th>
                <th>Ranga</th>
                <th style="width: 15%">Akcje</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(employee, index) in employeesData.employees" v-bind:key="employee.id">
                <th>{{ index + 1 }}</th>
                <td>{{ employee.id }}</td>
                <td>{{ employee.name }}</td>
                <td>{{ employee.lastName }}</td>
                <td>{{ employee.age }}</td>
                <td>{{ employee.rankName }}</td>
                <td>
                  <button class="btn btn-danger" @click="showRemoveEmployeeDialog(employee)">
                    <v-icon name="user-slash"/>
                  </button>
                  <button class="btn btn-primary" @click="showEmployeeModal(employee)">
                    <v-icon name="user-edit"/>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'vue-awesome/icons/user-edit';
import 'vue-awesome/icons/user-plus';
import 'vue-awesome/icons/user-slash';
import Icon from 'vue-awesome/components/Icon';
import EmployeeEditModal from '@/components/Modals/EmployeeEditModal.vue';
import AddNewEmployeeModal from '@/components/Modals/AddNewEmployee.vue';
import EventBus from '@/event-bus.js';

export default {
    name: 'townHallEmployeesPage',
    components: {
        EmployeeEditModal,
        AddNewEmployeeModal,
        'v-icon': Icon,
    },
    props: {
        data: {
            type: Object,
        },
        employeesData: {
            type: Object,
            default() {
                return {
                    employees: [
                        { id: 1, name: 'Imie', lastName: 'nazwisko', age: 23, rankName: 'Pracownik', rankId: 4 },
                        { id: 2, name: 'Imie', lastName: 'nazwisko', age: 24, rankName: 'Pracownik', rankId: 4 },
                        { id: 3, name: 'Imie', lastName: 'nazwisko', age: 24, rankName: 'Burmistrz', rankId: 3 },
                        { id: 4, name: 'Imie', lastName: 'nazwisko', age: 24, rankName: 'Pracownik', rankId: 4 },
                        { id: 5, name: 'Imie', lastName: 'nazwisko', age: 24, rankName: 'Pracownik', rankId: 4 },
                    ],
                    ranks: [
                        {
                            id: 3,
                            rankName: 'Burmistrz',
                            priority: 100,
                            rankType: 2,
                        },
                        {
                            id: 4,
                            rankName: 'Pracownik',
                            priority: 0,
                            rankType: 0,
                        },
                        {
                            id: 5,
                            rankName: 'Testowy',
                            priority: 50,
                            rankType: 1,
                        },
                    ],
                };
            },
        },
    },
    mounted() {
        EventBus.$on('succesfullyUpdatedEmployeeRank', this.updateEmployeeRank);
        this.$emit('update-menu-name', 'Pracownicy');
    },
    methods: {
        showNewEmployeeModal() {
            let newEmployee = {
                name: '',
                lastName: '',
            };

            this.$modal.show('add-new-employee-modal', newEmployee);
        },
        addNewEmployee(newEmployee) {
            console.log(`New employee = ${JSON.stringify(newEmployee, null, 2)}`);
            alt.emit('tryToInviteEmployeeToFraction', this.data.id, newEmployee.name, newEmployee.lastName);
            this.$modal.hide('add-new-employee-modal');
        },
        showRemoveEmployeeDialog(employee) {
            this.$modal.show('dialog', {
                title: employee.name + ' ' + employee.lastName,
                text: 'Czy na pewno chcesz usunąc tego pracownika?',
                buttons: [
                    {
                        title: '<h6>Anuluj</h6>',
                        default: true,
                        handler: () => {
                            this.$modal.hide('dialog');
                        },
                    },
                    {
                        title: 'Usuń',
                        handler: () => {
                            this.removeEmployee(employee);
                            this.$modal.hide('dialog');
                        },
                    },
                ],
            });
        },
        removeEmployee(employee) {
            if (employee) {
                alt.emit('tryToRemoveEmployeeFromFraction', this.data.id, employee.id);
            }
        },
        showEmployeeModal(employee) {
            this.$modal.show('employee-edit-modal', {
                employee,
                ranks: this.employeesData.ranks,
            });
        },
        saveEmployeeChanges(employee, newRank) {
            alt.emit(`updateFractionEmployeeRank`, this.data.id, employee.id, newRank.id);
            this.$modal.hide('employee-edit-modal');
        },
        updateEmployeeRank(employeeId, newRankId) {
            let employee = this.employeesData.employees.find(e => e.id === employeeId);
            if (employee == null) return;
            let newRank = this.employeesData.ranks.find(r => r.id === newRankId);
            if (newRank == null) return;
            console.log(`Found new rank and employee`);
            console.log(`Employee before update = ${JSON.stringify(employee, null, 4)}`);
            this.$set(employee, 'rankName', newRank.rankName);
            this.$set(employee, 'rankId', newRankId);
            console.log(`Employee after update = ${JSON.stringify(employee, null, 4)}`);
        },
    },
    beforeDestroy() {
        EventBus.$off('succesfullyUpdatedEmployeeRank', this.updateEmployeeRank);
    },
};

alt.on('succesfullyUpdatedEmployeeRank', (employeeId, newRankId) => {
    EventBus.$emit('succesfullyUpdatedEmployeeRank', employeeId, newRankId);
});
</script>

<style scoped>
.town-hall-employees-page p {
    font-family: 'Roboto', sans-serif;
}

.town-hall-employees-page .action-button {
    min-height: 3rem;
    min-width: 5rem;
}

.employees-table {
    height: 30rem;
}

.employees-table td,
.employees-table th {
    vertical-align: middle;
}
</style>
