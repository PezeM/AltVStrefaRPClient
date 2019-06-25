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
        alt.onServer('openFractionRanksPage', this.openFractionRanksPage);
        alt.onServer('succesfullyAddedNewFractionRank', this.succesfullyAddedNewFractionRank);
        alt.onServer('succesfullyDeletedFractionRank', this.succesfullyDeletedFractionRank);

        menusManager.onUiEvent('closeFractionMenu', this.closeFractionMenu);
        menusManager.onUiEvent('tryToOpenFractionEmployeesPage', this.tryToOpenFractionEmployeesPage);
        menusManager.onUiEvent('updateFractionEmployeeRank', this.updateFractionEmployeeRank);
        menusManager.onUiEvent('tryToRemoveEmployeeFromFraction', this.tryToRemoveEmployeeFromFraction);
        menusManager.onUiEvent('tryToInviteEmployeeToFraction', this.tryToInviteEmployeeToFraction);
        mainUi.onUiEvent('acceptFractionInvite', this.acceptFractionInvite);
        mainUi.onUiEvent('cancelFractionInvite', this.cancelFractionInvite);
        menusManager.onUiEvent('tryToOpenFractionRanksPage', this.tryToOpenFractionRanksPage);
        menusManager.onUiEvent('tryToDeleteFractionRank', this.tryToDeleteFractionRank);
        menusManager.onUiEvent('tryToUpdateFractionRank', this.tryToUpdateFractionRank);
        menusManager.onUiEvent('tryToAddNewFractionRank', this.tryToAddNewFractionRank);
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

    tryToOpenFractionRanksPage(fractionId) {
        if (fractionId) {
            alt.emitServer('TryToOpenFractionRanksPage', fractionId);
        }
    }

    openFractionRanksPage(ranksData) {
        menusManager.emitUiEvent('openFractionRanksPage', ranksData);
    }

    tryToDeleteFractionRank(fractionId, rankId) {
        if (fractionId && rankId && typeof fractionId == 'number' && typeof rankId == 'number') {
            alt.emitServer('TryToDeleteFractionRank', fractionId, rankId);
        } else {
            mainUi.showCefNotification(3, "Błąd", "Podano błędne dane.", 5000);
        }
    }

    tryToUpdateFractionRank(fractionId, rankId, rank) {
        if (rank && rankId > 0 && fractionId > 0) {
            alt.emitServer('TryToUpdateFractionRank', fractionId, rankId, rank);
        }
    }

    tryToAddNewFractionRank(fractionId, rankData) {
        if (fractionId > 0 && rankData) {
            alt.emitServer('TryToAddNewFractionRank', fractionId, rankData);
        }
    }

    succesfullyAddedNewFractionRank(rankName, updatedRanks) {
        menusManager.emitUiEvent('succesfullyAddedNewFractionRank', updatedRanks);
        mainUi.showCefNotification(1, "Sukces", `Pomyślnie dodano nowe stanowisku o nazwie ${rankName}`, 5500);
    }

    succesfullyDeletedFractionRank(rankId) {
        menusManager.emitUiEvent('succesfullyDeletedFractionRank', rankId);
        mainUi.showCefNotification(1, 'Usunięto range', 'Pomyślnie usunięto stanowisko.', 5000);
    }

    closeFractionMenu() {
        menusManager.closeMenu();
    }
}