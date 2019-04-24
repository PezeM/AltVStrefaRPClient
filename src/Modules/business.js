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
}
