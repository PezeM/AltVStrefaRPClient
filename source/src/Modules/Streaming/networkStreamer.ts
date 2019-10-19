import * as alt from 'alt';
import networkingEntity, { INetworkingEntity, INetworkingDataChange } from "networking-entity";
import pedStreamer from 'source/src/Modules/Streaming/pedStreamer';
import itemStreamer from 'source/src/Modules/Streaming/itemStreamer';
import markerManager from 'source/src/Modules/Core/Game/markerManager';

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
        // if (typeof entity.data.entityType === 'undefined') return;
        if (entity.data.entityType.intValue === 1) { // Peds
            pedStreamer.onStreamIn(entity);
        } else if (entity.data.entityType.intValue === 2) { // Item
            itemStreamer.onStreamIn(entity);
        } else if (entity.data.entityType.intValue === 3) {
            markerManager.onStreamIn(entity);
        }
    }

    onStreamOut(entity: INetworkingEntity) {
        alt.log(`Entity streamed out ${JSON.stringify(entity, null, 2)}`);
        // if (typeof entity.data.entityType === 'undefined') return;
        if (entity.data.entityType.intValue === 1) { // Peds
            pedStreamer.onStreamOut(entity);
        } else if (entity.data.entityType.intValue === 2) { // Items
            itemStreamer.onStreamOut(entity);
        } else if (entity.data.entityType.intValue === 3) {
            markerManager.onStreamOut(entity);
        }
    }

    onDataChange(entity: INetworkingEntity, changedData: INetworkingDataChange) {
        alt.log(`Data changed on entity ${JSON.stringify(entity, null, 2)}. Changed data ${JSON.stringify(changedData, null, 2)}`);
        // if (typeof entity.data.entityType === 'undefined') return;
        if (entity.data.entityType.intValue === 1) {

        } else if (entity.data.entityType.intValue === 2) {

        } else if (entity.data.entityType.intValue === 3) {
            markerManager.onDataChange(entity, changedData);
        }
        // TODO: when model changes ect.
    }

}

const entityStreamer = new NetworkStreamer();
export default entityStreamer;
