<template>
  <div class="businessApp">
    <nav class="navbar navbar-dark bg-dark navbar-expand-lg shadow p-0">
      <a class="navbar-brand col-sm-3 col-md-3 mr-0 navbarText">{{ businessInfo.BusinessName }}</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active" id="mainPageNav" @click="showPage('mainPage')">
            <a class="nav-link">Strona główna</a>
          </li>
          <li class="nav-item" id="employeesPageNav" @click="showPage('employeesPage')">
            <a class="nav-link">Pracownicy</a>
          </li>
          <li class="nav-item" id="rolesPageNav" @click="showPage('rolesPage')">
            <a class="nav-link">Stanowiska</a>
          </li>
          <li class="nav-item" id="businessInfoPageNav" @click="showPage('businessInfoPage')">
            <a class="nav-link">Informacje o biznesie</a>
          </li>
        </ul>
        <ul class="navbar-nav">
          <li class="nav-item p-1" @click="closeBusinessMenu">
            <a class="nav-link">Zamknij</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="businessAppContainer container">
      <div class="row">
        <div class="col-md-12 ml-sm-auto col-lg-12 px-4" v-if="currentMenuVisible == 'mainPage'">
          <div class="row">
            <div class="col-md-12 pt-3 pb-2 mb-3">
              <div class="content-box shadow">
                <div class="business-info">
                  <h3>Witaj w menu bizesu - {{ businessInfo.BusinessName }}</h3>
                  <p>Biznes został założony - {{ createdAt }}</p>
                  <p>Typ bizesu - {{ businessType }}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="pt-3 pb-2 mb-3 row">
            <div class="col-md-4">
              <div class="content-box shadow">
                <div class="info">
                  <h3>{{ businessInfo.Money }}</h3>
                  <span>$</span>
                  <p>Ilość pieniędzy w firmie</p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="content-box shadow">
                <div class="info">
                  <h3>{{ businessInfo.Transactions }}</h3>
                  <span>Transakcji</span>
                  <p>Ilość przeprowadzonych transakcji</p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="content-box shadow">
                <div class="info">
                  <h3>{{ businessInfo.EmployeesCount }}</h3>
                  <span>Pracowników</span>
                  <p>Ilość zatrudnionych pracowników</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="col-md-12 ml-sm-auto col-lg-12 px-4"
          v-if="currentMenuVisible == 'employeesPage'"
        >
          <div class="row">
            <div class="col-md-6 pt-3 pb-2 mb-3">
              <div class="content-box shadow box-hover" @click="openNewEmployeeModal">
                <div class="business-info">
                  <h3>Dodaj nowego pracownika</h3>
                  <p>
                    {{ businessInfo.EmployeesCount }} / {{ businessInfo.MaxMembersCount }}
                    Pracowników
                  </p>
                </div>
              </div>
            </div>

            <div class="col-md-6 pt-3 pb-2 mb-3">
              <div class="content-box shadow box-hover delete-box" @click="openDeleteEmployeeModal">
                <div class="business-info">
                  <h3>Usuń pracownika</h3>
                  <p>Usuń wybranego pracownika</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Employee modals -->
          <AddNewEmployeeModal v-on:add-new-employee="addNewEmployee"/>
          <DeleteEmployeeModal v-on:delete-employee="deleteEmployee"/>
          <EmployeeInfoModal v-on:save-employee-changes="saveEmployeeChanges"/>

          <h2 class="text-center p-2">Lista pracowników</h2>
          <div class="table-responsive rounded">
            <table class="table table-striped table-sm shadow table-hover">
              <thead class="thead-dark">
                <tr>
                  <th>#</th>
                  <th>Id</th>
                  <th>Imię</th>
                  <th>Nazwisko</th>
                  <th>Wiek</th>
                  <th>Płeć</th>
                  <th>Stanowisko</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="(employee, index) in employeesInfo.BusinessEmployees"
                  @click="showEmployeeInfo(employee.Id)"
                  v-bind:key="employee.Id"
                >
                  <td>{{ index + 1 }}</td>
                  <td>{{ employee.Id }}</td>
                  <td>{{ employee.Name }}</td>
                  <td>{{ employee.LastName }}</td>
                  <td>{{ employee.Age }}</td>
                  <td v-if="employee.Gender == 0">M</td>
                  <td v-else>K</td>
                  <td>{{ employee.RankName }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="col-md-12 ml-sm-auto col-lg-12 px-4" v-if="currentMenuVisible == 'rolesPage'">
          <!-- Roles modal -->
          <AddNewRoleModal v-on:add-new-role="addNewRole"/>
          <DeleteRoleModal v-on:delete-role="deleteRole"/>
          <RankInfoModal v-on:save-rank-changes="saveRankChanges"/>

          <div class="row">
            <div class="col-md-6 pt-3 pb-2 mb-3">
              <div class="content-box shadow box-hover" @click="openNewRoleModal">
                <div class="business-info">
                  <h3>Dodaj nową stanowisko</h3>
                  <p>{{ businessInfo.Ranks }} / {{ businessInfo.MaxRanksCount }} stanowisk</p>
                </div>
              </div>
            </div>

            <div class="col-md-6 pt-3 pb-2 mb-3">
              <div class="content-box shadow box-hover delete-box" @click="openDeleteRoleModal">
                <div class="business-info">
                  <h3>Usuń stanowisko</h3>
                  <p>Usuń wybrane stanowisko</p>
                </div>
              </div>
            </div>
          </div>

          <h2 class="text-center p-2">Lista stanowisk</h2>
          <div class="table-responsive rounded">
            <table class="table table-striped table-sm shadow table-hover">
              <thead class="thead-dark">
                <tr>
                  <th>Id</th>
                  <th>Stanowisko</th>
                  <th>Otwieranie menu biznesu</th>
                  <th>Klucze do budynków</th>
                  <th>Otwieranie inwentarza</th>
                  <th>Klucze do pojazdów</th>
                  <th>Rekrutowanie pracowników</th>
                  <th>Zarządzanie pracownikami</th>
                  <th>Zarządzanie stanowiskami</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="rank in businessRanksInfo"
                  v-bind:key="rank.RankId"
                  @click="openRankInfo(rank)"
                >
                  <td>{{ rank.RankId }}</td>
                  <td>{{ rank.RankName }}</td>
                  <td>{{ betterPermissionDisplay(rank.CanOpenBusinessMenu) }}</td>
                  <td>{{ betterPermissionDisplay(rank.HaveBusinessKeys) }}</td>
                  <td>{{ betterPermissionDisplay(rank.CanOpenBusinessInventory) }}</td>
                  <td>{{ betterPermissionDisplay(rank.HaveVehicleKeys) }}</td>
                  <td>{{ betterPermissionDisplay(rank.CanInviteNewMembers) }}</td>
                  <td>{{ betterPermissionDisplay(rank.CanManageEmployees) }}</td>
                  <td>{{ betterPermissionDisplay(rank.CanManageRanks) }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div
          class="col-md-12 ml-sm-auto col-lg-12 px-4"
          v-if="currentMenuVisible == 'businessInfoPage'"
        >
          <DeleteBusinessModal v-on:delete-business="deleteBusiness"/>

          <div class="pt-3 pb-2 mb-3 row">
            <div class="col-md-4">
              <div class="content-box shadow">
                <div class="info">
                  <h3>{{ businessInfo.Money }}</h3>
                  <span>$</span>
                  <p>Ilość pieniędzy w firmie</p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="content-box shadow">
                <div class="info">
                  <h3>{{ businessInfo.Transactions }}</h3>
                  <span>Transakcji</span>
                  <p>Ilość przeprowadzonych transakcji</p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="content-box shadow">
                <div class="info">
                  <h3>{{ businessInfo.EmployeesCount }}</h3>
                  <span>Pracowników</span>
                  <p>Ilość zatrudnionych pracowników</p>
                </div>
              </div>
            </div>
          </div>

          <div class="pt-3 pb-2 mb-3 row">
            <div class="col-md-4">
              <div class="content-box shadow">
                <div class="info">
                  <h3>{{ businessInfo.BusinessId }}</h3>
                  <span>Numer</span>
                  <p>Numer biznesu</p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="content-box shadow">
                <div class="info">
                  <h3>{{ businessType }}</h3>
                  <span>Typ</span>
                  <p>Rodzaj biznesu</p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="content-box shadow">
                <div class="info">
                  <h3>{{ businessInfo.MaxMembersCount }}</h3>
                  <span>Miejsc</span>
                  <p>Maksymalna liczba pracowników</p>
                </div>
              </div>
            </div>
          </div>

          <div class="pt-3 pb-2 mb-3 row">
            <div class="col-md-4">
              <div class="content-box shadow">
                <div class="info">
                  <h3>{{ businessInfo.Ranks }}</h3>
                  <span>Stanowisk</span>
                  <p>Liczba stanowisk w biznesie</p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="content-box shadow">
                <div class="info">
                  <h3>{{ businessInfo.MaxRanksCount }}</h3>
                  <span>Stanowisk</span>
                  <p>Maksymalna liczba stanowisk</p>
                </div>
              </div>
            </div>

            <div class="col-md-4">
              <div class="content-box shadow delete-box" @click="showDeleteBusiness">
                <div class="info">
                  <h3>Usuń</h3>
                  <span>biznes</span>
                  <p>Permamentnie usuń biznes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import EventBus from '@/event-bus.js';
import $ from 'jquery';
import AddNewEmployeeModal from '@/components/Modals/AddNewEmployee.vue';
import DeleteEmployeeModal from '@/components/Modals/DeleteEmployeeModal.vue';
import EmployeeInfoModal from '@/components/Modals/EmployeeInfoModal.vue';
import AddNewRoleModal from '@/components/Modals/AddNewRoleModal.vue';
import DeleteRoleModal from '@/components/Modals/DeleteRoleModal.vue';
import RankInfoModal from '@/components/Modals/RankInfoModal.vue';
import DeleteBusinessModal from '@/components/Modals/DeleteBusinessModal.vue';

const businessTypes = ['Brak', 'Mechanik', 'Restauracja', 'Pub'];

const testEmployeeRanks = {
    BusinessRanks: [
        { Id: 9, IsDefaultRank: false, IsOwnerRank: true, RankName: 'Właściciel' },
        { Id: 10, IsDefaultRank: true, IsOwnerRank: false, RankName: 'Pracownik' },
    ],
    BusinessEmployees: [{ Id: 5, Name: '2', LastName: '2', Age: 10, Gender: 0, RankId: 10, RankName: 'Pracownik' }],
};
const testBusinessRankInfo =
    '[{"Id":7,"RankId":9,"RankName":"Właściciel","HaveVehicleKeys":true,"HaveBusinessKeys":true,"CanOpenBusinessMenu":true,"CanOpenBusinessInventory":true,"CanInviteNewMembers":true,"CanManageRanks":true,"CanManageEmployees":true},{"Id":8,"RankId":10,"RankName":"Pracownik","HaveVehicleKeys":false,"HaveBusinessKeys":false,"CanOpenBusinessMenu":true,"CanOpenBusinessInventory":false,"CanInviteNewMembers":false,"CanManageRanks":true,"CanManageEmployees":true}]';

export default {
    data() {
        return {
            employeesInfo: null,
            businessRanksInfo: null,
            currentMenuVisible: 'mainPage',
            selectedEmployee: null,
            selectedRank: null,
            newRank: 0,
            newEmployee: null,
            newRole: null,
            rankToDelete: null,
            employeeToDelete: null,
        };
    },
    props: {
        businessInfo: {
            type: Object,
            default: function() {
                return {
                    BusinessId: 5,
                    BusinessName: 'NowaRestauracja',
                    OwnerId: 3,
                    Money: 250,
                    MaxMembersCount: 20,
                    Transactions: 0,
                    CreatedAt: '2019-04-23T17:04:11.963349',
                    Type: 1,
                    EmployeesCount: 1,
                    Ranks: 2,
                    MaxRanksCount: 5,
                };
            },
        },
    },
    components: {
        AddNewEmployeeModal,
        DeleteEmployeeModal,
        EmployeeInfoModal,
        AddNewRoleModal,
        DeleteRoleModal,
        RankInfoModal,
        DeleteBusinessModal,
    },
    mounted() {
        EventBus.$on('populateEmployeeRanks', this.populateEmployeeRanks);
        EventBus.$on('populateBusinessRanksInfo', this.populateBusinessRanksInfo);
        EventBus.$on('successfullyUpdatedEmployeeRank', this.updateEmployeeRank);
    },
    methods: {
        closeBusinessMenu() {
            alt.emit('closeBusinessMenu');
            // this.businessInfo = null;
            // this.selectedEmployee = null;
            // this.selectedRank = null;
            // this.businessRanksInfo = null;
        },
        showPage(pageName) {
            switch (pageName) {
                case 'employeesPage':
                    alt.emit('getBusinessEmployees', this.businessInfo.BusinessId);
                    break;

                case 'rolesPage':
                    alt.emit('getBusinessRolesInfo', this.businessInfo.BusinessId);
                    break;

                default:
                    this.setActiveMenu(pageName);
                    break;
            }
        },
        setActiveMenu(menuName) {
            $(`#${this.currentMenuVisible}Nav`).removeClass('active');
            this.currentMenuVisible = menuName;
            $(`#${this.currentMenuVisible}Nav`).addClass('active');
        },
        populateEmployeeRanks(employeesInfo) {
            if (employeesInfo !== null) {
                this.employeesInfo = employeesInfo;
                this.setActiveMenu('employeesPage');
            } else {
                alt.emit('closeBusinessMenu');
            }
        },
        showEmployeeInfo(employeeId) {
            var employee = this.employeesInfo.BusinessEmployees.find(e => e.Id == employeeId);
            if (employee == null) {
                alt.emit('showNotification', 3, 'Błąd', 'Wystąpił błąd. Nie znaleziono takiego pracownika.', 7000);
                return;
            }
            this.selectedEmployee = employee;
            this.newRank = this.employeesInfo.BusinessRanks.find(e => e.Id == this.selectedEmployee.RankId);

            this.$modal.show('employee-info-modal', {
                businessRanks: this.employeesInfo.BusinessRanks,
                selectedEmployee: this.selectedEmployee,
                newRank: this.newRank,
            });
        },
        closeEmployeeInfo() {
            this.$modal.hide('employee-info-modal');
            this.newRank = null;
            this.selectedEmployee = null;
        },
        saveEmployeeChanges(selectedEmployee, newRank) {
            this.selectedEmployee = selectedEmployee;
            this.newRank = newRank;
            if (this.selectedEmployee == null || this.businessInfo == null) {
                alt.emit('showNotification', 3, 'Błąd', 'Wystąpił błąd. Otwórz ponownie menu biznesu.', 6000);
                return this.closeEmployeeInfo();
            }

            // No changes
            if (this.newRank.Id === this.selectedEmployee.RankId) return;

            alt.emit('updateEmployeeRank', this.selectedEmployee.Id, this.newRank.Id, this.businessInfo.BusinessId);
            this.closeEmployeeInfo();
        },
        updateEmployeeRank(employeeId, newRankId) {
            console.log(`Changing employee ${employeeId} to new rank id: ${newRankId}`);
            if (!this.employeesInfo.BusinessEmployees) return;

            var employee = this.employeesInfo.BusinessEmployees.find(e => e.Id == employeeId);
            if (employee == null) {
                alt.emit('showNotification', 3, 'Błąd', 'Wystąpił błąd podczas wczytywania zmian.', 6000);
                this.closeEmployeeInfo();
                return;
            }

            this.$set(employee, 'RankId', newRankId);
            this.$set(employee, 'RankName', this.employeesInfo.BusinessRanks.find(r => r.Id == newRankId).RankName);
            console.log('Updated rank. New employee: ' + JSON.stringify(employee));
            this.closeEmployeeInfo();
        },
        openNewEmployeeModal() {
            this.newEmployee = {
                Name: '',
                LastName: '',
            };

            this.$modal.show('add-new-employee-modal', this.newEmployee);
        },
        addNewEmployee(newEmploee) {
            console.log(`New employee coming from event = ${JSON.stringify(newEmploee)}`);
            this.newEmploee = newEmploee;
            if (
                this.newEmployee === null ||
                this.newEmployee.Name.length < 1 ||
                this.newEmployee.LastName.length < 1 ||
                this.businessInfo == null
            ) {
                alt.emit('showNotification', 3, 'Błąd', 'Wystąpił błąd. Podano błędne dane pracownika.', 7000);
                return;
            }

            alt.emit('addNewEmployee', this.newEmployee.Name, this.newEmployee.LastName, this.businessInfo.BusinessId);
            this.newEmployee = null;
            this.$modal.hide('add-new-employee-modal');
        },
        openDeleteEmployeeModal() {
            this.$modal.show('delete-employee-modal', this.getAllEmployees());
        },
        getAllEmployees() {
            let newEmploeeList = [];
            this.employeesInfo.BusinessEmployees.forEach(employee => {
                employee.FullName = employee.Name + ' ' + employee.LastName;
                newEmploeeList.push(employee);
            });
            return newEmploeeList;
        },
        closeDeleteEmployeeModal() {
            this.employeeToDelete = null;
            this.$modal.hide('delete-employee-modal');
        },
        deleteEmployee(employeeToDelete) {
            this.employeeToDelete = employeeToDelete;
            if (!this.employeeToDelete || typeof this.employeeToDelete === 'undefined' || this.businessInfo == null) {
                this.closeDeleteEmployeeModal();
                return;
            }

            alt.emit('deleteEmployee', this.employeeToDelete.Id, this.businessInfo.BusinessId);
            this.closeDeleteEmployeeModal();
        },
        populateBusinessRanksInfo(businessRanksInfo) {
            if (businessRanksInfo !== null) {
                this.businessRanksInfo = businessRanksInfo;
                this.setActiveMenu('rolesPage');
            } else {
                alt.emit('closeBusinessMenu');
            }
        },
        openRankInfo(rankToOpen) {
            console.log(`Opening rank-info-modal`);
            this.$modal.show('rank-info-modal', rankToOpen);
        },
        closeRankInfo() {
            this.selectedRank = null;
            this.$modal.hide('rank-info-modal');
        },
        saveRankChanges(rankToChange) {
            this.selectedRank = rankToChange;
            if (this.selectedRank == null || this.businessInfo == null) {
                alt.emit('showNotification', 3, 'Błąd', 'Wystąpił błąd. Otwórz ponownie menu biznesu.', 6000);
                return;
            }

            alt.emit('updateBusinessRank', this.selectedRank, this.businessInfo.BusinessId);
            this.closeRankInfo();
        },
        betterPermissionDisplay(rolePermission) {
            return rolePermission ? 'Tak' : 'Nie';
        },
        openNewRoleModal() {
            let newRole = {
                RankName: '',
                Permissions: {
                    HaveVehicleKeys: false,
                    HaveBusinessKeys: false,
                    CanOpenBusinessMenu: false,
                    CanOpenBusinessInventory: false,
                    CanInviteNewMembers: false,
                    CanManageRanks: false,
                    CanManageEmployees: false,
                },
            };

            this.$modal.show('add-new-role-modal', newRole);
        },
        closeNewRoleModal() {
            this.newRole = null;
            this.$modal.hide('add-new-role-modal');
        },
        addNewRole(newRole) {
            this.newRole = newRole;
            if (
                this.newRole === null ||
                this.newRole.RankName.length < 3 ||
                this.newRole.RankName.length > 20 ||
                this.newRole.Permissions == null ||
                this.businessInfo == null
            ) {
                alt.emit('showNotification', 3, 'Błąd', 'Wystąpił błąd. Podano błędne dane nowego stanowiska.', 7000);
                return this.closeNewRoleModal();
            }

            alt.emit('addNewRole', this.newRole, this.businessInfo.BusinessId);
            this.closeNewRoleModal();
        },
        openDeleteRoleModal() {
            this.$modal.show('delete-role-modal', this.businessRanksInfo);
        },
        closeDeleteRoleModal() {
            this.rankToDelete = null;
            this.$modal.hide('delete-role-modal');
        },
        deleteRole(rankToDelete) {
            this.rankToDelete = rankToDelete;
            if (this.rankToDelete == null || typeof this.rankToDelete == 'undefined' || this.businessInfo == null) {
                return this.closeDeleteRoleModal();
            }

            alt.emit('deleteRole', this.rankToDelete.RankId, this.businessInfo.BusinessId);
            this.closeDeleteRoleModal();
        },
        showDeleteBusiness() {
            if (this.businessInfo) {
                this.$modal.show('delete-business-modal');
            }
        },
        closeDeleteBusinessModal() {
            this.$modal.hide('delete-business-modal');
        },
        deleteBusiness() {
            if (this.businessInfo) {
                if (typeof this.businessInfo.BusinessId === 'undefined') {
                    alt.emit('showNotification', 3, 'Błąd', 'Wystąpił błąd podczas pobierania ID biznesu.', 7000);
                    return this.closeDeleteBusinessModal();
                }

                alt.emit('deleteBusiness', this.businessInfo.BusinessId);
                this.closeDeleteBusinessModal();
            }
        },
    },
    computed: {
        businessType() {
            return businessTypes[this.businessInfo.Type];
        },
        createdAt() {
            return this.businessInfo.CreatedAt.substr(0, this.businessInfo.CreatedAt.indexOf('T'));
        },
        getAllRanks() {
            return this.businessRanksInfo;
        },
        getBusinessRanks() {
            return this.employeesInfo.BusinessRanks;
        },
    },
    beforeDestroy() {
        EventBus.$off('populateEmployeeRanks', this.populateEmployeeRanks);
        EventBus.$off('populateBusinessRanksInfo', this.populateBusinessRanksInfo);
        EventBus.$off('successfullyUpdatedEmployeeRank', this.updateEmployeeRank);
    },
};

alt.on('populateEmployeeRanks', employeesRanks => {
    EventBus.$emit('populateEmployeeRanks', JSON.parse(employeesRanks));
});

alt.on('populateBusinessRanksInfo', permissionsInfo => {
    EventBus.$emit('populateBusinessRanksInfo', JSON.parse(permissionsInfo));
});

alt.on('successfullyUpdatedEmployeeRank', (employeeId, newRankId) => {
    EventBus.$emit('successfullyUpdatedEmployeeRank', employeeId, newRankId);
});
</script>

<style scoped>
.businessApp {
    width: 60rem;
    height: 45rem;
    position: relative;
    background: #f8f6f6;
    color: rgb(0, 0, 0);
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.5);
}

.businessApp .bg-dark {
    background-color: #000000da !important;
}

.businessApp .navbarText {
    text-align: center;
    word-wrap: break-word;
    font-size: 1rem;
    color: #f8f6f6;
    font-weight: 600;
}

.businessApp .navbarText:hover {
    color: #f8f6f6;
}

.businessAppContainer {
    height: 95%;
    overflow-y: auto;
}

.businessApp .content-box {
    padding: 10px;
    background-color: #424242;
    overflow: hidden;
}

.businessApp .box-hover:hover {
    cursor: pointer;
    background-color: #333333;
    transition: background-color 0.25s ease;
}

.businessApp .form-check {
    padding-left: 0 !important;
}

.businessApp p {
    font-family: 'Roboto';
}

.businessApp .delete-box {
    background-color: #b71c1c;
}

.businessApp .delete-box p {
    color: #e0e0e0;
}

.businessApp .delete-box:hover {
    cursor: pointer;
    background-color: #8b1313;
    transition: background-color 0.3s ease;
}

.content-box .business-info {
    float: left;
    color: rgb(235, 232, 232);
    margin-left: 10px;
    width: auto;
}

.content-box .info {
    float: left;
    color: #fff;
    margin-left: 10px;
    width: auto;
}

.content-box .info h3 {
    margin: 5px 0 5px;
    display: inline-block;
}

.content-box .info p {
    font-size: 0.8rem;
    color: rgb(190, 190, 190);
    margin: 0 0 10px;
}

.content-box .info span {
    padding-left: 2px;
}

.businessApp .table-hover tr:hover {
    cursor: pointer;
    background-color: rgba(29, 29, 29, 0.267);
    transition: background-color 0.25s ease;
}

/* Navbar */
.navbar-brand {
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    font-size: 1rem;
    background-color: rgba(0, 0, 0, 0.25);
    box-shadow: inset -1px 0 0 rgba(0, 0, 0, 0.25);
}

.navbar .form-control {
    padding: 0.75rem 1rem;
    border-width: 0;
    border-radius: 0;
}

.form-control-dark {
    color: #fff;
    background-color: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.1);
}

.form-control-dark:focus {
    border-color: transparent;
    box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.25);
}
</style>
