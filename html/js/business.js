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
    "Employees": [
        {
            "Id": 3,
            "Name": "2",
            "LastName": "2",
            "Gender": 0,
            "RankId": 5,
            "RankName": "Właściciel"
        }
    ]
}

var exampleJsonEmployess = {
    "BusinessRanks": [
        { "Id": 5, "IsDefaultRank": false, "RankName": "W�a�ciciel" },
        { "Id": 6, "IsDefaultRank": true, "RankName": "Pracownik" }
    ], "BusinessEmployees": [
        { "Id": 3, "Name": "2", "LastName": "2", "Age": 10, "Gender": 0, "RankId": 5, "RankName": "W�a�ciciel" }
    ]
}

Vue.component('v-select', VueSelect.VueSelect)

var businessApp = new Vue({
    el: "#businessApp",
    data: {
        businessMenuVisible: false,
        businessInfo: null,
        employeesInfo: null,
        currentMenuVisible: "mainPage",
        selectedEmployee: null,
        newRank: 0,
        newEmployee: null,
    },
    methods: {
        test: function (value) {
            console.log('Eldo');
        },
        showBusinessMenu: function (businessInfo) {
            if (businessInfo !== null) {
                this.businessInfo = JSON.parse(businessInfo);
                this.businessMenuVisible = true;
                this.currentMenuVisible = "mainPage";

                console.log(`Business info: ${JSON.stringify(this.businessInfo)}`);
            }
            else {
                alt.emit('closeBusinessMenu');
            }
        },
        showBusinessMenuTest: function () {
            this.businessInfo = exampleJson;
            this.businessMenuVisible = true;

            console.log(`Business info: ${JSON.stringify(this.businessInfo)}`);
        },
        closeBusinessMenu: function () {
            this.businessMenuVisible = false;
            this.businessInfo = null;
            alt.emit('closeBusinessMenu');
        },
        showPage: function (pageName) {
            switch (pageName) {
                case 'employeesPage':
                    alt.emit('getBusinessesEmployees', this.businessInfo.BusinessId);
                    break;

                default:
                    this.currentMenuVisible = pageName;
                    break;
            }
            console.log(pageName);
        },
        populateBusinessEmployees: function (employeesInfo) {
            if (employeesInfo !== null) {
                this.employeesInfo = JSON.parse(employeesInfo);
                this.currentMenuVisible = 'employeesPage';

                console.log(`Opened business employees page with data: ${JSON.stringify(this.employeesInfo)}`);
            }
            else {
                alt.emit('closeBusinessMenu');
            }
        },
        populateBusinessEmployeesTest: function () {
            this.businessInfo = exampleJson;
            this.employeesInfo = exampleJsonEmployess;
            this.businessMenuVisible = true;
            this.currentMenuVisible = 'employeesPage';

            console.log(`Opened business employees page with data: ${JSON.stringify(this.employeesInfo)}`);
        },
        showEmployeeInfo: function (employeeId) {
            var employee = this.businessInfo.Employees.find(e => e.Id == employeeId);
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

            console.log(this.newRank.Id);
            alt.emit('updateEmployeeRank', this.selectedEmployee.Id, this.newRank.Id, this.businessInfo.BusinessId);
        },
        updateEmployeeRank: function (employeeId, newRankId) {
            console.log(`Changing employee ${employeeId} to new rank id: ${newRankId}`);
            if (!this.employeesInfo.BusinessEmployees) return;

            // var employee = this.employeesInfo.BusinessEmployees.find(e => e.Id == employeeId);
            // if (employee == null) {
            //     console.log('Employee is null');
            //     return;
            // }
            if (this.employeesInfo.BusinessEmployees.find(e => e.Id == employeeId) != null) {
                this.employeesInfo.BusinessEmployees.find(e => e.Id == employeeId).RankId = newRankId;
                console.log('Updated rank. New employee: ' + JSON.stringify(this.employeesInfo.BusinessEmployees.find(e => e.Id == employeeId)));
            }
            // employee.RankId = newRankId;
            // console.log('New employee rank: ' + employee.RankId);
            this.closeEmployeeInfo();
        },
        openNewEmployeeModal: function () {
            this.newEmployee = {};
            this.newEmployee.Name = "";
            this.newEmployee.LastName = "";
            setTimeout(() => {
                $('#addEmployeeModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            }, 0);
            // Show modal with option to add new employee
            // Adding by Name and LastName
        },
        addNewEmployee: function () {
            if (this.newEmployee === null || this.newEmployee.Name.length < 1 || this.newEmployee.LastName.length < 1 || this.businessInfo == null) {
                alt.emit('showNotification', 3, "Błąd", 'Wystąpił błąd. Podano błędne dane pracownika.', 7000);
                return;
            }

            alt.emit('addNewEmployee', this.newEmployee.Name, this.newEmployee.LastName, this.businessInfo.BusinessId);
        },
        closeNewEmployeeModal: function () {
            this.newEmployee = null;
            $('#addEmployeeModal').modal('hide');
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
    }
});

alt.on('openBusinessMenu', (businessInfo) => {
    console.log('Opening business menu');
    businessApp.showBusinessMenu(businessInfo);
});

alt.on('populateBusinessEmployees', (employeesInfo) => {
    businessApp.populateBusinessEmployees(employeesInfo);
});

alt.on('successfullyUpdatedEmployeeRank', (employeeId, newRankId) => {
    businessApp.updateEmployeeRank(employeeId, newRankId);
});

alt.on('successfullyInvitedNewEmployee', () => {
    businessApp.closeNewEmployeeModal();
});