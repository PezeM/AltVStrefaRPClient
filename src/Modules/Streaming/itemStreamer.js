/// <reference path="../../../natives.d.ts" />
/// <reference path="../../../alt.d.ts" />

import * as alt from 'alt';
import * as game from "natives";
import utils from 'src/Helpers/utility.js';
import uiHelpers from 'src/Helpers/uiHelpers.js';

class ItemStreamer {
    constructor() {
        alt.log(`Created item streamer`);
        this.items = new Map();
        this.tickInterval = alt.setInterval(this.render.bind(this), 0);
        alt.on('disconnect', this.onDisconnect.bind(this));
    }

    render() {
        for (let item of this.items.values()) {
            uiHelpers.drawText3D(`~y~(${item.item.count}) \n ~w~${item.item.name}`, [item.position.x, item.position.y, item.position.z + 0.5], 4, [255, 255, 255, 255], 0.5);
        }
    }

    async onStreamIn(entity) {
        await utils.loadModelAsync(entity.data.model.stringValue);
        const gameObject = game.createObject(game.getHashKey(entity.data.model.stringValue), entity.position.x, entity.position.y, entity.position.z, true, false, false);
        game.placeObjectOnGroundProperly(gameObject);
        game.setEntityCollision(gameObject, false, true);
        entity.item = {
            id: entity.data.id.intValue,
            object: gameObject,
            name: entity.data.name.stringValue,
            count: entity.data.count.intValue
        }
        this.items.set(entity.id, entity);
    }

    onStreamOut(entity) {
        if (this.items.has(entity.id)) {
            alt.log(`Deleting item`);
            game.deleteEntity(this.items.get(entity.id).item.object);
            this.items.delete(entity.id);
        }
    }

    onDataChange(entity, newAddedData) {
        alt.log(`Data changed on entity ${JSON.stringify(entity, null, 2)} to ${JSON.stringify(newAddedData, null, 2)}`);
        //TODO: when model changes ect.
    }

    onDisconnect() {
        for (let item of this.items.values()) {
            game.deleteEntity(item.item.object);
        }
    }
}

export default new ItemStreamer();