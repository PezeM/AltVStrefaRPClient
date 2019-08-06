import * as alt from 'alt';
import game from 'natives';
import { PedConfigFlags } from 'source/src/Constans/pedConfigFlags';

class ConfigFlagsController {
    constructor() {
        this.setupDefaultConfigFlags();
    }

    setupDefaultConfigFlags() {
        const localPlayer = alt.Player.local;
        // Can fly through the windscreen in car crash
        this.setPedFlag(localPlayer.scriptID, PedConfigFlags.PED_FLAG_CAN_FLY_THRU_WINDSCREEN, true);
        // Disables auto helmer on moto
        this.setPedFlag(localPlayer.scriptID, PedConfigFlags.PED_FLAG_AUTO_HELMET_ON_MOTO, false);
        // Disables shuffing to driver seat
        this.setPedFlag(localPlayer.scriptID, PedConfigFlags.PED_FLAG_DISABLE_SHUFFLING_TO_DRIVER_SEAT, true);
        // Disables controling vehicle engine on client side
        this.setPedFlag(localPlayer.scriptID, PedConfigFlags.PED_FLAG_DISABLE_STARTING_VEH_ENGINE, true);
    }

    setPedFlag(ped: number, flag: PedConfigFlags, value: boolean) {
        game.setPedConfigFlag(ped, flag, value);
    }
}

const configFlags = new ConfigFlagsController();
export default configFlags;