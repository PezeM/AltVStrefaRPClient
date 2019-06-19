/// <reference path="../natives.d.ts" />
/// <reference path="../alt.d.ts" />

import * as alt from 'alt';
import mainUi from 'src/Modules/Ui/mainUi.js';
import bank from 'src/Modules/banking.js';
import Business from 'src/Modules/Businesses/businessMenu.js';
import FractionMenu from 'src/Modules/Fractions/fractionMenu.js';
import menusManager from 'src/Modules/Ui/menusManager.js';
import { vehicleShop } from 'src/Modules/Vehicle/vehicleShop.js';

let business = new Business();
let fractionMenu = new FractionMenu();
menusManager.onUiEvent('showNotification', (type, title, message, time) => {
    mainUi.showCefNotification(type, title, message, time);
});

