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

var businessApp = new Vue({
    el: "#businessApp",
    data: {
        businessMenuVisible: false,
        businessInfo: null,
        employeesInfo: null,
        currentMenuVisible: "mainPage",
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
                this.businessMenuVisible = 'employeesPage';

                console.log(`Opened business employees page with data: ${JSON.stringify(this.employeesInfo)}`);
            }
            else {
                alt.emit('closeBusinessMenu');
            }
        }
    },
    computed: {
        businessType: function () {
            return businessTypes[this.businessInfo.Type];
        },
        createdAt: function () {
            return this.businessInfo.CreatedAt.substr(0, this.businessInfo.CreatedAt.indexOf('T'));
        }
    }
});

alt.on('openBusinessMenu', (businessInfo) => {
    console.log('Opening business menu');
    businessApp.showBusinessMenu(businessInfo);
});

alt.on('populateBusinessEmployees', (employeesInfo) => {
    businessApp.populateBusinessEmployees(employeesInfo);
});