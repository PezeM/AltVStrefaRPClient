/// <reference path="../altv.d.ts" />
/// <reference path="../alt.d.ts" />

import alt from 'alt';
import { showUiAndFreezePlayer } from 'src/Helpers/uiHelper.js';
import mainUi from 'src/Modules/Ui/mainUi.js';
import Bank from 'src/Modules/banking.js';
import Business from 'src/Modules/business.js';
import menusManager from 'src/Modules/Ui/menusManager.js';

let bank = new Bank();
let business = new Business();

// Bank menu
alt.onServer('openBankMenu', (bankAccountInformations) => {
    alt.log(`BankAccountInformation type: ${typeof bankAccountInformations} : ${JSON.stringify(bankAccountInformations)}`);
    if (bankAccountInformations == null) {
        alt.log('openBankMenu -> BankAccountInformation was null');
        return;
    }

    menusManager.openMenu('openBankMenuView', true, true, bankAccountInformations);
    // menusManager.menusView.emit('openBankMenuView', bankAccountInformations);
    // showUiAndFreezePlayer(false);
    // menusView.focus();
    // alt.showCursor(true);
});

alt.onServer('updateBankMoneyWithNotification', (notificationMessage, money) => {
    menusManager.menusView.emit('updateBankMoney', money);
    mainUi.showCefNotification(1, "Aktualizacja", notificationMessage, 6000);
});

alt.onServer('openTransactionHistory', (transactionHistory) => {
    menusManager.menusView.emit('openTransactionHistory', transactionHistory);
});

menusManager.onUiEvent('closeBankMenu', () => {
    showUiAndFreezePlayer(true);
    alt.showCursor(false);
    menusManager.viewOpened = false;
});

menusManager.onUiEvent('getTransferHistoryInfo', () => {
    alt.emitServer('GetTransferHistoryInfo');
});

menusManager.onUiEvent('tryTransferMoney', (money, receiver) => {
    bank.transferMoney(money, receiver);
});

menusManager.onUiEvent('withdrawMoney', (amount) => {
    bank.withdrawMoney(amount);
});

menusManager.onUiEvent('depositMoney', (amount) => {
    bank.depositMoney(amount);
});

menusManager.onUiEvent('showNotification', (type, title, message, time) => {
    mainUi.showCefNotification(type, title, message, time);
});

// Business menu

alt.onServer('openBusinessMenu', (businessInfo) => {
    alt.log(`BusinessInfo type: ${typeof businessInfo} data: ${JSON.stringify(businessInfo)}`);
    menusManager.openMenu('openBusinessMenu', true, true, businessInfo);
});

alt.onServer('populateEmployeeRanks', (employeesRanks) => {
    alt.log(`Business employess info type: ${typeof employeesRanks} data: ${JSON.stringify(employeesRanks)}`);
    if (menusManager.viewOpened)
        menusManager.menusView.emit('populateEmployeeRanks', employeesRanks);
});

alt.onServer('populateBusinessRanksInfo', (permissionsInfo) => {
    alt.log(`Business permissions: ${typeof permissionsInfo} data: ${JSON.stringify(permissionsInfo)}`);
    if (menusManager.viewOpened)
        menusManager.menusView.emit('populateBusinessRanksInfo', permissionsInfo);
});

alt.onServer('successfullyUpdatedEmployeeRank', (employeeId, newRankId) => {
    if (menusManager.viewOpened)
        menusManager.menusView.emit('successfullyUpdatedEmployeeRank', employeeId, newRankId);

    mainUi.showCefNotification(1, "Zaktualizowano pracownika", "Pomyślnie zaktualizowano stanowiska pracownika.", 5000);
});

alt.onServer('successfullyInvitedNewEmployee', () => {
    mainUi.showCefNotification(1, "Wysłano ofertę", "Pomyślnie wysłano zaproszenie do biznesu.", 5000);
});

alt.onServer('successfullyUpdatedRankPermissions', () => {
    if (menusManager.viewOpened)
        menusManager.menusView.emit('successfullyUpdatedRankPermissions');

    mainUi.showCefNotification(1, "Zaktualizowano stanowisko", "Pomyślnie zaktualizowano stanowisko.", 5000);
});

alt.onServer('successfullyAddedNewRole', () => {
    if (menusManager.viewOpened)
        menusManager.menusView.emit('successfullyAddedNewRole');

    mainUi.showCefNotification(1, "Dodano stanowisko", "Pomyślnie dodano nowe stanowisko do biznesu.", 6000);
});

menusManager.menusView.on('getBusinessEmployees', (businessId) => {
    business.getBusinessEmployees(businessId);
});

menusManager.menusView.on('updateEmployeeRank', (employeeId, newRankId, businessId) => {
    business.updateEmployeeRank(employeeId, newRankId, businessId);
});

menusManager.menusView.on('addNewEmployee', (name, lastName, businessId) => {
    business.addNewEmployee(name, lastName, businessId);
});

menusManager.menusView.on('getBusinessRolesInfo', (businessId) => {
    business.getBusinessRolesInfo(businessId);
});

menusManager.menusView.on('updateBusinessRank', (rank, businessId) => {
    business.updateBusinessRank(rank, businessId);
});

menusManager.menusView.on('addNewRole', (newRole, businessId) => {
    business.addNewRole(newRole, businessId);
});

menusManager.menusView.on('closeBusinessMenu', () => {
    showUiAndFreezePlayer(true);
    alt.showCursor(false);
    menusManager.viewOpened = false;
});


