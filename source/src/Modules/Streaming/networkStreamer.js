/// <reference path="../../../natives.d.ts" />
/// <reference path="../../../alt.d.ts" />

import * as alt from 'alt';
import * as game from "natives";
import networkingEntity from "networking-entity";
import pedStreamer from 'src/Modules/Streaming/pedStreamer.js';
import itemStreamer from 'src/Modules/Streaming/itemStreamer.js';

class EntityStreamer {
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

    async onStreamIn(entity) {
        alt.log(`Entity streamed in ${JSON.stringify(entity, null, 2)}`);
        if (typeof entity.data.entityType == 'undefined') return;
        if (entity.data.entityType.intValue === 1) { // Peds
            pedStreamer.onStreamIn(entity);
        } else if (entity.data.entityType.intValue === 2) { // Item
            itemStreamer.onStreamIn(entity);
        }
    }

    onStreamOut(entity) {
        alt.log(`Entity streamed out ${JSON.stringify(entity, null, 2)}`);
        if (typeof entity.data.entityType == 'undefined') return;
        if (entity.data.entityType.intValue === 1) { // Peds
            pedStreamer.onStreamOut(entity);
        } else if (entity.data.entityType.intValue === 2) { // Items
            itemStreamer.onStreamOut(entity);
        }
    }

    onDataChange(entity, newAddedData) {
        alt.log(`Data changed on entity ${JSON.stringify(entity, null, 2)} to ${JSON.stringify(newAddedData, null, 2)}`);
        //TODO: when model changes ect.
    }

}
const entityStreamer = new EntityStreamer();
export default entityStreamer;