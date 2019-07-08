import * as alt from 'alt';
import mainUi from 'src/Modules/Ui/mainUi';

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
        alt.onServer('succesfullyUpdatedFractionRank', this.succesfullyUpdatedFractionRank);
        alt.onServer('openFractionRegistrationPage', this.openFractionRegistrationPage);

        mainUi.onUiEvent('closeFractionMenu', this.closeFractionMenu);
        mainUi.onUiEvent('tryToOpenFractionEmployeesPage', this.tryToOpenFractionEmployeesPage);
        mainUi.onUiEvent('updateFractionEmployeeRank', this.updateFractionEmployeeRank);
        mainUi.onUiEvent('tryToRemoveEmployeeFromFraction', this.tryToRemoveEmployeeFromFraction);
        mainUi.onUiEvent('tryToInviteEmployeeToFraction', this.tryToInviteEmployeeToFraction);
        mainUi.onUiEvent('acceptFractionInvite', this.acceptFractionInvite);
        mainUi.onUiEvent('cancelFractionInvite', this.cancelFractionInvite);
        mainUi.onUiEvent('tryToOpenFractionRanksPage', this.tryToOpenFractionRanksPage);
        mainUi.onUiEvent('tryToDeleteFractionRank', this.tryToDeleteFractionRank);
        mainUi.onUiEvent('tryToUpdateFractionRank', this.tryToUpdateFractionRank);
        mainUi.onUiEvent('tryToAddNewFractionRank', this.tryToAddNewFractionRank);
    }

    openFractionMenu(fractionType: number, fractionData: any) {
        mainUi.openMenu('openFractionMenu', true, true, fractionType, fractionData);
    }

    tryToOpenFractionEmployeesPage(fractionId: number) {
        alt.emitServer('TryToOpenFractionEmployeesPage', fractionId)
    }

    openFractionEmployeesPage(data: any) {
        alt.log(`Fraction employees data = ${JSON.stringify(data, null, 2)}`);
        mainUi.emitUiEvent('openFractionEmployeesPage', data);
    }

    updateFractionEmployeeRank(fractionId: number, employeeId: number, newRankId: number) {
        if (fractionId > 0 && employeeId > 0 && newRankId > 0) {
            alt.emitServer('UpdateFractionEmployeeRank', fractionId, employeeId, newRankId);
        } else {
            mainUi.showCefNotification(3, "Błąd", "Wystąpił błąd przy zapisywanie zmian.", 5500);
        }
    }

    succesfullyUpdatedEmployeeRank(employeeId: number, newRankId: number) {
        mainUi.emitUiEvent('succesfullyUpdatedEmployeeRank', employeeId, newRankId);
        mainUi.showCefNotification(1, "Sukces", "Pomyślnie zaaktualizowano pracownika.", 5500);
    }

    tryToRemoveEmployeeFromFraction(fractionId: number, employeeId: number) {
        if (fractionId > 0 && employeeId > 0) {
            alt.emitServer('TryToRemoveEmployeeFromFraction', fractionId, employeeId);
        }
    }

    succesfullyRemovedEmployeeFromFraction(employeeId: number) {
        mainUi.emitUiEvent('succesfullyRemovedEmployeeFromFraction', employeeId);
        mainUi.showCefNotification(1, "Sukces", "Pomyślnie usunięto pracownika.", 5500);
    }

    tryToInviteEmployeeToFraction(fractionId: number, firstName: string, lastName: string) {
        if (fractionId > 0) {
            if (typeof firstName === 'string' && typeof lastName === 'string') {
                alt.emitServer('InviteEmployeeToFraction', fractionId, firstName, lastName);
            }
        } else {
            mainUi.showCefNotification(3, "Błąd", "Podano błędne dane.", 5500);
        }
    }

    acceptFractionInvite(fractionId: number) {
        if (fractionId) {
            alt.emitServer('AcceptFractionInvite', fractionId);
        }

        if (mainUi.viewOpened) {
            mainUi.focusView();
        } else {
            mainUi.unfocusView();
            alt.showCursor(false);
        }
    }

    cancelFractionInvite(fractionId: number) {
        if (fractionId) {
            alt.emitServer('CancelFractionInvite', fractionId);
        }

        if (mainUi.viewOpened) {
            mainUi.focusView();
        } else {
            mainUi.unfocusView();
            alt.showCursor(false);
        }
    }

    tryToOpenFractionRanksPage(fractionId: number) {
        if (fractionId) {
            alt.emitServer('TryToOpenFractionRanksPage', fractionId);
        }
    }

    openFractionRanksPage(ranksData: any) {
        mainUi.emitUiEvent('openFractionRanksPage', ranksData);
    }

    tryToDeleteFractionRank(fractionId: number, rankId: number) {
        if (fractionId && rankId && typeof fractionId === 'number' && typeof rankId === 'number') {
            alt.emitServer('TryToDeleteFractionRank', fractionId, rankId);
        } else {
            mainUi.showCefNotification(3, "Błąd", "Podano błędne dane.", 5000);
        }
    }

    tryToUpdateFractionRank(fractionId: number, rank: any) {
        if (rank && fractionId > 0) {
            alt.emitServer('TryToUpdateFractionRank', fractionId, rank);
        }
    }

    tryToAddNewFractionRank(fractionId: number, rankData: any) {
        if (fractionId > 0 && rankData) {
            alt.emitServer('TryToAddNewFractionRank', fractionId, rankData);
        }
    }

    succesfullyAddedNewFractionRank(rankName: string, updatedRanks: any) {
        mainUi.emitUiEvent('succesfullyAddedNewFractionRank', updatedRanks);
        mainUi.showCefNotification(1, "Sukces", `Pomyślnie dodano nowe stanowisku o nazwie ${rankName}`, 5500);
    }

    succesfullyDeletedFractionRank(rankId: number) {
        mainUi.emitUiEvent('succesfullyDeletedFractionRank', rankId);
        mainUi.showCefNotification(1, 'Usunięto range', 'Pomyślnie usunięto stanowisko.', 5000);
    }

    succesfullyUpdatedFractionRank(updatedRank: any) {
        mainUi.emitUiEvent('succesfullyUpdatedFractionRank', updatedRank);
        mainUi.showCefNotification(1, 'Sukces', `Pomyślnie zaaktualizowano stanowisko ${updatedRank.RankName}`, 5000);
    }

    openFractionRegistrationPage() {
        mainUi.emitUiEvent('openFractionRegistrationPage');
    }

    closeFractionMenu() {
        mainUi.closeMenu();
    }
}