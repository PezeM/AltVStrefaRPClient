import * as alt from 'alt';
import menusManager from 'src/Modules/Ui/menusManager.js';

export default class FractionMenu {
    constructor() {
        alt.log('Initialized FractionMenu class');
        alt.onServer('openFractionMenu', this.openFractionMenu);
        alt.onServer('openFractionEmployeesPage', this.openFractionEmployeesPage);

        menusManager.onUiEvent('closeFractionMenu', this.closeFractionMenu);
        menusManager.onUiEvent('tryToOpenFractionEmployeesPage', this.tryToOpenFractionEmployeesPage);
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

    closeFractionMenu() {
        menusManager.closeMenu();
    }
}