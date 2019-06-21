/// <reference path="../natives.d.ts" />
/// <reference path="../alt.d.ts" />

import * as alt from 'alt';
import mainUi from 'src/Modules/Ui/mainUi.js';
import bank from 'src/Modules/banking.js';
import Business from 'src/Modules/Businesses/businessMenu.js';
import FractionMenu from 'src/Modules/Fractions/fractionMenu.js';
import TownHallMenu from 'src/Modules/Fractions/townHallMenu.js';
import menusManager from 'src/Modules/Ui/menusManager.js';
import { vehicleShop } from 'src/Modules/Vehicle/vehicleShop.js';

const business = new Business();
const fractionMenu = new FractionMenu();
const townHallMenu = new TownHallMenu();
menusManager.onUiEvent('showNotification', (type, title, message, time) => {
    mainUi.showCefNotification(type, title, message, time);
});

