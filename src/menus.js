/// <reference path="../altv.d.ts" />
/// <reference path="../alt.d.ts" />

import alt from 'alt';
import game from 'natives';
import { showUiAndFreezePlayer } from 'src/Helpers/uiHelper.js';
import { showCefNotification } from 'src/ui.js';

let menusView = new alt.WebView('http://resources/AltVStrefaRPClient/html/menus.html');

// Bank
alt.onServer('openBankMenu', (bankAccountInformations) => {
    alt.log(`BankAccountInformation type: ${typeof bankAccountInformations} : ${JSON.stringify(bankAccountInformations)}`);
    if (bankAccountInformations == null) {
        alt.log('openBankMenu -> BankAccountInformation was null');
        return;
    }
    // Open bank account menu
    menusView.emit('openBankMenuView', bankAccountInformations);
    showUiAndFreezePlayer(false);
    menusView.focus();
    alt.showCursor(true);
});

menusView.on('closeBankMenu', () => {
    showUiAndFreezePlayer(true);
    alt.showCursor(false);
});

menusView.on('getTransferHistoryInfo', () => {
    alt.emitServer('GetTransferHistoryInfo');
});

menusView.on('tryTransferMoney', (money, receiver) => {
    if (money <= 0 || typeof receiver === 'undefined' || receiver == null) {
        showCefNotification(3, 'Podano błędne dane do transferu pieniędzy.', 4000);
        return;
    }
    alt.emitServer('TransferMoneyFromBankToBank', money, receiver);
});

menusView.on('withdrawMoney', (amount) => {
    if (typeof amount !== 'number') {
        showCefNotification(3, 'Podano błędną ilość pieniędzy do wypłacenia.', 5000);
        return;
    }
    alt.emitServer('WithdrawMoneyFromBank', amount);
});

menusView.on('depositMoney', (amount) => {
    if (typeof amount !== 'number') {
        showCefNotification(3, 'Podano błędną ilość pieniędzy do wpłaty.', 5000);
        return;
    }
    alt.emitServer('DepositMoneyToBank', amount);
});