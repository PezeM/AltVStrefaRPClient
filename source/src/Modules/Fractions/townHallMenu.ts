import * as alt from 'alt';
import mainUi from 'src/Modules/Ui/mainUi';

export default class TownHallMenu {
    constructor() {
        alt.log('Initialized TownHallMenu class');
        alt.onServer('openFractionsResidentsPage', this.openFractionsResidentsPage);
        alt.onServer('populateResidentData', this.populateResidentData);
        alt.onServer('openFractionTaxesPage', this.openFractionTaxesPage);
        alt.onServer('updateTaxValue', this.updateTaxValue);

        mainUi.onUiEvent('tryToOpenFractionRolesPage', this.tryToOpenFractionRolesPage);
        mainUi.onUiEvent('tryToOpenFractionResidentsPage', this.tryToOpenFractionResidentsPage);
        mainUi.onUiEvent('tryToOpenFractionTaxesPage', this.tryToOpenFractionTaxesPage);
        mainUi.onUiEvent('tryToGetResidentData', this.tryToGetResidentData);
        mainUi.onUiEvent('tryToUpdateTaxValue', this.tryToUpdateTaxValue);
        mainUi.onUiEvent('tryToOpenFractionRegistrationPage', this.tryToOpenFractionRegistrationPage);
    }

    openFractionsResidentsPage(onlineResidents: any) {
        mainUi.emitUiEvent('openFractionsResidentsPage', onlineResidents);
    }

    openFractionTaxesPage(data: any) {
        mainUi.emitUiEvent('openFractionTaxesPage', data);
    }

    populateResidentData(residentData: any) {
        mainUi.emitUiEvent('populateResidentData', residentData);
    }

    tryToOpenFractionRolesPage(fractionId: number) {
        alt.emitServer('TryToOpenFractionRolesPage', fractionId);
    }

    tryToOpenFractionTaxesPage() {
        alt.emitServer('TryToOpenFractionTaxesPage');
    }

    tryToOpenFractionResidentsPage() {
        alt.emitServer('TryToOpenFractionResidentsPage');
    }

    tryToGetResidentData(residentFullName: any) {
        if (residentFullName == null || residentFullName.length < 2) {
            mainUi.showCefNotification(3, "Błąd", "Podano błędne imię lub nazwisko.", 5500);
            return;
        }

        if (!Array.isArray(residentFullName)) {
            residentFullName = residentFullName.split(' ', 2);
        }

        alt.emitServer('TryToGetResidentData', residentFullName[0], residentFullName[1]);
    }

    tryToUpdateTaxValue(taxId: number, taxValue: number) {
        alt.emitServer('TryToUpdateTaxValue', taxId, taxValue);
    }

    updateTaxValue(taxId: number, newValue: number) {
        mainUi.emitUiEvent('updateTaxValue', taxId, newValue.toFixed(2));
    }

    tryToOpenFractionRegistrationPage() {
        alt.emitServer('TryToOpenFractionRegistrationPage');
    }
}