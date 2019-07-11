import * as alt from 'alt';
import * as game from "natives";
import utils from 'source/src/Helpers/utility';
import { draw3DText } from 'source/src/Helpers/uiHelper';
import { INetworkingEntity } from 'networking-entity';

interface INetworkingItem extends INetworkingEntity {
    item: {
        id: number,
        object: number,
        name: string,
        count: number
    }
}

class ItemStreamer {
    streamedItems: Map<number, INetworkingItem>;
    tickInterval: number;
    constructor() {
        alt.log(`Created item streamer`);
        this.streamedItems = new Map();
        this.tickInterval = alt.setInterval(this.render.bind(this), 0);
        alt.on('disconnect', this.onDisconnect.bind(this));
    }

    render() {
        for (const item of this.streamedItems.values()) {
            draw3DText(`~y~(${item.item.count}) \n ~w~${item.item.name}`, [item.position.x, item.position.y, item.position.z],
                4, [255, 255, 255, 255], 0.5);
        }
    }

    async onStreamIn(entity: INetworkingEntity) {
        await utils.loadModelAsync(entity.data.model.stringValue as string);
        const gameObject = game.createObject(game.getHashKey(entity.data.model.stringValue as string), entity.position.x, entity.position.y, entity.position.z,
            true, false, true);
        game.placeObjectOnGroundProperly(gameObject);
        game.setEntityCollision(gameObject, true, true);
        entity.item = {
            id: entity.data.id.intValue,
            object: gameObject,
            name: entity.data.name.stringValue,
            count: entity.data.count.intValue
        }
        this.streamedItems.set(entity.id, entity as INetworkingItem);
    }

    onStreamOut(entity: INetworkingEntity) {
        if (this.streamedItems.has(entity.id)) {
            alt.log(`Deleting item`);
            game.deleteEntity((this.streamedItems.get(entity.id) as INetworkingItem).item.object);
            this.streamedItems.delete(entity.id);
        }
    }

    onDataChange(entity: INetworkingEntity, newAddedData: any) {
        alt.log(`Data changed on entity ${JSON.stringify(entity, null, 2)} to ${JSON.stringify(newAddedData, null, 2)}`);
        // TODO: when model changes ect.
    }

    onDisconnect() {
        for (const item of this.streamedItems.values()) {
            game.deleteEntity(item.item.object);
        }
    }
}

export default new ItemStreamer();