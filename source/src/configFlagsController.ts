import * as alt from 'alt';
import * as game from 'natives';
import { PedConfigFlags } from 'source/src/Constans/Ped/pedConfigFlags';

class ConfigFlagsController {
    constructor() {
        this.setupDefaultConfigFlags();
    }

    setupDefaultConfigFlags() {
        const localPlayer = alt.Player.local;
        alt.log(`Setting ped config flag. Player script ID ${localPlayer.scriptID}`)
        // Weird. Seems like all flags execpt shuffling works
        alt.setTimeout(() => {
            // Can fly through the windscreen in car crash
            this.setPedFlag(localPlayer.scriptID, PedConfigFlags.PED_FLAG_CAN_FLY_THRU_WINDSCREEN, true);
            // Disables auto helmer on moto
            this.setPedFlag(localPlayer.scriptID, PedConfigFlags.PED_FLAG_AUTO_HELMET_ON_MOTO, false);
            // Disables shuffing to driver seat
            this.setPedFlag(localPlayer.scriptID, PedConfigFlags.PED_FLAG_DISABLE_SHUFFLING_TO_DRIVER_SEAT, true);
            // Disables controling vehicle engine on client side
            this.setPedFlag(localPlayer.scriptID, PedConfigFlags.PED_FLAG_DISABLE_STARTING_VEH_ENGINE, true);
        }, 25000);
    }

    setPedFlag(ped: number, flag: PedConfigFlags, value: boolean) {
        game.setPedConfigFlag(ped, flag, value);
    }
}

const configFlags = new ConfigFlagsController();
export default configFlags;