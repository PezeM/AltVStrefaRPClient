import * as alt from 'alt';
import menusManager from 'src/Modules/Ui/menusManager.js';

export default class FractionMenu {
    constructor() {
        alt.log('Initialized FractionMenu class');
        alt.onServer('openFractionMenu', this.openFractionMenu);

        menusManager.onUiEvent('closeFractionMenu', this.closeFractionMenu);
        menusManager.onUiEvent('tryToOpenFractionEmployeesPage', this.tryToOpenFractionEmployeesPage);
    }

    openFractionMenu(fractionType, fractionData) {
        menusManager.openMenu('openFractionMenu', true, true, fractionType, fractionData);
    }

    tryToOpenFractionEmployeesPage(fractionId) {
        alt.emitServer('TryToOpenFractionEmployeesPage', fractionId)
    }

    closeFractionMenu() {
        menusManager.closeMenu();
    }
}