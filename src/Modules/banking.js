import game from 'natives';
import alt from 'alt';
import mainUi from 'src/Modules/Ui/mainUi.js';

const pedPositions = [
    { x: -111.9647, y: 6471.319, z: 31.6267, rot: 138.7 },
    { x: 149.09, y: -1042.76, z: 29.37409, rot: 340.29 },
    { x: 249.022, y: 224.9183, z: 106.2871, rot: 165.78 },
    { x: 243.9872, y: 227.0842, z: 106.2874, rot: 161.6292 }
];

class Bank {
    constructor() {
        this.pedList = [];
        this.pedHash = 3272005365;
        alt.loadModel(this.pedHash);
        this.initializePeds();
    }
    initializePeds() {
        pedPositions.forEach(bankPed => {
            var ped = game.createPed(26, this.pedHash, bankPed.x, bankPed.y, bankPed.z, bankPed.rot, false, true);
            game.setEntityCanBeDamaged(ped, false);
            game.setPedCanRagdoll(ped, false);
            this.pedList.push(ped);
        });
        alt.log(`Created ${this.pedList.length} bank peds.`);
    }
    withdrawMoney(amount) {
        if (typeof amount !== 'number') {
            mainUi.showCefNotification(3, "Błąd", 'Podano błędną ilość pieniędzy do wypłacenia.', 5000);
            return;
        }
        alt.emitServer('WithdrawMoneyFromBank', amount);
    }
    depositMoney(amount) {
        if (typeof amount !== 'number') {
            mainUi.showCefNotification(3, "Błąd", 'Podano błędną ilość pieniędzy do wpłaty.', 5000);
            return;
        }
        alt.emitServer('DepositMoneyToBank', amount);
    }
    transferMoney(amount, receiver) {
        if (amount <= 0 || typeof receiver === 'undefined' || receiver == null) {
            mainUi.showCefNotification(3, "Błąd", 'Podano błędne dane do transferu pieniędzy.', 4000);
            return;
        }
        alt.emitServer('TransferMoneyFromBankToBank', amount, receiver);
    }
}


let Banking = new Bank();
export default Banking;