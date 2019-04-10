var bankChartComponent = Vue.extend({
    template: '<canvas id="canvas" width="500" height="500"></canvas>',
    data: function () {
        return {
            myChart: null,
            chartLabels: ["13-02-2019"],
            chartData: [0],
        }
    },
    methods: {
        draw: function (ctx) {
            this.myChart = new Chart(ctx, {
                type: "line",
                data: {
                    labels: this.chartLabels,
                    datasets: [{
                        label: "Stan konta",
                        data: this.chartData,
                        backgroundColor: [
                            "rgba(255, 99, 132, 0.2)",
                        ],
                        borderColor: [
                            "rgba(255,99,132,1)",
                        ],
                        borderWidth: 1,
                    }]
                },
                options: {
                    responsive: true,
                    lineTension: 0,
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                padding: 25,
                            }
                        }]
                    }
                }
            });
        },
        updateChart: function (newLabels, newData) {
            console.log('Changing labels: ' + newLabels);
            this.chartData = newData;
            this.chartLabels = newLabels;
            this.myChart.data.labels = this.chartLabels;
            this.chartData.forEach((element) => {
                this.myChart.data.datasets.forEach((dataset) => {
                    dataset.data.pop();
                });
            });

            this.chartData.forEach((element) => {
                this.myChart.data.datasets.forEach((dataset) => {
                    dataset.data.push(element);
                });
            });

            this.myChart.update();
        },
    },
    mounted: function () {
        var c = document.getElementById("canvas");
        var ctx = c.getContext("2d");
        ctx.translate(0.5, 0.5);
        ctx.imageSmoothingEnabled = true;
        this.draw(ctx);
    },
});

