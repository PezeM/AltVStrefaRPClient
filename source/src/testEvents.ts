import * as alt from 'alt';

class TestEvents {
    constructor() {
        alt.on('playerDeath', this.onPlayerDeath.bind(this));
        alt.on('playerEntredVehicle', this.onPlayerEnteredVehicle.bind(this));
        alt.on('playerLeftVehicle', this.onPlayerLeftVehicle.bind(this));
        alt.on('playerDamage', () => {
            alt.log('On player damage ALT');
        });
        alt.on('playerDamage', this.onPlayerDamage.bind(this));
    }

    onPlayerDamage() {
        alt.log('On player damage 2 ALT');
    }

    onPlayerDeath() {
        alt.log('On player death ALT');
    }

    onPlayerLeftVehicle() {
        alt.log('On player left vehicle ALT');
    }

    onPlayerEnteredVehicle() {
        alt.log('On player entered vehicle ALT');
    }
}

const testEvents = new TestEvents();
export default testEvents;