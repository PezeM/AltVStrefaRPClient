import * as alt from 'alt';
import mainUi from 'src/Modules/Ui/mainUi.js';

export default class Business {
    constructor() {
        alt.log('Initialized business class');
        alt.onServer('openBusinessMenu', this.openBusinessMenu);
        alt.onServer('populateEmployeeRanks', this.populateEmployeeRanks);
        alt.onServer('populateBusinessRanksInfo', this.populateBusinessRanksInfo);
        alt.onServer('successfullyUpdatedEmployeeRank', this.successfullyUpdatedEmployeeRank);

        mainUi.onUiEvent('getBusinessEmployees', this.getBusinessEmployees.bind(this));
        mainUi.onUiEvent('updateEmployeeRank', this.updateEmployeeRank.bind(this));
        mainUi.onUiEvent('addNewEmployee', this.addNewEmployee.bind(this));
        mainUi.onUiEvent('getBusinessRolesInfo', this.getBusinessRolesInfo.bind(this));
        mainUi.onUiEvent('updateBusinessRank', this.updateBusinessRank.bind(this));
        mainUi.onUiEvent('addNewRole', this.addNewRole.bind(this));
        mainUi.onUiEvent('deleteBusiness', this.deleteBusiness.bind(this));
        mainUi.onUiEvent('deleteRole', this.deleteRole.bind(this));
        mainUi.onUiEvent('deleteEmployee', this.deleteEmployee.bind(this));
        mainUi.onUiEvent('closeBusinessMenu', this.closeBusinessMenu);
    }

    openBusinessMenu(businessInfo) {
        mainUi.openMenu('openBusinessMenu', true, true, businessInfo);
    }

    populateEmployeeRanks(employeesRanks) {
        if (mainUi.viewOpened)
            mainUi.menusView.emit('populateEmployeeRanks', employeesRanks);
    }

    populateBusinessRanksInfo(permissionsInfo) {
        if (mainUi.viewOpened)
            mainUi.menusView.emit('populateBusinessRanksInfo', permissionsInfo);
    }

    successfullyUpdatedEmployeeRank(employeeId, newRankId) {
        if (mainUi.viewOpened)
            mainUi.menusView.emit('successfullyUpdatedEmployeeRank', employeeId, newRankId);

        mainUi.showCefNotification(1, "Zaktualizowano pracownika", "Pomyślnie zaktualizowano stanowiska pracownika.", 5000);
    }

    closeBusinessMenu() {
        mainUi.closeMenu();
    }

    getBusinessEmployees(businessId) {
        if (typeof businessId !== 'number') {
            mainUi.showCefNotification(3, "Błąd", 'Błędne ID biznesu.', 5000);
            return;
        }
        alt.emitServer('GetBusinessEmployees', businessId);
    }

    updateEmployeeRank(employeeId, newRankId, businessId) {
        if (typeof employeeId !== 'number' || typeof newRankId !== 'number' || typeof businessId !== 'number') {
            mainUi.showCefNotification(3, "Błąd", 'Błędne ID postaci lub zły numer stanowiska.', 7000);
            return;
        }

        alt.emitServer('UpdateEmployeeRank', employeeId, newRankId, businessId);
    }

    addNewEmployee(name, lastName, businessId) {
        if (typeof name !== 'string' || typeof lastName !== 'string' || typeof businessId !== 'number') {
            mainUi.showCefNotification(3, "Błąd", 'Błędne imię lub nazwisko pracownika.', 6000);
            return;
        }

        alt.emitServer('AddNewEmployee', name, lastName, businessId);
    }

    getBusinessRolesInfo(businessId) {
        if (typeof businessId !== 'number') {
            mainUi.showCefNotification(3, "Błąd", "Błędne ID biznesu.", 4000);
            return;
        }

        alt.emitServer('GetBusinessRoles', businessId);
    }

    updateBusinessRank(rank, businessId) {
        if (typeof businessId !== 'number') {
            mainUi.showCefNotification(3, "Błąd", "Błędne ID biznesu.", 4000);
            return;
        }

        if (rank == null || typeof rank !== 'object') {
            mainUi.showCefNotification(3, "Błąd", "Wystąpił błąd ze stanowiskiem. Otwórz menu biznesu ponownie.", 4000);
            return;
        }

        alt.emitServer('UpdateBusinessRank', JSON.stringify(rank), businessId);
    }

    addNewRole(newRole, businessId) {
        if (typeof newRole !== 'object' || typeof businessId !== 'number') {
            mainUi.showCefNotification(3, "Błąd", 'Błędne nowe stanowisko.', 6000);
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
