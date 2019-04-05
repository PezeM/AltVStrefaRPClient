/// <reference path="../altv.d.ts" />
/// <reference path="../alt.d.ts" />

import alt from 'alt';
import game from 'natives';
import { showUiAndFreezePlayer } from 'src/Helpers/uiHelper.js';

let menusView = new alt.WebView('http://resources/AltVStrefaRPClient/html/menus.html');

alt.onServer('openBankMenu', (bankAccountInformations) => {
    alt.log(`BankAccountInformation type: ${typeof bankAccountInformations} : ${JSON.stringify(bankAccountInformations)}`);
    if (bankAccountInformations == null) {
        alt.log('openBankMenu -> BankAccountInformation was null');
        return;
    }
    // Open bank account menu
    menusView.emit('openBankMenuView', bankAccountInformations);
    showUiAndFreezePlayer(false);
});

menusView.on('closeBankMenu', () => {
    showUiAndFreezePlayer(true);
});

menusView.on('getTransferHistoryInfo', () => {
    alt.emitServer('GetTransferHistoryInfo');
});