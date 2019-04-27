import alt from 'alt';
import { showCefNotification } from 'src/ui.mjs';

export default class Business {
    constructor() {
        alt.log('Initialized business class');
    }
    getBusinessesEmployees(businessId) {
        if (typeof businessId !== 'number') {
            showCefNotification(3, "Błąd", 'Błędne ID biznesu.', 5000);
            return;
        }
        alt.emitServer('GetBusinessesEmployees', businessId);
    }
    updateEmployeeRank(employeeId, newRankId, businessId) {
        if (typeof employeeId !== 'number' || typeof newRankId !== 'number' || typeof businessId !== 'number') {
            showCefNotification(3, "Błąd", 'Błędne ID postaci lub zły numer stanowiska.', 7000);
            return;
        }

        alt.emitServer('UpdateEmployeeRank', employeeId, newRankId, businessId);
    }
    addNewEmployee(name, lastName, businessId) {
        if (typeof name !== 'string' || typeof lastName !== 'string' || typeof businessId !== 'number') {
            showCefNotification(3, "Błąd", 'Błędne imię lub nazwisko pracownika.', 6000);
            return;
        }

        alt.emitServer('AddNewEmployee', name, lastName, businessId);
    }
}
