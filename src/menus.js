/// <reference path="../altv.d.ts" />
/// <reference path="../alt.d.ts" />

import alt from 'alt';
import game from 'natives';
import { showUiAndFreezePlayer } from 'src/Helpers/uiHelper.js';
import { showCefNotification } from 'src/ui.js';
import Bank from 'src/Modules/banking.js';
import Business from 'src/Modules/business.js';

let menusView = new alt.WebView('http://resources/AltVStrefaRPClient/html/menus.html');
let bank = new Bank();
let business = new Business();

// Bank menu
alt.onServer('openBankMenu', (bankAccountInformations) => {
    alt.log(`BankAccountInformation type: ${typeof bankAccountInformations} : ${JSON.stringify(bankAccountInformations)}`);
    if (bankAccountInformations == null) {
        alt.log('openBankMenu -> BankAccountInformation was null');
        return;
    }

    menusView.emit('openBankMenuView', bankAccountInformations);
    showUiAndFreezePlayer(false);
    menusView.focus();
    alt.showCursor(true);
});

alt.onServer('updateBankMoneyWithNotification', (notificationMessage, money) => {
    menusView.emit('updateBankMoney', money);
    showCefNotification(1, notificationMessage, 6000);
});

alt.onServer('openTransactionHistory', (transactionHistory) => {
    menusView.emit('openTransactionHistory', transactionHistory);
});

menusView.on('closeBankMenu', () => {
    showUiAndFreezePlayer(true);
    alt.showCursor(false);
});

menusView.on('getTransferHistoryInfo', () => {
    alt.emitServer('GetTransferHistoryInfo');
});

menusView.on('tryTransferMoney', (money, receiver) => {
    bank.transferMoney(money, receiver);
});

menusView.on('withdrawMoney', (amount) => {
    bank.withdrawMoney(amount);
});

menusView.on('depositMoney', (amount) => {
    bank.depositMoney(amount);
});

menusView.on('showNotification', (type, message, time) => {
    showCefNotification(type, message, time);
});

// Business menu

alt.onServer('openBusinessMenu', (businessInfo) => {
    alt.log(`BusinessInfo type: ${typeof businessInfo} data: ${JSON.stringify(businessInfo)}`);
    menusView.emit('openBusinessMenu', businessInfo);
    showUiAndFreezePlayer(false);
    menusView.focus();
    alt.showCursor(true);
});

menusView.on('getBusinessesEmployess', (businessId) => {
    business.getBusinessesEmployess(businessId);
});