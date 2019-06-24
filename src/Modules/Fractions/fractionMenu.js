import * as alt from 'alt';
import mainUi from 'src/Modules/Ui/mainUi.js';
import menusManager from 'src/Modules/Ui/menusManager.js';

export default class FractionMenu {
    constructor() {
        alt.log('Initialized FractionMenu class');
        alt.onServer('openFractionMenu', this.openFractionMenu);
        alt.onServer('openFractionEmployeesPage', this.openFractionEmployeesPage);
        alt.onServer('succesfullyUpdatedEmployeeRank', this.succesfullyUpdatedEmployeeRank);
        alt.onServer('succesfullyRemovedEmployeeFromFraction', this.succesfullyRemovedEmployeeFromFraction);

        menusManager.onUiEvent('closeFractionMenu', this.closeFractionMenu);
        menusManager.onUiEvent('tryToOpenFractionEmployeesPage', this.tryToOpenFractionEmployeesPage);
        menusManager.onUiEvent('updateFractionEmployeeRank', this.updateFractionEmployeeRank);
        menusManager.onUiEvent('tryToRemoveEmployeeFromFraction', this.tryToRemoveEmployeeFromFraction);
        menusManager.onUiEvent('tryToInviteEmployeeToFraction', this.tryToInviteEmployeeToFraction);
        mainUi.onUiEvent('acceptFractionInvite', this.acceptFractionInvite);
        mainUi.onUiEvent('cancelFractionInvite', this.cancelFractionInvite);
    }

    openFractionMenu(fractionType, fractionData) {
        menusManager.openMenu('openFractionMenu', true, true, fractionType, fractionData);
    }

    tryToOpenFractionEmployeesPage(fractionId) {
        alt.emitServer('TryToOpenFractionEmployeesPage', fractionId)
    }

    openFractionEmployeesPage(data) {
        alt.log(`Fraction employees data = ${JSON.stringify(data, null, 2)}`);
        menusManager.emitUiEvent('openFractionEmployeesPage', data);
    }

    updateFractionEmployeeRank(fractionId, employeeId, newRankId) {
        if (fractionId > 0 && employeeId > 0 && newRankId > 0) {
            alt.emitServer('UpdateFractionEmployeeRank', fractionId, employeeId, newRankId);
        } else {
            mainUi.showCefNotification(3, "Błąd", "Wystąpił błąd przy zapisywanie zmian.", 5500);
        }
    }

    succesfullyUpdatedEmployeeRank(employeeId, newRankId) {
        menusManager.emitUiEvent('succesfullyUpdatedEmployeeRank', employeeId, newRankId);
        mainUi.showCefNotification(1, "Sukces", "Pomyślnie zaaktualizowano pracownika.", 5500);
    }

    tryToRemoveEmployeeFromFraction(fractionId, employeeId) {
        if (fractionId > 0 && employeeId > 0) {
            alt.emitServer('TryToRemoveEmployeeFromFraction', fractionId, employeeId);
        }
    }

    succesfullyRemovedEmployeeFromFraction(employeeId) {
        menusManager.emitUiEvent('succesfullyRemovedEmployeeFromFraction', employeeId);
        mainUi.showCefNotification(1, "Sukces", "Pomyślnie usunięto pracownika.", 5500);
    }

    tryToInviteEmployeeToFraction(fractionId, firstName, lastName) {
        if (fractionId > 0) {
            if (typeof firstName == 'string' && typeof lastName == 'string') {
                alt.emitServer('InviteEmployeeToFraction', fractionId, firstName, lastName);
            }
        } else {
            mainUi.showCefNotification(3, "Błąd", "Podano błędne dane.", 5500);
        }
    }

    acceptFractionInvite(fractionId) {
        if (fractionId) {
            alt.emitServer('AcceptFractionInvite', fractionId);
        }

        if (menusManager.viewOpened) {
            menusManager.focusView();
        } else {
            mainUi.unfocusView();
            alt.showCursor(false);
        }
    }

    cancelFractionInvite(fractionId) {
        if (fractionId) {
            alt.emitServer('CancelFractionInvite', fractionId);
        }

        if (menusManager.viewOpened) {
            menusManager.focusView();
        } else {
            mainUi.unfocusView();
            alt.showCursor(false);
        }
    }

    closeFractionMenu() {
        menusManager.closeMenu();
    }
}