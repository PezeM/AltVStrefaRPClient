import * as alt from 'alt';
import mainUi from 'src/Modules/Ui/mainUi';

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

    openBusinessMenu(businessInfo: any) {
        mainUi.openMenu('openBusinessMenu', true, true, businessInfo);
    }

    populateEmployeeRanks(employeesRanks: any) {
        if (mainUi.viewOpened)
            mainUi.emitUiEvent('populateEmployeeRanks', employeesRanks);
    }

    populateBusinessRanksInfo(permissionsInfo: any) {
        if (mainUi.viewOpened)
            mainUi.emitUiEvent('populateBusinessRanksInfo', permissionsInfo);
    }

    successfullyUpdatedEmployeeRank(employeeId: number, newRankId: number) {
        if (mainUi.viewOpened)
            mainUi.emitUiEvent('successfullyUpdatedEmployeeRank', employeeId, newRankId);

        mainUi.showCefNotification(1, "Zaktualizowano pracownika", "Pomyślnie zaktualizowano stanowiska pracownika.", 5000);
    }

    closeBusinessMenu() {
        mainUi.closeMenu();
    }

    getBusinessEmployees(businessId: number) {
        if (typeof businessId !== 'number') {
            mainUi.showCefNotification(3, "Błąd", 'Błędne ID biznesu.', 5000);
            return;
        }
        alt.emitServer('GetBusinessEmployees', businessId);
    }

    updateEmployeeRank(employeeId: number, newRankId: number, businessId: number) {
        if (typeof employeeId !== 'number' || typeof newRankId !== 'number' || typeof businessId !== 'number') {
            mainUi.showCefNotification(3, "Błąd", 'Błędne ID postaci lub zły numer stanowiska.', 7000);
            return;
        }

        alt.emitServer('UpdateEmployeeRank', employeeId, newRankId, businessId);
    }

    addNewEmployee(name: string, lastName: string, businessId: number) {
        if (typeof name !== 'string' || typeof lastName !== 'string' || typeof businessId !== 'number') {
            mainUi.showCefNotification(3, "Błąd", 'Błędne imię lub nazwisko pracownika.', 6000);
            return;
        }

        alt.emitServer('AddNewEmployee', name, lastName, businessId);
    }

    getBusinessRolesInfo(businessId: number) {
        if (typeof businessId !== 'number') {
            mainUi.showCefNotification(3, "Błąd", "Błędne ID biznesu.", 4000);
            return;
        }

        alt.emitServer('GetBusinessRoles', businessId);
    }

    updateBusinessRank(rank: any, businessId: number) {
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

    addNewRole(newRole: any, businessId: number) {
        if (typeof newRole !== 'object' || typeof businessId !== 'number') {
            mainUi.showCefNotification(3, "Błąd", 'Błędne nowe stanowisko.', 6000);
            return;
        }

        alt.emitServer('AddNewRole', JSON.stringify(newRole), businessId);
    }

    deleteBusiness(businessId: number) {
        if (typeof businessId !== 'number')
            return;

        alt.emitServer('DeleteBusiness', businessId);
    }

    deleteRole(roleId: number, businessId: number) {
        if (typeof businessId !== 'number' || typeof roleId !== 'number')
            return;

        alt.emitServer('DeleteRole', roleId, businessId);
    }

    deleteEmployee(employeeId: number, businessId: number) {
        if (typeof businessId !== 'number' || typeof employeeId !== 'number')
            return;

        alt.emitServer('DeleteEmployee', employeeId, businessId);
    }
}
