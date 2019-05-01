const businessTypes = [
    "Brak", "Mechanik", "Restauracja", "Pub"
];

var exampleJson = {
    "BusinessId": 5,
    "BusinessName": "NowaRestauracja",
    "OwnerId": 3,
    "Money": 250,
    "MaxMembersCount": 20,
    "Transactions": 0,
    "CreatedAt": "2019-04-23T17:04:11.963349",
    "Type": 1,
    "EmployeesCount": 1,
    "Ranks": 2,
    "MaxRanksCount": 5,
}

var exampleJsonEmployess = {
    "BusinessRanks": [
        { "Id": 5, "IsDefaultRank": false, "IsOwnerRank": true, "RankName": "Właściciel" },
        { "Id": 6, "IsDefaultRank": true, "IsOwnerRank": false, "RankName": "Pracownik" }
    ],
    "BusinessEmployees": [
        { "Id": 3, "Name": "2", "LastName": "2", "Age": 10, "Gender": 0, "RankId": 5, "RankName": "W�a�ciciel" }
    ]
}


var exampleRankInfo = [
    {
        "Id": 3,
        "RankId": 5,
        "RankName": "Właściciel",
        "HaveVehicleKeys": true, "HaveBusinessKeys": true, "CanOpenBusinessMenu": true, "CanOpenBusinessInventory": true, "CanInviteNewMembers": true, "CanManageRanks": true, "CanManageEmployees": true
    },
    {
        "Id": 4,
        "RankId": 6,
        "RankName": "Pracownik",
        "HaveVehicleKeys": false, "HaveBusinessKeys": false, "CanOpenBusinessMenu": true, "CanOpenBusinessInventory": false, "CanInviteNewMembers": false, "CanManageRanks": true, "CanManageEmployees": true
    }
];

Vue.component('v-select', VueSelect.VueSelect)

