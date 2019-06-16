import * as game from 'natives';
import * as alt from 'alt';
import mainUi from 'src/Modules/Ui/mainUi.js';

const pedPositions = [
    { x: -111.9647, y: 6471.319, z: 31.6267, rot: 138.7 },
    { x: 149.09, y: -1042.76, z: 29.37409, rot: 340.29 },
    { x: 249.022, y: 224.9183, z: 106.2871, rot: 165.78 },
    { x: 243.9872, y: 227.0842, z: 106.2874, rot: 161.6292 }
];


class Bank {
    constructor() {
        this.atmModels = [
            2930269768,
            3424098598,
            3168729781,
            506770882,
            2594689830,
            3839570722
        ];
        this.pedList = [];
        this.pedHash = 3272005365;
        alt.loadModel(this.pedHash);
        this.initializePeds();

        alt.onServer('openBankMenu', this.openBankMenu);
        alt.onServer('updateBankMoneyWithNotification', this.updateBankMoneyWithNotification);
        alt.onServer('openTransactionHistory', this.openTransactionHistory);

        menusManager.onUiEvent('getTransferHistoryInfo', this.getTransferHistoryInfo.bind(this));
        menusManager.onUiEvent('tryTransferMoney', this.transferMoney.bind(this));
        menusManager.onUiEvent('withdrawMoney', this.withdrawMoney.bind(this));
        menusManager.onUiEvent('depositMoney', this.depositMoney.bind(this));
        menusManager.onUiEvent('closeBankMenu', this.closeBankMenu.bind(this));
    }

    initializePeds() {
        pedPositions.forEach(bankPed => {
            let ped = game.createPed(26, this.pedHash, bankPed.x, bankPed.y, bankPed.z, bankPed.rot, false, true);
            game.freezeEntityPosition(ped, true);
            game.setEntityInvincible(ped, true);
            game.setBlockingOfNonTemporaryEvents(ped, true);
            this.pedList.push(ped);
        });
        alt.log(`Created ${this.pedList.length} bank peds.`);
    }

    openBankMenu(bankAccountInformations) {
        alt.log(`BankAccountInformation type: ${typeof bankAccountInformations} : ${JSON.stringify(bankAccountInformations)}`);
        if (bankAccountInformations == null) {
            alt.log('openBankMenu -> BankAccountInformation was null');
            return;
        }

        menusManager.openMenu('openBankMenuView', true, true, bankAccountInformations);
    }

    updateBankMoneyWithNotification(notificationMessage, money) {
        menusManager.emitUiEvent('updateBankMoney', money);
        mainUi.showCefNotification(1, "Aktualizacja", notificationMessage, 6000);
    }

    openTransactionHistory(transactionHistory) {
        menusManager.emitUiEvent('openTransactionHistory', transactionHistory);
    }

    getTransferHistoryInfo() {
        alt.emitServer('GetTransferHistoryInfo');
    }

    withdrawMoney(amount) {
        if (typeof amount !== 'number') {
            mainUi.showCefNotification(3, "Błąd", 'Podano błędną ilość pieniędzy do wypłacenia.', 5000);
            return;
        }
        alt.emitServer('WithdrawMoneyFromBank', amount);
    }

    depositMoney(amount) {
        if (typeof amount !== 'number') {
            mainUi.showCefNotification(3, "Błąd", 'Podano błędną ilość pieniędzy do wpłaty.', 5000);
            return;
        }
        alt.emitServer('DepositMoneyToBank', amount);
    }

    transferMoney(amount, receiver) {
        if (amount <= 0 || typeof receiver === 'undefined' || receiver == null) {
            mainUi.showCefNotification(3, "Błąd", 'Podano błędne dane do transferu pieniędzy.', 4000);
            return;
        }
        alt.emitServer('TransferMoneyFromBankToBank', amount, receiver);
    }

    closeBankMenu() {
        menusManager.closeMenu();
    }
}


let banking = new Bank();
export default banking;