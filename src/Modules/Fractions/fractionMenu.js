import * as alt from 'alt';
import mainUi from 'src/Modules/Ui/mainUi.js';
import menusManager from 'src/Modules/Ui/menusManager.js';

export default class FractionMenu {
    constructor() {
        alt.log('Initialized FractionMenu class');
        alt.onServer('openFractionMenu', this.openFractionMenu);

        menusManager.onUiEvent('tryToOpenFractionRegistrationPage', this.tryToOpenFractionRegistrationPage);
        menusManager.onUiEvent('tryToOpenFractionEmployeesPage', this.tryToOpenFractionEmployeesPage);
        menusManager.onUiEvent('tryToOpenFractionRolesPage', this.tryToOpenFractionRolesPage);
        menusManager.onUiEvent('tryToOpenFractionTaxesPage', this.tryToOpenFractionTaxesPage);
        menusManager.onUiEvent('tryToOpenFractionFinancesPage', this.tryToOpenFractionFinancesPage);
        menusManager.onUiEvent('closeFractionMenu', this.closeFractionMenu);
    }

    openFractionMenu(fractionType, fractionData) {
        menusManager.openMenu('openFractionMenu', true, true, fractionType, fractionData);
    }

    tryToOpenFractionRegistrationPage(fractionId) {
        alt.emitServer('TryToOpenFractionRegistrationPage', fractionId);
    }

    tryToOpenFractionEmployeesPage(fractionId) {
        alt.emitServer('TryToOpenFractionEmployeesPage', fractionId)
    }

    tryToOpenFractionRolesPage(fractionId) {
        alt.emitServer('TryToOpenFractionRolesPage', fractionId);
    }

    tryToOpenFractionTaxesPage(fractionId) {
        alt.emitServer('TryToOpenFractionTaxesPage', fractionId);
    }

    tryToOpenFractionFinancesPage(fractionId) {
        alt.emitServer('TryToOpenFractionFinancesPage', fractionId);
    }

    closeFractionMenu() {
        menusManager.closeMenu();
    }
}