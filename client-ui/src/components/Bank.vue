<template>
  <div class="bankApp">
    <div class="bankWindow" @mousedown="mouseDown" @mouseup="mouseUp">
      <header class="bankWindow-header">
        <div class="main-title">
          <img src="@/assets/images/icons/bank.png" class="icon">
          <h5 class="main-title-text">Bank</h5>
        </div>

        <div class="name-indicator">
          <h6 class="name-text">{{ characterData.Name }}</h6>
        </div>
      </header>

      <div class="bankWindow-content">
        <div class="login-screen">
          <h5 class="login-text">Przytrzymaj aby potwierdzić tożsamość</h5>
          <svg
            class="fingerprint"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-1.5 -1.5 136.63 136.56"
            width="136.63"
            height="136.56"
          >
            <path
              class="original"
              d="M74.79 8.76C34.79 5.41 8.15 33.6 8.2 67.06c.02 9.4 4.71 18.2-3.08 26.3M95.66 6.84C64.75-6.62 35.16-.37 12.83 27.07m92.5-14.8c18.89 14.55 28.33 31.7 28.3 55.56M7.33 36.48C-.21 51.34-1.78 65.35 1.96 82.91m15.46-24.84c11.03-56.46 92.3-55.76 99.67 4.91M49 29.02c16.4-7.37 31.33-5.39 44.7 5.88m-9.5-23.96c34.23 11.28 46.91 41.4 41.55 86.97M19.31 114.08c5.28-4.5 10.26-10.33 12.77-17.5m-5.93 22.53c15.22-12.49 18.45-31.24 16.52-44.59-5.3-27.22 16.68-33.82 26.82-32.75m-60.06 59c13.42-12.83 7.13-24.08 7.23-32.41m-2.3 39.33C42.6 79.8 7.64 65.8 40.34 34.52m.44 93.96a60.94 60.94 0 0 0 14.6-22.67M33.32 124.1c13.22-12.7 20.85-31.39 17.7-50.9m18.23 60.37c7.88-12.08 13-25.79 15.32-41.2m.55-9.96c2.77-42.91-32.4-36.83-34.59-18.61m63.56 50.8c3.44-14.48 5.28-28.43 4.18-41.01m-27.51 55.7c3.05-6.22 6.01-13.64 7.48-20.15m3.93 14.49c11.26-26.47 9.82-68.08-1.45-81.57m-51.14 89.23c15.1-16.79 21.81-39.44 17.4-64.39m-8.1 66.06c21.14-28.19 18.43-54.84 16.26-66.68-2.17-11.83-16.63-9.3-16.27 1.18.37 10.48 2.53 14.1-.36 27.83m21.1 37.03c20.46-36.82 16.97-79.29-.42-87.57m20.9 55.5c15.34-83.72-60.42-79.88-66.48-38.07-1.34 12.78 2.22 14.56.76 25.71"
              fill="none"
              stroke-width="3"
              stroke="#ddd"
              stroke-linecap="round"
              stroke-miterlimit="3"
            ></path>
            <linearGradient id="a" x1="49.4%" y1="-3.33%" x2="49.87%" y2="102.85%">
              <stop offset="0%" stop-color="#b279f7"></stop>
              <stop offset="90%" stop-color="#4b52db"></stop>
            </linearGradient>
            <path
              class="clone"
              d="M74.79 8.76C34.79 5.41 8.15 33.6 8.2 67.06c.02 9.4 4.71 18.2-3.08 26.3M95.66 6.84C64.75-6.62 35.16-.37 12.83 27.07m92.5-14.8c18.89 14.55 28.33 31.7 28.3 55.56M7.33 36.48C-.21 51.34-1.78 65.35 1.96 82.91m15.46-24.84c11.03-56.46 92.3-55.76 99.67 4.91M49 29.02c16.4-7.37 31.33-5.39 44.7 5.88m-9.5-23.96c34.23 11.28 46.91 41.4 41.55 86.97M19.31 114.08c5.28-4.5 10.26-10.33 12.77-17.5m-5.93 22.53c15.22-12.49 18.45-31.24 16.52-44.59-5.3-27.22 16.68-33.82 26.82-32.75m-60.06 59c13.42-12.83 7.13-24.08 7.23-32.41m-2.3 39.33C42.6 79.8 7.64 65.8 40.34 34.52m.44 93.96a60.94 60.94 0 0 0 14.6-22.67M33.32 124.1c13.22-12.7 20.85-31.39 17.7-50.9m18.23 60.37c7.88-12.08 13-25.79 15.32-41.2m.55-9.96c2.77-42.91-32.4-36.83-34.59-18.61m63.56 50.8c3.44-14.48 5.28-28.43 4.18-41.01m-27.51 55.7c3.05-6.22 6.01-13.64 7.48-20.15m3.93 14.49c11.26-26.47 9.82-68.08-1.45-81.57m-51.14 89.23c15.1-16.79 21.81-39.44 17.4-64.39m-8.1 66.06c21.14-28.19 18.43-54.84 16.26-66.68-2.17-11.83-16.63-9.3-16.27 1.18.37 10.48 2.53 14.1-.36 27.83m21.1 37.03c20.46-36.82 16.97-79.29-.42-87.57m20.9 55.5c15.34-83.72-60.42-79.88-66.48-38.07-1.34 12.78 2.22 14.56.76 25.71"
              fill="none"
              stroke-width="3"
              stroke="url(#a)"
              stroke-linecap="round"
              stroke-miterlimit="3"
              stroke-dasharray="178"
              stroke-dashoffset="178"
            ></path>
          </svg>
        </div>

        <transition name="fade">
          <section class="section" id="depositMoney" v-show="currentMenuShown == 'depositScreen'">
            <div class="container-fluid">
              <h1 class="section-title">Wpłać pieniądze do banku</h1>
              <div class="current-money">
                <p>Aktualny stan konta wynosi</p>
                <div class="value">{{ characterData.Money }}$</div>
              </div>
              <div class="deposit-money">
                <p>Ilość pieniędzy do wpłaty</p>
                <input
                  placeholder="0"
                  v-model="moneyToDeposit"
                  type="number"
                  class="form-input"
                  min="0"
                  oninput="validity.valid||(value='');"
                >
              </div>

              <div class="row justify-content-center">
                <div class="col-2">
                  <button class="form-button" @click="closeDepositDiv()">Wróć</button>
                </div>
                <div class="col-2">
                  <button class="form-button" @click="depositMoney()">Wpłać</button>
                </div>
              </div>
            </div>
          </section>
        </transition>

        <transition name="fade">
          <section class="section" id="withdrawDiv" v-show="currentMenuShown == 'withdrawScreen'">
            <div class="container-fluid">
              <h1 class="section-title">Wypłać pieniądze z konta</h1>
              <div class="current-money">
                <p>Aktualny stan konta wynosi</p>
                <div class="value">{{ characterData.Money }}$</div>
              </div>
              <div class="deposit-money">
                <p>Ilość pieniędzy do wypłaty</p>
                <input
                  placeholder="0"
                  v-model="moneyToWithdraw"
                  type="number"
                  class="form-input"
                  min="0"
                  oninput="validity.valid||(value='');"
                >
              </div>

              <div class="row justify-content-center">
                <div class="col-2">
                  <button class="form-button" @click="closeWithdrawDiv()">Wróć</button>
                </div>
                <div class="col-2">
                  <button class="form-button" @click="withdrawMoney()">Wypłać</button>
                </div>
              </div>
            </div>
          </section>
        </transition>

        <transition name="fade">
          <section class="section" id="transferDiv" v-show="currentMenuShown == 'transferScreen'">
            <div class="container-fluid">
              <h1 class="section-title">Wykonaj przelew</h1>
              <p class="small-text">Podatek wynosi 1% kwoty przelewu</p>
              <div class="current-money">
                <p>Aktualny stan konta wynosi</p>
                <div class="value">{{ characterData.Money }}$</div>
              </div>

              <div class="deposit-money">
                <p>Kwota przelewu</p>
                <input
                  placeholder="0"
                  v-model="moneyToTransfer"
                  type="number"
                  class="form-input"
                  min="0"
                  oninput="validity.valid||(value='');"
                >
              </div>

              <div class="deposit-money">
                <p>Odbiorca przelewu</p>
                <input
                  v-model="transferReceiver"
                  type="number"
                  placeholder="Numer konta odbiorcy"
                  class="form-input"
                  oninput="validity.valid||(value='');"
                >
              </div>

              <div class="row justify-content-center">
                <div class="col-2">
                  <button class="form-button" @click="closeTransferDiv()">Wróć</button>
                </div>
                <div class="col-2">
                  <button class="form-button" @click="transferMoney()">Przelej</button>
                </div>
              </div>
            </div>
          </section>
        </transition>

        <transition name="fade">
          <section class="section" id="historyDiv" v-show="currentMenuShown == 'historyScreen'">
            <div class="container-fluid">
              <div class="row">
                <div class="col-6 pl-2 mt-1">
                  <bank-chart ref="transactionChart"></bank-chart>
                </div>

                <div class="col-6 pr-2 mt-1">
                  <div class="list">
                    <div class="item" v-for="transaction in computedTransactionList">
                      <div class="history-section">
                        <div class="icon" v-if="transaction.Positive == true">
                          <img src="@/assets/images/icons/arrow-up.png" class="icon-png">
                        </div>
                        <div class="icon" v-else>
                          <img src="@/assets/images/icons/arrow-down.png" class="icon-png">
                        </div>

                        <div class="text">
                          <div class="title">{{ transaction.Text }}</div>
                          <div class="description">{{ transaction.Date }}</div>
                        </div>
                      </div>
                      <div class="history-section">
                        <div
                          class="balance"
                          v-if="transaction.Positive == true"
                        >+ ${{ transaction.Amount }}$</div>
                        <div class="balance-negative" v-else>- ${{ transaction.Amount }}$</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="row justify-content-center">
                <div class="col-2">
                  <button class="form-button" @click="closeHistoryDiv()">Wróć</button>
                </div>
              </div>
            </div>
          </section>
        </transition>

        <div class="welcome-screen" v-show="currentMenuShown == 'mainScreen'">
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-3 balance-card mx-2">
                <div class="row ml-1 mt-5 align-items-end">
                  <div class="label">Dostępne środki</div>
                  <br>
                  <div class="value">{{ characterData.Money }}$</div>
                </div>
                <div class="row ml-1 mt-4 align-items-end">
                  <div class="label">Numer konta</div>
                  <div class="value">{{ characterData.AccountNumber }}</div>
                </div>
              </div>
              <div class="col-3 panel mx-2" @click="openDepositDiv()">
                <div class="panel-icon">
                  <img src="@/assets/images/icons/depositMoney.png" class="menu-icon">
                </div>
                <h4 class="panel-title">Wpłać pieniądze na konto</h4>
              </div>
              <div class="col-3 panel mx-2" @click="openWithdrawDiv()">
                <div class="panel-icon">
                  <img src="@/assets/images/icons/withdrawMoney.png" class="menu-icon">
                </div>
                <h4 class="panel-title">Wypłać pieniądze z konta</h4>
              </div>
            </div>

            <div class="row justify-content-center">
              <div class="col-3 panel m-2" @click="openTransferDiv()">
                <div class="panel-icon">
                  <img src="@/assets/images/icons/transferMoney.png" class="menu-icon">
                </div>
                <h4 class="panel-title">Wykonaj przelew</h4>
              </div>
              <div class="col-3 panel m-2" @click="openHistoryDiv()">
                <div class="panel-icon">
                  <img src="@/assets/images/icons/paymentHistory.png" class="menu-icon">
                </div>
                <h4 class="panel-title">Historia stanu konta</h4>
              </div>
              <div class="col-3 panel m-2" @click="closeBankMenu()">
                <div class="panel-icon">
                  <img src="@/assets/images/icons/close.png" class="menu-icon">
                </div>
                <h4 class="panel-title">Zamknij bankomat</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BankChart from '@/components/BankChart.vue';
