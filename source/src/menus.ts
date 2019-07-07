import Business from 'source/src/Modules/Businesses/businessMenu.js';
import FractionMenu from 'source/src/Modules/Fractions/fractionMenu.js';
import TownHallMenu from 'source/src/Modules/Fractions/townHallMenu.js';
import mainUi from 'source/src/Modules/Ui/mainUi.js';
import { vehicleShop } from 'source/src/Modules/Vehicle/vehicleShop.js';

const business = new Business();
const fractionMenu = new FractionMenu();
const townHallMenu = new TownHallMenu();
mainUi.onUiEvent('showNotification', (type: number, title: string, message: string, time: number) => {
    mainUi.showCefNotification(type, title, message, time);
});


