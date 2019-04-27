/// <reference path="../altv.d.ts" />
/// <reference path="../alt.d.ts" />

import alt from 'alt';
import game from 'natives';
import { showUiAndFreezePlayer } from 'src/Helpers/uiHelper.js';
import { showCefNotification } from 'src/ui.mjs';
import Bank from 'src/Modules/banking.js';
import Business from 'src/Modules/business.js';

let menusView = new alt.WebView('http://resources/AltVStrefaRPClient/html/menus.html');
let bank = new Bank();
let business = new Business();
let menuOpened = false;

export function isMenuOpen() {
    alt.log('Test');
}

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
    menuOpened = true;
});

alt.onServer('updateBankMoneyWithNotification', (notificationMessage, money) => {
    menusView.emit('updateBankMoney', money);
    showCefNotification(1, "Aktualizacja", notificationMessage, 6000);
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

menusView.on('showNotification', (type, title, message, time) => {
    showCefNotification(type, title, message, time);
});

// Business menu

alt.onServer('openBusinessMenu', (businessInfo) => {
    alt.log(`BusinessInfo type: ${typeof businessInfo} data: ${JSON.stringify(businessInfo)}`);
    menusView.emit('openBusinessMenu', businessInfo);
    showUiAndFreezePlayer(false);
    menusView.focus();
    alt.showCursor(true);
});

alt.onServer('populateBusinessEmployees', (employeesInfo) => {
    alt.log(`Business employess info type: ${typeof employeesInfo} data: ${JSON.stringify(employeesInfo)}`);
    if (menusView) {
        menusView.emit('populateBusinessEmployees', employeesInfo);
    }
});

alt.onServer('successfullyUpdatedEmployeeRank', (employeeId, newRankId) => {
    if (menusView) {
        menusView.emit('successfullyUpdatedEmployeeRank', employeeId, newRankId);
        showCefNotification(1, "Zaktualizowano pracownika", "Pomyślnie zaktualizowano stanowiska pracownika.", 5000);
    }
});

alt.onServer('successfullyInvitedNewEmployee', () => {
    if (menusView) {
        menusView.emit('successfullyInvitedNewEmployee');
        showCefNotification(1, "Wysłano ofertę", "Pomyślnie wysłano zaproszenie do biznesu.", 5000);
    }
});

menusView.on('getBusinessesEmployees', (businessId) => {
    business.getBusinessesEmployees(businessId);
});

menusView.on('updateEmployeeRank', (employeeId, newRankId, businessId) => {
    business.updateEmployeeRank(employeeId, newRankId, businessId);
});

menusView.on('addNewEmployee', (name, lastName, businessId) => {
    business.addNewEmployee(name, lastName, businessId);
});

menusView.on('closeBusinessMenu', () => {
    showUiAndFreezePlayer(true);
    alt.showCursor(false);
});


