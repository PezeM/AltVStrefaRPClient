import Business from 'source/src/Modules/Businesses/businessMenu';
import FractionMenu from 'source/src/Modules/Fractions/fractionMenu';
import TownHallMenu from 'source/src/Modules/Fractions/townHallMenu';
import mainUi from 'source/src/Modules/Ui/mainUi';

const business = new Business();
const fractionMenu = new FractionMenu();
const townHallMenu = new TownHallMenu();
mainUi.onUiEvent('showNotification', (type: number, title: string, message: string, time: number) => {
    mainUi.showCefNotification(type, title, message, time);
});


