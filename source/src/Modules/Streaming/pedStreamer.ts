import * as alt from 'alt';
import * as game from "natives";
import { INetworkingEntity } from 'networking-entity';

class PedStreamer {
    peds: Map<any, any>;
    constructor() {
        alt.log(`Created ped streamer`);
        this.peds = new Map();
        alt.on('disconnect', this.onDisconnect.bind(this));
    }

    onStreamIn(entity: INetworkingEntity) {
        const pedId = game.createPed(2, 1885233650, entity.position.x, entity.position.y, entity.position.z, 61, false, true);
        entity.ped = {
            pedId,
            pedType: entity.data.pedType.intValue,
        };
        this.peds.set(entity.id, entity);
    }

    onStreamOut(entity: INetworkingEntity) {
        if (this.peds.has(entity.id)) {
            alt.log(`Deleting ped`);
            game.deleteEntity(this.peds.get(entity.id).ped.pedId);
            this.peds.delete(entity.id);
        }
    }

    onDataChange(entity: INetworkingEntity, newAddedData: any) {
        alt.log(`Data changed on entity ${JSON.stringify(entity, null, 2)} to ${JSON.stringify(newAddedData, null, 2)}`);
        // TODO: when model changes ect.
    }

    onDisconnect() {
        for (const ped of this.peds.values()) {
            game.deleteEntity(ped.ped.pedId);
        }
    }
}

export default new PedStreamer();