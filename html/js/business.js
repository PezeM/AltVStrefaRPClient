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

var businessApp = new Vue({
    el: "#businessApp",
    data: {
        businessMenuVisible: false,
        businessInfo: null,
        employeesInfo: null,
        currentMenuVisible: "mainPage",
        selectedEmployee: null,
        newRankId: null,
    },
    methods: {
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
                alt.emit('showNotification', 3, 'Wystąpił błąd. Nie znaleziono takiego pracownika.', 7000);
                return;
            }
            this.selectedEmployee = employee;
            this.newRankId = this.selectedEmployee.RankId;
            console.log(JSON.stringify(this.selectedEmployee));
            setTimeout(() => {
                $('#employeeInfoModal').modal({
                    backdrop: 'static',
                    keyboard: false
                });
            }, 0);
        },
        closeEmployeeInfo: function () {
            this.newRankId = null;
            this.selectedEmployee = null;
            $('#employeeInfoModal').modal('hide');
        },
        saveEmployeeChanges: function () {
            if (this.newRankId === this.selectedEmployee.RankId) return;

            // Call server to make a change
            if (this.selectedEmployee == null || this.businessInfo == null) {
                alt.emit('showNotification', 3, 'Wystąpił błąd. Otwórz ponownie menu biznesu.', 6000);
                return;
            }

            alt.emit('updateEmployeeRank', this.selectedEmployee.Id, this.newRankId, this.businessInfo.BusinessId);
            return;
        },
        addNewEmployee: function () {
            // Show modal with option to add new employee
            // Adding by Name and LastName
        },
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