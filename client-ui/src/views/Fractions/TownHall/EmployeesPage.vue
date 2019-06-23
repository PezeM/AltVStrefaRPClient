<template>
  <div class="town-hall-employees-page">
    <div class="row mb-3">
      <div class="col-4">
        <div class="card h-100 shadow rounded border text-center">
          <div class="card-body">
            <button
              class="btn btn-primary action-button"
              @click="addNewEmployee()"
            >Dodaj nowego pracownika</button>
          </div>
        </div>
      </div>
      <div class="col-4">
        <div class="card h-100 shadow rounded border text-center">
          <div class="card-body align-items-center d-flex justify-content-center">
            <button
              class="btn btn-danger action-button"
              @click="deleteEmployeeByButton()"
            >Usuń pracownika</button>
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
        <div class="table-responsive">
          <table class="table table-sm shadow hover-table employees-table">
            <thead class="thead-dark">
              <tr>
                <th>#</th>
                <th>ID</th>
                <th>Imię</th>
                <th>Nazwisko</th>
                <th>Wiek</th>
                <th>Ranga</th>
                <th>Akcje</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="(employee, index) in employeesData.employees"
                v-bind:key="employee.id"
                @click="showEmployeeModal(employee)"
              >
                <th>{{ index + 1 }}</th>
                <td>{{ employee.id }}</td>
                <td>{{ employee.name }}</td>
                <td>{{ employee.lastName }}</td>
                <td>{{ employee.age }}</td>
                <td>{{ employee.rankName }}</td>
                <td>
                  <button class="btn btn-danger" @click="deleteEmployee(employee)">Usuń</button>
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
export default {
    name: 'townHallEmployeesPage',
    props: {
        data: {
            type: Object,
        },
        employeesData: {
            type: Object,
            default() {
                return {
                    employees: [{ id: 1, name: 'Imie', lastName: 'nazwisko', age: 23, rankName: 'Pracownik' }],
                };
            },
        },
    },
    methods: {
        addNewEmployee() {
            // Show modal with user name and last name
        },
        deleteEmployeeByButton() {
            // Show modal with every employee,then user select employee and we try to delete them
        },
        deleteEmployee(employee) {
            // Checks his rank and if he not the highest rank, so we can't delete him
        },
        showEmployeeModal(employee) {
            // Show employee modal where user can change rank
            // Get avaible ranks from employeesData.ranks
        },
    },
    mounted() {
        this.$emit('update-menu-name', 'Pracownicy');
    },
};
</script>

<style scoped>
.town-hall-employees-page p {
    font-family: 'Roboto', sans-serif;
}

.town-hall-employees-page .action-button {
    min-height: 3rem;
    min-width: 5rem;
}

.employees-table td,
.employees-table th {
    vertical-align: middle;
}
</style>