import EventBus from '@/event-bus.js';
import $ from 'jquery';

export default {
    name: 'bankApp',
    components: {
        BankChart,
    },
    props: {
        characterData: {
            type: Object,
            default: function() {
                return {
                    Name: 'Imie Nazwisko',
                    AccountNumber: '#888888',
                    Money: 100,
                };
            },
        },
    },
    mounted() {
        EventBus.$on('updateBankMoney', money => {
            this.changeBankMoney(money);
        });
        EventBus.$on('openTransactionHistory', transactionHistory => {
            this.populateTransactionHistory(transactionHistory);
        });
    },
    data() {
        return {
            currentMenuShown: '',

            showDepositDiv: false,
            showWithdrawDiv: false,
            showTransferDiv: false,
            showHistoryDiv: false,

            moneyToDeposit: null,
            moneyToWithdraw: null,
            moneyToTransfer: null,
            transferReceiver: null,
            transactionHistory: [
                {
                    TransactionDate: '19-02-2019 19:37',
                    Source: 'characters/33-A',
                    Receiver: 'characters/1-A',
                    Type: 5,
                    Amount: 50.0,
                },
                {
                    TransactionDate: '19-02-2019 19:37',
                    Source: 'characters/33-A',
                    Receiver: 'characters/1-A',
                    Type: 4,
                    Amount: 50.0,
                },
                {
                    TransactionDate: '18-02-2019 19:37',
                    Source: 'characters/33-A',
                    Receiver: 'BankAccount',
                    Type: 4,
                    Amount: 200.0,
                },
                {
                    TransactionDate: '17-02-2019 19:11',
                    Source: 'characters/33-A',
                    Receiver: 'BankAccount',
                    Type: 3,
                    Amount: 12.0,
                },
            ],
            transactionChartData: [],
            authTimer: null,
            isAuthed: false,
        };
    },
    methods: {
        applyChartData() {
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
            this.$refs.transactionChart.updateChart(labels.reverse(), data.reverse());
        },
        showBankMenu(characterJson) {
            try {
                this.characterData = JSON.parse(characterJson);
                console.log('Current character data = ' + JSON.stringify(this.characterData));
                // this.currentMenuShown = 'mainScreen';
            } catch (error) {
                console.log(error);
                this.closeBankMenu();
            }
        },
        generateChartData() {
            this.transactionChartData = this.transactionHistory.reduce((transactions, currentTransaction) => {
                const [date] = currentTransaction.Date.split(/\s/u);

                if (transactions.hasOwnProperty(date)) {
                    transactions[date].Amount += this.getTransactionAmount(currentTransaction);
                } else {
                    transactions[date] = {};
                    transactions[date].Amount = this.getTransactionAmount(currentTransaction);
                }

                // console.log("Transaction iteration: " + JSON.stringify(transactions));
                return transactions;
            }, {});
        },
        changeBankMoney(amount) {
            console.log('Updated bank money to: ' + amount);
            this.characterData.Money = amount;
        },
        getCurrentDate() {
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

            return (today = dd + '-' + mm + '-' + yyyy);
        },
        getTransactionAmount(transaction) {
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
        getTransactionText(transaction, transType) {
            switch (transaction.Type) {
                case 1:
                    transType.Positive = false;
                    return 'Kupno pojazdu';
                case 2:
                    transType.Positive = true;
                    return 'Sprzedaż pojazdu';
                case 3:
                    transType.Positive = false;
                    return 'Wypłata z banku';
                case 4:
                    transType.Positive = true;
                    return 'Wpłata do banku';
                case 5:
                    if (transaction.Source == this.characterData.Name) {
                        transType.Positive = false;
                        return 'Przelew do ' + transaction.Receiver;
                    } else {
                        transType.Positive = true;
                        return 'Przelew od ' + transaction.Source;
                    }
                default:
                    return 'Brak';
            }
        },
        closeBankMenu() {
            $('.login-screen').removeClass('success');
            $('.fingerprint').removeClass('active');
            this.currentMenuShown = 'mainScreen';
            this.authTimer = null;
            this.isAuthed = false;
            this.transactionHistory = [];
            alt.emit('closeBankMenu');
        },
        openDepositDiv() {
            this.currentMenuShown = 'depositScreen';
        },
        depositMoney() {
            var money = parseInt(this.moneyToDeposit, 10);
            this.moneyToDeposit = null;
            if (money > 0) {
                alt.emit('depositMoney', money);
            } else {
                alt.emit('showNotification', 3, 'Błąd', 'Podaj wartość większą od 0', 5000);
            }
        },
        closeDepositDiv() {
            this.currentMenuShown = 'mainScreen';
        },
        openWithdrawDiv() {
            this.currentMenuShown = 'withdrawScreen';
        },
        withdrawMoney() {
            var money = parseInt(this.moneyToWithdraw, 10);
            this.moneyToWithdraw = null;
            if (money > 0) {
                alt.emit('withdrawMoney', money);
            } else {
                alt.emit('showNotification', 3, 'Błąd', 'Podaj wartość większą od 0', 5000);
            }
        },
        closeWithdrawDiv() {
            this.currentMenuShown = 'mainScreen';
        },
        openTransferDiv() {
            this.currentMenuShown = 'transferScreen';
        },
        transferMoney() {
            var money = parseInt(this.moneyToTransfer, 10);
            this.moneyToTransfer = null;
            var receiver = parseInt(this.transferReceiver);
            this.transferReceiver = 0;
            if (this.transferReceiver === this.characterData.AccountNumber) {
                alt.emit('showNotification', 3, 'Błąd', 'Nie możesz wysłać pieniędzy sam do siebie.', 5000);
                return;
            } else if (money <= 0) {
                alt.emit('showNotification', 3, 'Błąd', 'Podaj wartość większą od 0.', 5000);
                return;
            } else if (!receiver || receiver < 100000 || receiver > 999999 || typeof receiver !== 'number') {
                // 100_000 the lowest, 999_999 the highest possible numbers
                alt.emit('showNotification', 3, 'Błąd', 'Podaj dobry number konta odbiorcy.', 5000);
                return;
            }

            alt.emit('tryTransferMoney', money, receiver);
        },
        closeTransferDiv() {
            this.currentMenuShown = 'mainScreen';
        },
        openHistoryDiv() {
            alt.emit('getTransferHistoryInfo');
        },
        populateTransactionHistory(transactionHistory) {
            console.log('Transaction history:' + transactionHistory);
            if (transactionHistory) {
                this.transactionHistory = transactionHistory;
                this.applyChartData();
                this.currentMenuShown = 'historyScreen';
            } else {
                alt.emit('showNotification', 3, 'Błąd', 'Nie masz jeszcze żadnych transkacji.', 5000);
            }
        },
        closeHistoryDiv() {
            this.currentMenuShown = 'mainScreen';
        },
        mouseDown() {
            if (this.isAuthed) return;
            $('.fingerprint').addClass('active');
            this.authTimer = setTimeout(this.onAuthSuccess, 1650);
        },
        mouseUp() {
            if (this.isAuthed) return;
            $('.fingerprint').removeClass('active');
            clearTimeout(this.authTimer);
        },
        onAuthSuccess() {
            $('.login-screen').addClass('success');
            this.currentMenuShown = 'mainScreen';
            this.isAuthed = true;
        },
    },
    computed: {
        computedTransactionList() {
            let transactionHistory = [];
            this.transactionHistory.forEach(transaction => {
                var newObject = {};
                newObject.Date = transaction.TransactionDate;
                newObject.Amount = transaction.Amount;
                newObject.Text = this.getTransactionText(transaction, newObject);
                transactionHistory.push(newObject);
            });
            return transactionHistory.reverse();
        },
    },
};

alt.on('updateBankMoney', money => {
    EventBus.$emit('updateBankMoney', money);
});

alt.on('openTransactionHistory', transactionHistory => {
    EventBus.$emit('openTransactionHistory', JSON.parse(transactionHistory));
});
</script>

<style scoped>
.bankApp {
    padding: 0;
    margin: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100vw;
    height: 100vh;
    letter-spacing: 1px;
    color: #fff;
}

.hide {
    display: none;
}

.bankApp button {
    border: none;
    outline: none;
}

.bankWindow {
    width: 50rem;
    height: 32rem;
    background: #21223f;
    /* position: relative; */
    overflow: hidden;
    border-radius: 10px;
    box-shadow: 0 0.8rem 3rem rgba(0, 0, 0, 0.5);
}

.bankWindow-header {
    z-index: 1;
    height: 3.2rem;
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
}

.main-title {
    color: rgb(219, 219, 219, 0.8);
    margin-left: 1rem;
    margin-top: 0.8rem;
    cursor: default;
}

.main-title .icon {
    height: 36px;
    position: absolute;
    margin: auto;
}

.main-title-text {
    top: 40%;
    left: 8%;
    position: absolute;
}

.header-svg {
    fill: #ccc;
}

.bankWindow-content {
    margin-top: auto;
    margin-bottom: auto;
    width: 100%;
    height: 100%;
    display: block;
    position: relative;
}

.name-text {
    color: rgb(255, 255, 255);
    margin: 0.2rem;
    font-weight: 400;
}

.name-indicator {
    margin-left: auto;
    margin-right: 1rem;
    margin-top: 1rem;
    display: flex;
}

.welcome-screen {
    margin: auto;
    left: 0;
    right: 0;
    width: 80%;
    color: #fff;
}

.greeting {
    margin: auto;
    text-align: center;
    font-weight: 300;
    color: #f0f0f0;
    transform: translateY(1rem);
    opacity: 0;
    animation: greeting--animate-in 1s 0.3s both ease;
}

.options {
    display: flex;
    margin-top: 0.8rem;
}

.panel {
    padding: 0;
    transform: translateY(1rem);
    opacity: 0;
    animation: greeting--animate-in 0.2s 0.3s both ease;
    height: 12rem;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    transition: border 0.1s ease;
    border: 1px solid transparent;
}

.balance-card {
    padding: 0;
    opacity: 0;
    transform: translateY(1rem);
    animation: greeting--animate-in 0.5s 0.3s both ease;
    background-color: #4837a796;
    border-radius: 10px;
    transition: border 0.1s ease;
    border: 1px solid transparent;
    font-family: 'Open Sans', sans-serif;
}

.balance-card .label {
    color: rgba(202, 200, 200, 0.89);
    text-transform: uppercase;
    font-weight: 100;
    font-size: 0.8em;
}

.balance-card .value {
    font-size: 1em;
    word-wrap: break-word;
}

.balance-card .row {
    margin-right: 0px;
}

.panel-title {
    color: #ccc;
    font-weight: 400;
    font-size: 0.9rem;
    padding: 0 1rem;
    text-align: center;
    transition: color 0.1s ease;
}

.panel-icon {
    width: 6rem;
    height: 6rem;
    margin: auto;
    margin-top: 0.8rem;
    margin-bottom: 0.4rem;
}

.panel:hover {
    border-color: rgba(255, 255, 255, 0.212);
}

.menu-icon {
    width: 100%;
    height: 100%;
}

@keyframes greeting--animate-in {
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

input[type='checkbox']:checked + .section {
    animation: section--animate-in 0.4s both ease-in-out;
    /* pointer-events: all; */
}

input[type='checkbox']:checked + .section ~ .intro-logo {
    animation: logo--to-topbar 0.4s forwards ease-in-out;
}

.section {
    background: #21223f;
    position: absolute;
    height: 100%;
    bottom: 0;
    z-index: 10;
    width: 100%;
    color: #f0f0f0;
    display: flex;
    flex-direction: column;
}

.section p {
    width: 27rem;
    margin: 1rem auto;
    color: rgba(255, 255, 255, 0.5);
}

.section-title {
    color: #fff;
    font-weight: 300;
    text-align: center;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.7s;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.form-input {
    background: transparent;
    color: #fff;
    border: none;
    border-bottom: 2px solid #00c99e;
    padding: 0.5rem 0;
    flex: 2;
    text-align: center;
}

.form-input:focus {
    outline: none;
    border-bottom-color: #fdbe41;
}

.form-input::placeholder {
    color: rgba(255, 255, 255, 0.4);
}

.form-button {
    display: block;
    margin: 1em;
    padding: 0.7rem 1rem;
    color: #fff;
    background: #4c24da;
    border-radius: 10px;
}

.form-button:hover {
    display: block;
    background: #009b79ee;
}

.form-group {
    display: flex;
    margin: 1rem auto;
    width: 24rem;
}

.form-group strong {
    flex: 0 0 5rem;
    margin: auto;
    margin-right: 2rem;
    color: #00c99e;
}

.form-group span {
    flex: 2;
}

.current-money {
    text-align: center;
}

.current-money .value {
    font-size: 1em;
    word-wrap: break-word;
}

.deposit-money {
    text-align: center;
    margin: 1rem auto;
}

.small-text {
    text-align: center;
    font-weight: 250;
    font-size: 0.8em;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

/* Fingerprint system */
.login-screen {
    position: absolute;
    top: 30%;
    left: 50%;
    transform: translate(-50%, -50%) scale(1.3);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vh;
}

.success {
    display: none !important;
}

.login-screen .fingerprint path.clone {
    transition: stroke-dashoffset 2s ease-out;
}

.login-screen .fingerprint.active {
    transform: scale(0.97);
}

.login-screen .fingerprint.active path.clone {
    stroke-dashoffset: 0;
}

.login-screen .fingerprint {
    width: 135px;
    height: 135px;
    overflow: visible;
}

.login-text {
    color: rgba(202, 200, 200, 0.89);
    text-transform: uppercase;
    font-weight: 300;
    margin: 5em 0;
}

/* History div */

::-webkit-scrollbar {
    height: 5px;
    width: 5px;
}

::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px #21233f;
}

::-webkit-scrollbar-thumb {
    background-color: #676767;
    border-radius: 10px;
}

.list {
    /* background: #211c3a; */
    display: grid;
    /* grid-gap: 5px; */
    padding: 5px 0;
    height: 23rem;
    overflow-y: auto;
}

.list div[class^='item'] {
    display: flex;
    justify-content: space-between;
    background: #21223f;
    padding: 10px 0;
}

.list div[class^='history-section'] {
    font-size: 0.8rem;
    display: flex;
    align-items: center;
}

.list .icon {
    display: flex;
    align-items: center;
    margin-right: 10px;
}

.list .icon-png {
    width: 1.3rem;
}

.list .description {
    color: #7d7d7d;
}

.list .balance {
    background: #1f3a4a;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    color: #02ca8c;
}

.list .balance-negative {
    background: #5e212b;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    color: #f72522;
}
</style>
