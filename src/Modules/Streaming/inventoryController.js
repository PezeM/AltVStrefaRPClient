import alt from 'alt';
import game from 'natives';
import math from 'src/Helpers/maths.js';
import uiHelpers from 'src/Helpers/uiHelpers.js';
import utils from 'src/Helpers/utility.js';
const player = alt.getLocalPlayer();
const STREAM_DISTANCE = 40;
const STREAM_DISTANCE_SQRT = STREAM_DISTANCE * STREAM_DISTANCE;

// const testItem = {
//     id,
//     x,
//     y,
//     z,
//     name,
//     model,
//     object,
//     count,
// };
const droppedItems = new Map();

class DroppedItemsController {
    constructor() {
        alt.log(`Created inventory controller streamer`);
        this.streamedItems = new Map();

        this.tickInterval = alt.setInterval(this.render.bind(this), 0);
        this.streamInterval = alt.setInterval(this.streamer.bind(this), 2000);
    }

    streamer() {
        for (let item of droppedItems.values()) {
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
        for (let item of this.streamedItems.values()) {
            // Draw text for each streamed items with name/quantity
            uiHelpers.drawText3D(`~y~(${item.count}) \n ~w~${item.name}`, [item.x, item.y, item.z + 0.5], 4, [255, 255, 255, 255], 0.5);
        }
    }

    isItem(id) {
        if (this.streamedItems.has(scriptID)) {
            alt.onServer('pickupItem', this.streamedItems.get(scriptID).id);
            return true;
        } else return false;
    }
}

const droppedItemsController = new DroppedItemsController();

alt.onServer('streamInDroppedItem', async (droppedItem) => {
    alt.log(`Item ${JSON.stringify(droppedItem, null, 2)} streamed in`);
    await utils.loadModelAsync(droppedItem.model);
    const gameObject = game.createObject(game.getHashKey(droppedItem.model), droppedItem.x, droppedItem.y, droppedItem.z, true, false, false);
    game.setEntityCollision(gameObject, false, false);
    droppedItem.object = gameObject;
    droppedItems.set(droppedItem.id, droppedItem);
    alt.log(droppedItems.has(droppedItem.id));
    alt.log(`New dropped items map = ${JSON.stringify(droppedItems, null, 2)}`);
});

alt.onServer('streamOutDroppedItem', itemId => {
    alt.log(`Streaming out item id ${itemId}`);

    if (droppedItems.has(itemId)) {
        game.deleteObject(droppedItems.get(itemId).object);
        droppedItems.delete(itemId);
    }

    if (droppedItemsController.streamedItems.has(itemId)) {
        droppedItemsController.streamedItems.delete(itemId);
    }
});

alt.onServer('streamInMultipleItems', async (items) => {
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        await utils.loadModelAsync(item.model);
        const gameObject = game.createObject(game.getHashKey(droppedItem.model), droppedItem.x, droppedItem.y, droppedItem.z, true, false, false);
        game.setEntityCollision(gameObject, false, false);
        droppedItem.object = gameObject;
        droppedItems.push(droppedItem);
        alt.log(`New dropped items array = ${JSON.stringify(droppedItems, null, 2)}`);
    }
});

alt.onServer('testInventory', inventory => {
    let inventoryParsed = JSON.parse(inventory);
    alt.log(`Inventory = ${JSON.stringify(inventoryParsed, null, 4)}`);
});

export default droppedItemsController;