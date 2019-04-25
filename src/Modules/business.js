import game from 'natives';
import alt from 'alt';
import { showCefNotification } from 'src/ui.js';

export default class Business {
    constructor() {
        alt.log('Initialized business class');
    }
    getBusinessesEmployees(businessId) {
        if (typeof businessId !== 'number') {
            showCefNotification(3, 'Błędne ID biznesu.', 5000);
            return;
        }
        alt.emitServer('GetBusinessesEmployees', businessId);
    }
    updateEmployeeRank(employeeId, newRankId, businessId) {
        if (typeof employeeId !== 'number' || typeof newRankId !== 'number' || typeof businessId !== 'number') {
            showCefNotification(3, 'Błędne ID postaci lub zły numer stanowiska.', 7000);
            return;
        }

        alt.emitServer('UpdateEmployeeRank', employeeId, newRankId, businessId);
    }
}
