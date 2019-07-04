import alt from 'alt';
import { create, onStreamIn, onStreamOut, onDataChange } from "src/Modules/Streaming/client.js";
import game from "natives";
import streamingView from 'src/Modules/Streaming/streamingView.js';

class EntityStreamer {
    constructor() {
        alt.log(`Created enity streamer`);
        create(streamingView.view);
        this.peds = new Map();
        this.onStreamIn = this.onStreamIn.bind(this);
        this.onStreamOut = this.onStreamOut.bind(this);
        this.onDataChange = this.onDataChange.bind(this);
        onStreamIn(this.onStreamIn);
        onStreamOut(this.onStreamOut);
        onDataChange(this.onDataChange);
    }

    onStreamIn(entity) {
        alt.log(`Entity streamed ${JSON.stringify(entity, null, 2)}`);
        const ped = game.createPed(2, 1885233650, entity.position.x, entity.position.y, entity.position.z, 61, false, true);
        this.peds.set(entity.id, ped);
    }

    onStreamOut(entity) {
        alt.log(`Entity streamed out ${JSON.stringify(entity, null, 2)}`);
        if (this.peds.has(entity.id)) {
            game.deleteEntity(this.peds.get(entity.id));
        }
    }

    onDataChange(entity, data) {
        alt.log(`Data changed on entity ${JSON.stringify(entity, null, 2)} to ${JSON.stringify(data, null, 2)}`);
        //TODO: when model changes ect.
    }

}

export default new EntityStreamer();