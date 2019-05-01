import alt from 'alt';
import mainUi from 'src/Modules/Ui/mainUi.js';

export default class Business {
    constructor() {
        alt.log('Initialized business class');
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
