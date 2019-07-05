import alt from 'alt';
import game from "natives";
import networkingEntity from "networking-entity";

class EntityStreamer {
    constructor() {
        networkingEntity.create();
        alt.log(`Created enity streamer`);
        this.peds = new Map();
        this.onStreamOut = this.onStreamOut.bind(this);
        this.onDataChange = this.onDataChange.bind(this);
        networkingEntity.onStreamOut(this.onStreamOut);
        networkingEntity.onDataChange(this.onDataChange);

        this.onStreamIn = this.onStreamIn.bind(this);
        networkingEntity.onStreamIn(this.onStreamIn);
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
const entityStreamer = new EntityStreamer();
export default entityStreamer;