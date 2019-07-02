import * as alt from 'alt';
import menusManager from 'src/Modules/Ui/menusManager.js';

export default class Business {
    constructor() {
        alt.log('Initialized business class');
        alt.onServer('openBusinessMenu', this.openBusinessMenu);
        alt.onServer('populateEmployeeRanks', this.populateEmployeeRanks);
        alt.onServer('populateBusinessRanksInfo', this.populateBusinessRanksInfo);
        alt.onServer('successfullyUpdatedEmployeeRank', this.successfullyUpdatedEmployeeRank);

        menusManager.onUiEvent('getBusinessEmployees', this.getBusinessEmployees.bind(this));
        menusManager.onUiEvent('updateEmployeeRank', this.updateEmployeeRank.bind(this));
        menusManager.onUiEvent('addNewEmployee', this.addNewEmployee.bind(this));
        menusManager.onUiEvent('getBusinessRolesInfo', this.getBusinessRolesInfo.bind(this));
        menusManager.onUiEvent('updateBusinessRank', this.updateBusinessRank.bind(this));
        menusManager.onUiEvent('addNewRole', this.addNewRole.bind(this));
        menusManager.onUiEvent('deleteBusiness', this.deleteBusiness.bind(this));
        menusManager.onUiEvent('deleteRole', this.deleteRole.bind(this));
        menusManager.onUiEvent('deleteEmployee', this.deleteEmployee.bind(this));
        menusManager.onUiEvent('closeBusinessMenu', this.closeBusinessMenu);
    }

    openBusinessMenu(businessInfo) {
        menusManager.openMenu('openBusinessMenu', true, true, businessInfo);
    }

    populateEmployeeRanks(employeesRanks) {
        if (menusManager.viewOpened)
            menusManager.menusView.emit('populateEmployeeRanks', employeesRanks);
    }

    populateBusinessRanksInfo(permissionsInfo) {
        if (menusManager.viewOpened)
            menusManager.menusView.emit('populateBusinessRanksInfo', permissionsInfo);
    }

    successfullyUpdatedEmployeeRank(employeeId, newRankId) {
        if (menusManager.viewOpened)
            menusManager.menusView.emit('successfullyUpdatedEmployeeRank', employeeId, newRankId);

        menusManager.showCefNotification(1, "Zaktualizowano pracownika", "Pomyślnie zaktualizowano stanowiska pracownika.", 5000);
    }

    closeBusinessMenu() {
        menusManager.closeMenu();
    }

    getBusinessEmployees(businessId) {
        if (typeof businessId !== 'number') {
            menusManager.showCefNotification(3, "Błąd", 'Błędne ID biznesu.', 5000);
            return;
        }
        alt.emitServer('GetBusinessEmployees', businessId);
    }

    updateEmployeeRank(employeeId, newRankId, businessId) {
        if (typeof employeeId !== 'number' || typeof newRankId !== 'number' || typeof businessId !== 'number') {
            menusManager.showCefNotification(3, "Błąd", 'Błędne ID postaci lub zły numer stanowiska.', 7000);
            return;
        }

        alt.emitServer('UpdateEmployeeRank', employeeId, newRankId, businessId);
    }

    addNewEmployee(name, lastName, businessId) {
        if (typeof name !== 'string' || typeof lastName !== 'string' || typeof businessId !== 'number') {
            menusManager.showCefNotification(3, "Błąd", 'Błędne imię lub nazwisko pracownika.', 6000);
            return;
        }

        alt.emitServer('AddNewEmployee', name, lastName, businessId);
    }

    getBusinessRolesInfo(businessId) {
        if (typeof businessId !== 'number') {
            menusManager.showCefNotification(3, "Błąd", "Błędne ID biznesu.", 4000);
            return;
        }

        alt.emitServer('GetBusinessRoles', businessId);
    }

    updateBusinessRank(rank, businessId) {
        if (typeof businessId !== 'number') {
            menusManager.showCefNotification(3, "Błąd", "Błędne ID biznesu.", 4000);
            return;
        }

        if (rank == null || typeof rank !== 'object') {
            menusManager.showCefNotification(3, "Błąd", "Wystąpił błąd ze stanowiskiem. Otwórz menu biznesu ponownie.", 4000);
            return;
        }

        alt.emitServer('UpdateBusinessRank', JSON.stringify(rank), businessId);
    }

    addNewRole(newRole, businessId) {
        if (typeof newRole !== 'object' || typeof businessId !== 'number') {
            menusManager.showCefNotification(3, "Błąd", 'Błędne nowe stanowisko.', 6000);
            return;
        }

        alt.emitServer('AddNewRole', JSON.stringify(newRole), businessId);
    }

    deleteBusiness(businessId) {
        if (typeof businessId !== 'number')
            return;

        alt.emitServer('DeleteBusiness', businessId);
    }

    deleteRole(roleId, businessId) {
        if (typeof businessId !== 'number' || typeof roleId !== 'number')
            return;

        alt.emitServer('DeleteRole', roleId, businessId);
    }

    deleteEmployee(employeeId, businessId) {
        if (typeof businessId !== 'number' || typeof employeeId !== 'number')
            return;

        alt.emitServer('DeleteEmployee', employeeId, businessId);
    }
}
