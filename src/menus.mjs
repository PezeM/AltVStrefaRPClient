/// <reference path="../altv.d.ts" />
/// <reference path="../altv-client.d.ts" />

import * as alt from 'alt';
import mainUi from 'src/Modules/Ui/mainUi.js';
import bank from 'src/Modules/banking.js';
import Business from 'src/Modules/business.js';
import menusManager from 'src/Modules/Ui/menusManager.js';
import { setupVehicleShop, exitVehicleShop, getVehicleShopData, changeVehicle, buyVehicle } from 'src/Modules/Vehicle/vehicleShops.js';

// let bank = new Bank();
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

menusManager.onUiEvent('getBusinessEmployees', (businessId) => {
    business.getBusinessEmployees(businessId);
});

menusManager.onUiEvent('updateEmployeeRank', (employeeId, newRankId, businessId) => {
    business.updateEmployeeRank(employeeId, newRankId, businessId);
});

menusManager.onUiEvent('addNewEmployee', (name, lastName, businessId) => {
    business.addNewEmployee(name, lastName, businessId);
});

menusManager.onUiEvent('getBusinessRolesInfo', (businessId) => {
    business.getBusinessRolesInfo(businessId);
});

menusManager.onUiEvent('updateBusinessRank', (rank, businessId) => {
    business.updateBusinessRank(rank, businessId);
});

menusManager.onUiEvent('addNewRole', (newRole, businessId) => {
    business.addNewRole(newRole, businessId);
});

menusManager.onUiEvent('deleteBusiness', (businessId) => {
    business.deleteBusiness(businessId);
});

menusManager.onUiEvent('deleteRole', (rankId, businessId) => {
    business.deleteRole(rankId, businessId)
});

menusManager.onUiEvent('deleteEmployee', (employeeId, businessId) => {
    business.deleteEmployee(employeeId, businessId);
});

menusManager.onUiEvent('closeBusinessMenu', () => {
    menusManager.closeMenu();
});

// Vehicle shops
menusManager.onServerEvent('openVehicleShop', (vehicleShopId, vehicleShopData) => {
    var shopData = setupVehicleShop(vehicleShopId, vehicleShopData);
    alt.log(JSON.stringify(shopData));
    menusManager.openMenu("openVehicleShop", true, true, JSON.stringify(shopData), vehicleShopId);
});

menusManager.onUiEvent('spawnNextVehicle', (shopId, vehicleModel) => {
    alt.log(`Inside spawnNextVehicle event with shopId = ${shopId} and vehicleModel = ${vehicleModel}`);
    let vehicleShopData = getVehicleShopData(shopId);
    if (vehicleShopData == null) return;
    changeVehicle(vehicleModel, vehicleShopData);
});

menusManager.onUiEvent('buyVehicle', (shopId, vehicleModel) => {
    buyVehicle(shopId, vehicleModel)
});

menusManager.onUiEvent('closeVehicleShop', () => {
    exitVehicleShop();
    menusManager.closeMenu();
});

alt.on('consoleCommand', (command, ...args) => {
    if (command == 'testMenu') {
        if (menusManager.viewOpened) {
            alt.log('Closing test menu');
            menusManager.closeMenu();
        } else {
            alt.log('Showing test menu');
            let simpleObject = { name: 'Wtf', age: 15, nextData: 221313 };
            let json = JSON.stringify(simpleObject);
            menusManager.openMenu('testMenu', true, true, json);
        }
    } else if (command == 'focus') {
        menusManager.focusView();
    }
})
