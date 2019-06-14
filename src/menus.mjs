/// <reference path="../natives.d.ts" />
/// <reference path="../alt.d.ts" />

import * as alt from 'alt';
import mainUi from 'src/Modules/Ui/mainUi.js';
import bank from 'src/Modules/banking.js';
import Business from 'src/Modules/business.js';
import menusManager from 'src/Modules/Ui/menusManager.js';
import { vehicleShop } from 'src/Modules/Vehicle/vehicleShop.js';

let business = new Business();

// Bank menu
menusManager.onServerEvent('openBankMenu', (bankAccountInformations) => {
    alt.log(`BankAccountInformation type: ${typeof bankAccountInformations} : ${JSON.stringify(bankAccountInformations)}`);
    if (bankAccountInformations == null) {
        alt.log('openBankMenu -> BankAccountInformation was null');
        return;
    }

    menusManager.openMenu('openBankMenuView', true, true, bankAccountInformations);
});

menusManager.onServerEvent('updateBankMoneyWithNotification', (notificationMessage, money) => {
    menusManager.emitUiEvent('updateBankMoney', money);
    mainUi.showCefNotification(1, "Aktualizacja", notificationMessage, 6000);
});

menusManager.onServerEvent('openTransactionHistory', transactionHistory => {
    menusManager.emitUiEvent('openTransactionHistory', transactionHistory);
});

menusManager.onUiEvent('closeBankMenu', () => {
    menusManager.closeMenu();
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
menusManager.onServerEvent('openBusinessMenu', (businessInfo) => {
    alt.log(`BusinessInfo type: ${typeof businessInfo} data: ${JSON.stringify(businessInfo)}`);
    menusManager.openMenu('openBusinessMenu', true, true, businessInfo);
});

menusManager.onServerEvent('populateEmployeeRanks', (employeesRanks) => {
    alt.log(`Business employess info type: ${typeof employeesRanks} data: ${JSON.stringify(employeesRanks)}`);
    if (menusManager.viewOpened)
        menusManager.menusView.emit('populateEmployeeRanks', employeesRanks);
});

menusManager.onServerEvent('populateBusinessRanksInfo', (permissionsInfo) => {
    alt.log(`Business permissions: ${typeof permissionsInfo} data: ${JSON.stringify(permissionsInfo)}`);
    if (menusManager.viewOpened)
        menusManager.menusView.emit('populateBusinessRanksInfo', permissionsInfo);
});

menusManager.onServerEvent('successfullyUpdatedEmployeeRank', (employeeId, newRankId) => {
    if (menusManager.viewOpened)
        menusManager.menusView.emit('successfullyUpdatedEmployeeRank', employeeId, newRankId);

    mainUi.showCefNotification(1, "Zaktualizowano pracownika", "Pomyślnie zaktualizowano stanowiska pracownika.", 5000);
});

menusManager.onUiEvent('closeBusinessMenu', () => {
    menusManager.closeMenu();
});

// Vehicle shops
menusManager.onServerEvent('openVehicleShop', (vehicleShopId, vehicleShopData) => {
    var shopData = vehicleShop.setupVehicleShop(vehicleShopId, vehicleShopData);
    menusManager.openMenu("openVehicleShop", true, true, JSON.stringify(shopData), vehicleShopId);
});

menusManager.onUiEvent('spawnNextVehicle', (shopId, vehicleModel) => {
    alt.log(`Inside spawnNextVehicle event with shopId = ${shopId} and vehicleModel = ${vehicleModel}`);
    let vehicleShopData = vehicleShop.getVehicleShopData(shopId);
    if (vehicleShopData == null) return;
    vehicleShop.changeVehicle(vehicleModel, vehicleShopData);
});

menusManager.onUiEvent('buyVehicle', (shopId, vehicleModel) => {
    vehicleShop.buyVehicle(shopId, vehicleModel)
});

menusManager.onUiEvent('closeVehicleShop', () => {
    vehicleShop.exitVehicleShop();
    menusManager.closeMenu();
});

// Fraction menu
menusManager.onServerEvent('openFractionMenu', (fractionType, fractionData) => {
    menusManager.openMenu('openFractionMenu', true, true, fractionType, fractionData);
});