var businessApp = new Vue({
    el: "#businessApp",
    data: {
        businessMenuVisible: false,
        businessInfo: null,
        employeesInfo: null,
        businessRanksInfo: null,
        currentMenuVisible: "mainPage",
        selectedEmployee: null,
        selectedRank: null,
        newRank: 0,
        newEmployee: null,
        newRole: null,
        showDeleteBusinessModal: false,
        deleteRoleModalVisible: false,
        rankToDelete: null,
        deleteEmployeeModalVisible: false,
        employeeToDelete: null,
    },
    methods: {
        showBusinessMenu: function (businessInfo) {
            if (businessInfo !== null) {
                this.businessInfo = JSON.parse(businessInfo);
                this.businessMenuVisible = true;
                this.currentMenuVisible = "mainPage";
            }
            else {
                alt.emit('closeBusinessMenu');
            }
        },
        showBusinessMenuTest: function () {
            this.businessInfo = exampleJson;
            this.businessMenuVisible = true;
        },
        closeBusinessMenu: function () {
            this.businessMenuVisible = false;
            this.businessInfo = null;
            this.selectedEmployee = null;
            this.selectedRank = null;
            this.businessRanksInfo = null;
            alt.emit('closeBusinessMenu');
        },
        showPage: function (pageName) {
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
        setActiveMenu: function (menuName) {
            $(`#${this.currentMenuVisible}Nav`).removeClass('active');
            this.currentMenuVisible = menuName;
            $(`#${this.currentMenuVisible}Nav`).addClass('active');
        },
        populateEmployeeRanks: function (employeesInfo) {
            if (employeesInfo !== null) {
                this.employeesInfo = JSON.parse(employeesInfo);
                this.setActiveMenu('employeesPage');

                console.log(`Opened business employees page with data: ${JSON.stringify(this.employeesInfo)}`);
            }
            else {
                alt.emit('closeBusinessMenu');
            }
        },
        populateEmployeeRanksTest: function () {
            this.businessInfo = exampleJson;
            this.employeesInfo = exampleJsonEmployess;
            this.businessMenuVisible = true;
            this.currentMenuVisible = 'employeesPage';

            console.log(`Opened business employees page with data: ${JSON.stringify(this.employeesInfo)}`);
        },
        showEmployeeInfo: function (employeeId) {
            var employee = this.employeesInfo.BusinessEmployees.find(e => e.Id == employeeId);
            if (employee == null) {
                alt.emit('showNotification', 3, "Błąd", 'Wystąpił błąd. Nie znaleziono takiego pracownika.', 7000);
                return;
            }
            this.selectedEmployee = employee;
            this.newRank = this.employeesInfo.BusinessRanks.find(e => e.Id == this.selectedEmployee.RankId);
            console.log(JSON.stringify(this.selectedEmployee));
            setTimeout(() => {
                $('#employeeInfoModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            }, 0);
        },
        closeEmployeeInfo: function () {
            this.newRank = null;
            this.selectedEmployee = null;
            $('#employeeInfoModal').modal('hide');
        },
        saveEmployeeChanges: function () {
            if (this.newRank.Id === this.selectedEmployee.RankId) return;

            // Call server to make a change
            if (this.selectedEmployee == null || this.businessInfo == null) {
                alt.emit('showNotification', 3, "Błąd", 'Wystąpił błąd. Otwórz ponownie menu biznesu.', 6000);
                return;
            }

            alt.emit('updateEmployeeRank', this.selectedEmployee.Id, this.newRank.Id, this.businessInfo.BusinessId);
            this.closeEmployeeInfo();
        },
        updateEmployeeRank: function (employeeId, newRankId) {
            console.log(`Changing employee ${employeeId} to new rank id: ${newRankId}`);
            if (!this.employeesInfo.BusinessEmployees) return;

            var employee = this.employeesInfo.BusinessEmployees.find(e => e.Id == employeeId);
            if (employee == null) {
                alt.emit('showNotification', 3, "Błąd", 'Wystąpił błąd podczas wczytywania zmian.', 6000);
                this.closeEmployeeInfo();
                return;
            }

            Vue.set(employee, 'RankId', newRankId);
            Vue.set(employee, 'RankName', this.employeesInfo.BusinessRanks.find(r => r.Id == newRankId).RankName);
            console.log('Updated rank. New employee: ' + JSON.stringify(employee));
            this.closeEmployeeInfo();
        },
        openNewEmployeeModal: function () {
            this.newEmployee = {
                Name: "",
                LastName: ""
            };

            setTimeout(() => {
                $('#addEmployeeModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            }, 0);
        },
        addNewEmployee: function () {
            if (this.newEmployee === null || this.newEmployee.Name.length < 1 || this.newEmployee.LastName.length < 1 || this.businessInfo == null) {
                alt.emit('showNotification', 3, "Błąd", 'Wystąpił błąd. Podano błędne dane pracownika.', 7000);
                return;
            }

            alt.emit('addNewEmployee', this.newEmployee.Name, this.newEmployee.LastName, this.businessInfo.BusinessId);
            this.closeNewEmployeeModal();
        },
        closeNewEmployeeModal: function () {
            this.newEmployee = null;
            $('#addEmployeeModal').modal('hide');
        },
        openDeleteEmployeeModal: function () {
            this.deleteEmployeeModalVisible = true;

            setTimeout(() => {
                $('#deleteEmployeeModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            }, 0);
        },
        closeDeleteEmployeeModal: function () {
            this.deleteEmployeeModalVisible = false;
            this.employeeToDelete = null;
            $('#deleteEmployeeModal').modal('hide');
        },
        deleteEmployee: function () {
            if (!this.employeeToDelete || typeof this.employeeToDelete === 'undefined' || this.businessInfo == null) {
                this.closeDeleteEmployeeModal();
                return;
            }

            alt.emit('deleteEmployee', this.employeeToDelete.Id, this.businessInfo.BusinessId);
            this.closeDeleteEmployeeModal();
        },
        populateBusinessRanksInfo: function (businessRanksInfo) {
            if (businessRanksInfo !== null) {
                this.businessRanksInfo = JSON.parse(businessRanksInfo);
                this.setActiveMenu('rolesPage');
            }
            else {
                alt.emit('closeBusinessMenu');
            }
        },
        populateBusinessRanksTest: function () {
            this.businessInfo = exampleJson;
            this.employeesInfo = exampleJsonEmployess;
            this.businessRanksInfo = exampleRankInfo;
            this.businessMenuVisible = true;
            this.currentMenuVisible = 'rolesPage';
        },
        openRankInfo: function (rankToOpen) {
            this.selectedRank = rankToOpen;
            setTimeout(() => {
                $('#businessRankInfoModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            }, 0);
        },
        closeRankInfo: function () {
            this.selectedRank = null;
            $('#businessRankInfoModal').modal('hide');
        },
        saveRankChanges: function () {
            if (this.selectedRank == null || this.businessInfo == null) {
                alt.emit('showNotification', 3, "Błąd", 'Wystąpił błąd. Otwórz ponownie menu biznesu.', 6000);
                return;
            }

            alt.emit('updateBusinessRank', this.selectedRank, this.businessInfo.BusinessId);
            this.closeRankInfo();
        },
        betterPermissionDisplay: function (rolePermission) {
            return rolePermission ? 'Tak' : 'Nie';
        },
        openNewRoleModal: function () {
            this.newRole = {
                RankName: "",
                Permissions: {
                    HaveVehicleKeys: false,
                    HaveBusinessKeys: false,
                    CanOpenBusinessMenu: false,
                    CanOpenBusinessInventory: false,
                    CanInviteNewMembers: false,
                    CanManageRanks: false,
                    CanManageEmployees: false
                }
            };

            setTimeout(() => {
                $('#addRoleModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            }, 0);
        },
        closeNewRoleModal: function () {
            this.newRole = null;
            $('#addRoleModal').modal('hide');
        },
        addNewRole: function () {
            if (this.newRole === null || this.newRole.RankName.length < 3 || this.newRole.Permissions == null || this.businessInfo == null) {
                alt.emit('showNotification', 3, "Błąd", 'Wystąpił błąd. Podano błędne dane nowego stanowiska.', 7000);
                this.closeNewRoleModal();
                return;
            }

            alt.emit('addNewRole', this.newRole, this.businessInfo.BusinessId);
            this.closeNewRoleModal();
        },
        openDeleteRoleModal: function () {
            this.deleteRoleModalVisible = true;
            setTimeout(() => {
                $('#deleteRoleModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            }, 0);
        },
        closeDeleteRoleModal: function () {
            this.deleteRoleModalVisible = false;
            this.rankToDelete = null;
            $('#deleteRoleModal').modal('hide');
        },
        deleteRole: function () {
            if (this.rankToDelete == null || typeof this.rankToDelete == 'undefined' || this.businessInfo == null) {
                this.closeDeleteRoleModal();
                return;
            }

            alt.emit('deleteRole', this.rankToDelete.RankId, this.businessInfo.BusinessId);
            this.closeDeleteRoleModal();
        },
        showDeleteBusiness: function () {
            if (this.businessInfo) {
                this.showDeleteBusinessModal = true;
                setTimeout(() => {
                    $('#deletBusinessModal').modal({
                        backdrop: 'static',
                        keyboard: false
                    });
                }, 0);
            }
        },
        closeDeleteBusinessModal: function () {
            this.showDeleteBusinessModal = false;
            $('#deletBusinessModal').modal('hide');
        },
        deleteBusiness: function () {
            if (this.businessInfo) {
                if (typeof this.businessInfo.BusinessId === 'undefined') {
                    alt.emit('showNotification', 3, "Błąd", 'Wystąpił błąd podczas pobierania ID biznesu.', 7000);
                    this.closeDeleteBusinessModal();
                    return;
                }

                alt.emit('deleteBusiness', this.businessInfo.BusinessId);
                this.closeDeleteBusinessModal();
            }
        }
    },
    computed: {
        businessType: function () {
            return businessTypes[this.businessInfo.Type];
        },
        createdAt: function () {
            return this.businessInfo.CreatedAt.substr(0, this.businessInfo.CreatedAt.indexOf('T'));
        },
        getBusinessRanks: function () {
            return this.employeesInfo.BusinessRanks;
        },
        getAllRanks: function () {
            return this.businessRanksInfo;
        },
        getAllEmployees: function () {
            let newEmploeeList = [];
            this.employeesInfo.BusinessEmployees.forEach(employee => {
                employee.FullName = employee.Name + ' ' + employee.LastName;
                newEmploeeList.push(employee);
            });
            return newEmploeeList;
        },
    }
});

alt.on('openBusinessMenu', (businessInfo) => {
    console.log('Opening business menu');
    businessApp.showBusinessMenu(businessInfo);
});

alt.on('populateEmployeeRanks', (employeesRanks) => {
    businessApp.populateEmployeeRanks(employeesRanks);
});

alt.on('populateBusinessRanksInfo', (businessRanksInfo) => {
    businessApp.populateBusinessRanksInfo(businessRanksInfo);
});

alt.on('successfullyUpdatedEmployeeRank', (employeeId, newRankId) => {
    businessApp.updateEmployeeRank(employeeId, newRankId);
});

alt.on('successfullyUpdatedRankPermissions', () => {
    businessApp.closeRankInfo();
});
