import * as alt from 'alt';
import * as game from "natives";
import utils from 'source/src/Helpers/utility';
import { draw3DText, drawText } from 'source/src/Helpers/uiHelper';
import { INetworkingEntity } from 'networking-entity';
import { INetworkingItem } from 'source/src/Constans/interfaces';
import maths from 'source/src/Helpers/maths';

const ITEM_TEXT_DISTANCE = 4;
const ITEM_TEXT_DISTANCE_SQRT = ITEM_TEXT_DISTANCE * ITEM_TEXT_DISTANCE;

class ItemStreamer {
    streamedItems: Map<number, INetworkingItem>;
    tickInterval: number;
    closestItemInterval: number;
    nearestItem: INetworkingItem | null;
    canPickupItem: boolean;

    constructor() {
        alt.log(`Created item streamer`);
        this.streamedItems = new Map();
        this.nearestItem = null;
        this.canPickupItem = false;
        this.closestItemInterval = alt.setInterval(this.findClosestItem.bind(this), 250);
        this.tickInterval = alt.setInterval(this.render.bind(this), 0);
        alt.on('disconnect', this.onDisconnect.bind(this));
    }

    findClosestItem() {
        this.nearestItem = null;
        const playerPosition = alt.Player.local.pos;
        let closestDistance = ITEM_TEXT_DISTANCE_SQRT;
        for (const item of this.streamedItems.values()) {
            const distance = maths.distance(playerPosition, item.position);

            if (distance < closestDistance) {
                closestDistance = distance;
                this.nearestItem = item;
            }
        }
    }

    render() {
        this.canPickupItem = false;
        if (this.nearestItem == null) return;
        if (!game.isEntityOnScreen(this.nearestItem.item.object)) return;

        draw3DText(`~y~(${this.nearestItem.item.count}) \n ~w~${this.nearestItem.item.name}`,
            [this.nearestItem.position.x, this.nearestItem.position.y, this.nearestItem.position.z],
            4, [255, 255, 255, 255], 0.5, true, false);
        const isItemInFront = this.itemInFront();
        game.showHudComponentThisFrame(14);
        if (!isItemInFront) return;
        draw3DText(`~g~[E] ~w~Aby podnieść`, [this.nearestItem.position.x, this.nearestItem.position.y, this.nearestItem.position.z + 0.1],
            4, [255, 255, 255, 255], 0.5, true, false);
        this.canPickupItem = true;
    }

    async onStreamIn(entity: INetworkingEntity) {
        await utils.loadModelAsync(entity.data.model.stringValue as string);
        const gameObject = game.createObject(game.getHashKey(entity.data.model.stringValue as string), entity.position.x, entity.position.y, entity.position.z,
            true, false, true);
        game.placeObjectOnGroundProperly(gameObject);
        game.setEntityCollision(gameObject, false, true);
        game.freezeEntityPosition(gameObject, true);

        (entity as INetworkingItem).item = {
            id: entity.data.id.intValue as number,
            object: gameObject,
            name: entity.data.name.stringValue as string,
            count: entity.data.count.intValue as number
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

    private itemInFront() {
        const itemPosition = (this.nearestItem as INetworkingItem).position;
        const playerPosition = alt.Player.local.pos;
        const playerForwardVector = game.getEntityForwardVector(game.playerPedId());
        drawText(`Player vector x: ${playerForwardVector.x.toFixed(4)} y: ${playerForwardVector.y.toFixed(4)} z: ${playerForwardVector.z.toFixed(4)}`,
            [0.5, 0.8], 4, [255, 255, 255, 255], 0.5);
        drawText(`Item vector x: ${itemPosition.x.toFixed(4)} y: ${itemPosition.y.toFixed(4)} z: ${itemPosition.z.toFixed(4)}`,
            [0.5, 0.75], 4, [255, 255, 255, 255], 0.5);

        const substractedPosition = maths.substract(itemPosition, playerPosition);
        drawText(`Substracted vector x: ${substractedPosition.x.toFixed(4)} y: ${substractedPosition.y.toFixed(4)} z: ${substractedPosition.z.toFixed(4)}`,
            [0.5, 0.7], 4, [255, 255, 255, 255], 0.5);
        const normalizedPosition = maths.normalize(substractedPosition);
        drawText(`Normalized vector x: ${normalizedPosition.x.toFixed(4)} y: ${normalizedPosition.y.toFixed(4)} z: ${normalizedPosition.z.toFixed(4)}`,
            [0.5, 0.65], 4, [255, 255, 255, 255], 0.5);

        const dot = maths.dot(normalizedPosition, playerForwardVector);
        drawText(`Dot: ${dot.toFixed(2)}`, [0.5, 0.6], 4, [255, 255, 255, 255], 0.5);
        return dot > 0.9;
    }
}

const itemStreamer = new ItemStreamer();
export default itemStreamer;