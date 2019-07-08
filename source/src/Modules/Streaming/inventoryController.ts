import alt from 'alt';
import game from 'natives';
import math from 'source/src/Helpers/maths';
import { draw3DText } from 'source/src/Helpers/uiHelper';
import utils from 'source/src/Helpers/utility.js';
const player = alt.getLocalPlayer();
const STREAM_DISTANCE = 40;
const STREAM_DISTANCE_SQRT = STREAM_DISTANCE * STREAM_DISTANCE;
const droppedItems = new Map();

class DroppedItemsController {
    streamedItems: Map<any, any>;
    tickInterval: number;
    streamInterval: number;
    constructor() {
        alt.log(`Created inventory controller streamer`);
        this.streamedItems = new Map();

        this.tickInterval = alt.setInterval(this.render.bind(this), 0);
        this.streamInterval = alt.setInterval(this.streamer.bind(this), 2000);
    }

    streamer() {
        for (const item of droppedItems.values()) {
            const distance = math.distance(player.pos, item);
            if (distance < STREAM_DISTANCE_SQRT) {
                if (!this.streamedItems.has(item.object)) {
                    this.streamedItems.set(item.object, item);
                    alt.log(`Dropped item ${item.name} is now visible for you`);
                }
            } else if (this.streamedItems.has(item.object) && distance >= STREAM_DISTANCE_SQRT) {
                this.streamedItems.delete(item.object);
            }
        }
    }

    render() {
        for (const item of this.streamedItems.values()) {
            // Draw text for each streamed items with name/quantity
            draw3DText(`~y~(${item.count}) \n ~w~${item.name}`, [item.x, item.y, item.z + 0.5], 4, [255, 255, 255, 255], 0.5);
        }
    }

    isItem(id: number) {
        if (this.streamedItems.has(id)) {
            alt.onServer('pickupItem', this.streamedItems.get(id).id);
            return true;
        } else return false;
    }
}

const droppedItemsController = new DroppedItemsController();

alt.onServer('streamInDroppedItem', async (droppedItem: any) => {
    alt.log(`Item ${JSON.stringify(droppedItem, null, 2)} streamed in`);
    await utils.loadModelAsync(droppedItem.model);
    const gameObject = game.createObject(game.getHashKey(droppedItem.model), droppedItem.x, droppedItem.y, droppedItem.z, true, false, false);
    game.setEntityCollision(gameObject, false, false);
    droppedItem.object = gameObject;
    droppedItems.set(droppedItem.id, droppedItem);
    alt.log(droppedItems.has(droppedItem.id));
    alt.log(`New dropped items map = ${JSON.stringify(droppedItems, null, 2)}`);
});

alt.onServer('streamOutDroppedItem', (itemId: number) => {
    alt.log(`Streaming out item id ${itemId}`);

    if (droppedItems.has(itemId)) {
        game.deleteObject(droppedItems.get(itemId).object);
        droppedItems.delete(itemId);
    }

    if (droppedItemsController.streamedItems.has(itemId)) {
        droppedItemsController.streamedItems.delete(itemId);
    }
});

alt.onServer('streamInMultipleItems', async (items: any[]) => {
    for (let i = 0; i < items.length; i++) {
        const droppedItem = items[i];
        await utils.loadModelAsync(droppedItem.model);
        const gameObject = game.createObject(game.getHashKey(droppedItem.model), droppedItem.x, droppedItem.y, droppedItem.z, true, false, false);
        game.setEntityCollision(gameObject, false, false);
        droppedItem.object = gameObject;
        droppedItems.set(droppedItem.id, droppedItem);
        alt.log(`New dropped items array = ${JSON.stringify(droppedItems, null, 2)}`);
    }
});

alt.onServer('testInventory', (inventory: string, equippedItems: string) => {
    alt.log(`Inventory = ${JSON.stringify(JSON.parse(inventory), null, 2)}`);
    alt.log(`Equipped items = ${JSON.stringify(JSON.parse(equippedItems), null, 2)}`);
});

export default droppedItemsController;