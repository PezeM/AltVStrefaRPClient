import * as alt from 'alt';
import networkingEntity, { INetworkingEntity } from "networking-entity";
import pedStreamer from 'src/Modules/Streaming/pedStreamer';
import itemStreamer from 'src/Modules/Streaming/itemStreamer';

class NetworkStreamer {
    constructor() {
        networkingEntity.create();
        alt.log(`Created enity streamer`);
        this.onStreamIn = this.onStreamIn.bind(this);
        this.onStreamOut = this.onStreamOut.bind(this);
        this.onDataChange = this.onDataChange.bind(this);
        networkingEntity.onStreamIn(this.onStreamIn);
        networkingEntity.onStreamOut(this.onStreamOut);
        networkingEntity.onDataChange(this.onDataChange);
    }

    onStreamIn(entity: INetworkingEntity) {
        alt.log(`Entity streamed in ${JSON.stringify(entity, null, 2)}`);
        if (typeof entity.data.entityType === 'undefined') return;
        if (entity.data.entityType.intValue === 1) { // Peds
            pedStreamer.onStreamIn(entity);
        } else if (entity.data.entityType.intValue === 2) { // Item
            itemStreamer.onStreamIn(entity);
        }
    }

    onStreamOut(entity: INetworkingEntity) {
        alt.log(`Entity streamed out ${JSON.stringify(entity, null, 2)}`);
        if (typeof entity.data.entityType === 'undefined') return;
        if (entity.data.entityType.intValue === 1) { // Peds
            pedStreamer.onStreamOut(entity);
        } else if (entity.data.entityType.intValue === 2) { // Items
            itemStreamer.onStreamOut(entity);
        }
    }

    onDataChange(entity: INetworkingEntity, newAddedData: any) {
        alt.log(`Data changed on entity ${JSON.stringify(entity, null, 2)} to ${JSON.stringify(newAddedData, null, 2)}`);
        // TODO: when model changes ect.
    }

}
const entityStreamer = new NetworkStreamer();
export default entityStreamer;