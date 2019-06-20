import * as alt from 'alt';
import mainUi from 'src/Modules/Ui/mainUi.js';
import menusManager from 'src/Modules/Ui/menusManager.js';

export default class FractionMenu {
    constructor() {
        alt.log('Initialized FractionMenu class');
        alt.onServer('openFractionMenu', this.openFractionMenu);
        alt.onServer('openFractionsResidentsPage', this.openFractionsResidentsPage);
        alt.onServer('populateResidentData', this.populateResidentData);
        alt.onServer('openFractionTaxesPage', this.openFractionTaxesPage);

        menusManager.onUiEvent('tryToOpenFractionRegistrationPage', this.tryToOpenFractionRegistrationPage);
        menusManager.onUiEvent('tryToOpenFractionEmployeesPage', this.tryToOpenFractionEmployeesPage);
        menusManager.onUiEvent('tryToOpenFractionRolesPage', this.tryToOpenFractionRolesPage);
        menusManager.onUiEvent('tryToOpenFractionTaxesPage', this.tryToOpenFractionTaxesPage);
        menusManager.onUiEvent('tryToOpenFractionResidentsPage', this.tryToOpenFractionResidentsPage);
        menusManager.onUiEvent('tryToGetResidentData', this.tryToGetResidentData);
        menusManager.onUiEvent('closeFractionMenu', this.closeFractionMenu);
    }

    openFractionMenu(fractionType, fractionData) {
        menusManager.openMenu('openFractionMenu', true, true, fractionType, fractionData);
    }

    openFractionsResidentsPage(onlineResidents) {
        menusManager.emitUiEvent('openFractionsResidentsPage', onlineResidents);
    }

    openFractionTaxesPage(data) {
        menusManager.emitUiEvent('openFractionTaxesPage', data);
    }

    populateResidentData(residentData) {
        menusManager.emitUiEvent('populateResidentData', residentData);
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

    tryToOpenFractionTaxesPage() {
        alt.emitServer('TryToOpenFractionTaxesPage');
    }

    tryToOpenFractionResidentsPage() {
        alt.emitServer('TryToOpenFractionResidentsPage');
    }

    tryToGetResidentData(residentFullName) {
        if (residentFullName == null || residentFullName.length < 2) {
            mainUi.showCefNotification(3, "Błąd", "Podano błędne imię lub nazwisko.", 5500);
            return;
        }

        if (!Array.isArray(residentFullName)) {
            residentFullName = residentFullName.split(' ', 2);
        }

        alt.emitServer('TryToGetResidentData', residentFullName[0], residentFullName[1]);
    }

    closeFractionMenu() {
        menusManager.closeMenu();
    }
}