var bankMenu = new Vue({
    el: '#bankApp',
    components: {
        'bank-chart': bankChartComponent
    },
    data: {
        bankMenuVisible: false,
        currentMenuShown: '',

        showDepositDiv: false,
        showWithdrawDiv: false,
        showTransferDiv: false,
        showHistoryDiv: false,

        moneyToDeposit: null,
        moneyToWithdraw: null,
        moneyToTransfer: null,
        transferReceiver: null,
        characterData: {
            Name: "Imie Nazwisko",
            AccountNumber: "#888888",
            Money: 100,
        },
        transactionHistory: [{
            "TransactionDate": "19-02-2019 19:37",
            "Source": "characters/33-A",
            "Receiver": "characters/1-A",
            "Type": 5,
            "Amount": 50.0
        },
        {
            "TransactionDate": "19-02-2019 19:37",
            "Source": "characters/33-A",
            "Receiver": "characters/1-A",
            "Type": 4,
            "Amount": 50.0
        },
        {
            "TransactionDate": "18-02-2019 19:37",
            "Source": "characters/33-A",
            "Receiver": "BankAccount",
            "Type": 4,
            "Amount": 200.0
        },
        {
            "TransactionDate": "17-02-2019 19:11",
            "Source": "characters/33-A",
            "Receiver": "BankAccount",
            "Type": 3,
            "Amount": 12.0
        }],
        transactionChartData: [],
        authTimer: null,
        isAuthed: false,
    },
    computed: {
        computedTransactionList() {
            var transactionHistory = [];
            this.transactionHistory.forEach(transaction => {
                var newObject = {};
                newObject.Date = transaction.TransactionDate;
                newObject.Amount = transaction.Amount;
                newObject.Text = this.getTransactionText(transaction, newObject);
                transactionHistory.push(newObject);
            });
            transactionHistory.reverse();
            return transactionHistory;
        },
    },
    methods: {
        applyChartData: function () {
            this.generateChartData();
            console.log('Transactions: ' + JSON.stringify(this.transactionChartData));

            var currentDate = this.getCurrentDate();
            var today = null;
            for (var key in this.transactionChartData) {
                if (!this.transactionChartData.hasOwnProperty(key)) continue;

                if (key == currentDate) {
                    today = key;
                    break;
                }
            }

            if (today == null) {
                var newObject = {};
                newObject[currentDate] = {};
                newObject[currentDate].Amount = this.characterData.Money;
                this.transactionChartData = Object.assign(newObject, this.transactionChartData);
            }

            var labels = [];
            var data = [];
            var lastMoney = 0;
            Object.entries(this.transactionChartData).forEach(([key, val]) => {
                if (key == currentDate) {
                    labels.push(key);
                    lastMoney = this.characterData.Money;
                    data.push(lastMoney);
                } else {
                    labels.push(key);
                    lastMoney += val.Amount;
                    data.push(lastMoney);
                }

                // console.log(key);          // the name of the current key.
                // console.log(val.Amount);          // the value of the current key.
            });
            // console.log('Transactions: ' + JSON.stringify(this.transactionChartData));
            this.$refs.foo.updateChart(labels.reverse(), data.reverse());
        },
        showBankMenu: function (characterJson) {
            try {
                this.characterData = JSON.parse(characterJson);
                console.log('Current character data = ' + JSON.stringify(this.characterData));
                this.bankMenuVisible = true;
                // this.currentMenuShown = 'mainScreen';
            } catch (error) {
                console.log(error);
                this.closeBankMenu();
            }
        },
        // showBankMenu: function () {
        //     this.bankMenuVisible = true;
        // },
        generateChartData: function () {
            this.transactionChartData = this.transactionHistory.reduce(function (transactions, currentTransaction) {
                const [date] = currentTransaction.Date.split(/\s/u);

                if (transactions.hasOwnProperty(date)) {
                    transactions[date].Amount += bankMenu.getTransactionAmount(currentTransaction);
                } else {
                    transactions[date] = {};
                    transactions[date].Amount = bankMenu.getTransactionAmount(currentTransaction);
                }

                // console.log("Transaction iteration: " + JSON.stringify(transactions));
                return transactions;
            }, {});
        },
        changeBankMoney: function (amount) {
            console.log('Updated bank money to: ' + amount);
            this.characterData.Money = amount;
        },
        getCurrentDate: function () {
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1;
            var yyyy = today.getFullYear();

            if (dd < 10) {
                dd = '0' + dd;
            }

            if (mm < 10) {
                mm = '0' + mm;
            }

            today = dd + '-' + mm + '-' + yyyy;
            return today;
        },
        getTransactionAmount: function (transaction) {
            switch (transaction.Type) {
                case 1:
                    return -transaction.Amount;
                case 2:
                    return +transaction.Amount;
                case 3:
                    return -transaction.Amount;
                case 4:
                    return +transaction.Amount;
                case 5:
                    if (transaction.Source == this.characterData.Name) {
                        return -transaction.Amount;
                    } else {
                        return +transaction.Amount;
                    }
                default:
                    return +transaction.Amount;
            }
        },
        getTransactionText: function (transaction, transType) {
            switch (transaction.Type) {
                case 1:
                    transType.Positive = false;
                    return "Kupno pojazdu";
                case 2:
                    transType.Positive = true;
                    return "Sprzedaż pojazdu";
                case 3:
                    transType.Positive = false;
                    return "Wypłata z banku";
                case 4:
                    transType.Positive = true;
                    return "Wpłata do banku";
                case 5:
                    if (transaction.Source == this.characterData.Name) {
                        transType.Positive = false;
                        return "Przelew do " + transaction.Receiver;
                    } else {
                        transType.Positive = true;
                        return "Przelew od " + transaction.Source;
                    }
                default:
                    return "Brak";
            }
        },
        closeBankMenu: function () {
            alt.emit('closeBankMenu');
            $('.login-screen').removeClass("success");
            $('.fingerprint').removeClass("active");
            this.currentMenuShown = '';
            this.isAuthed = false;
            this.bankMenuVisible = false;
            // this.characterData = {};
            this.transactionHistory = [];
        },
        openDepositDiv: function () {
            this.currentMenuShown = 'depositScreen';
        },
        depositMoney: function () {
            var money = parseInt(this.moneyToDeposit, 10);
            this.moneyToDeposit = null;
            if (money > 0) {
                alt.emit('depositMoney', money);
            } else {
                alt.emit('showNotification', 3, 'Podaj wartość większą od 0', 5000);
            }
        },
        closeDepositDiv: function () {
            this.currentMenuShown = 'mainScreen';
        },
        openWithdrawDiv: function () {
            this.currentMenuShown = 'withdrawScreen';
        },
        withdrawMoney: function () {
            var money = parseInt(this.moneyToWithdraw, 10);
            this.moneyToWithdraw = null;
            if (money > 0) {
                alt.emit('withdrawMoney', money);
            } else {
                alt.emit('showNotification', 3, 'Podaj wartość większą od 0', 5000);
            }
        },
        closeWithdrawDiv: function () {
            this.currentMenuShown = 'mainScreen';
        },
        openTransferDiv: function () {
            this.currentMenuShown = 'transferScreen';
        },
        transferMoney: function () {
            var money = parseInt(this.moneyToTransfer, 10);
            this.moneyToTransfer = null;
            var receiver = parseInt(this.transferReceiver);
            this.transferReceiver = 0;
            if (this.transferReceiver === this.characterData.AccountNumber) {
                alt.emit('showNotification', 3, 'Nie możesz wysłać pieniędzy sam do siebie.', 5000);
                return;
            }
            else if (money <= 0) {
                alt.emit('showNotification', 3, 'Podaj wartość większą od 0.', 5000);
                return;
            }
            else if (!receiver || receiver < 100000 || receiver > 999999 || typeof receiver !== 'number') { // 100_000 the lowest, 999_999 the highest possible numbers
                alt.emit('showNotification', 3, 'Podaj dobry number konta odbiorcy.', 5000);
                return;
            }

            alt.emit('tryTransferMoney', money, receiver);
        },
        closeTransferDiv: function () {
            this.currentMenuShown = 'mainScreen';
        },
        openHistoryDiv: function () {
            alt.emit('getTransferHistoryInfo');
        },
        populateTransactionHistory: function (transactionJson) {
            console.log('Transaction history:' + transactionJson);
            if (transactionJson) {
                this.transactionHistory = JSON.parse(transactionJson);
                this.applyChartData();
                this.currentMenuShown = 'historyScreen';
            }
            else {
                alt.emit('showNotification', 3, "Nie masz jeszcze żadnych transkacji.", 5000);
            }
        },
        closeHistoryDiv: function () {
            this.currentMenuShown = 'mainScreen';
        },
        mouseDown: function () {
            if (this.isAuthed) return;
            $('.fingerprint').addClass("active");
            this.authTimer = setTimeout(this.onAuthSuccess, 1650);
        },
        mouseUp: function () {
            if (this.isAuthed) return;
            $('.fingerprint').removeClass("active");
            clearTimeout(this.authTimer);
        },
        onAuthSuccess: function () {
            $('.login-screen').addClass("success");
            this.currentMenuShown = 'mainScreen';
            this.isAuthed = true;
        },
    }
})

alt.on('openBankMenuView', (bankAccountInformations) => {
    bankMenu.showBankMenu(bankAccountInformations);
});

alt.on('updateBankMoney', (money) => {
    bankMenu.changeBankMoney(money);
});

alt.on('openTransactionHistory', (transactionHistory) => {
    console.log('Transaction history is of type: ' + typeof transactionHistory);
    bankMenu.populateTransactionHistory(transactionHistory);
});