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
        // const entityHit = this.testItemInFront(1);
        const jest = this.itemInFront();
        game.showHudComponentThisFrame(14);
        if (!jest) return;
        // if (entityHit === 0) return;
        // if (entityHit !== this.nearestItem.item.object) return;
        draw3DText(`~g~[E] ~w~Aby podnieść`, [this.nearestItem.position.x, this.nearestItem.position.y, this.nearestItem.position.z + 0.1],
            4, [255, 255, 255, 255], 0.5);
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
        if (dot > 0.5) {
            return true
        } else {
            return false;
        }
    }

    private testItemInFront(maxDistance: number = 5) {
        const inFrontData = {
            pos: new alt.Vector3(0, 0, 0),
            dist: maxDistance,
            hitEntity: -1,
        };

        let position = game.getGameplayCamCoord();
        const heading = game.getEntityHeading(alt.Player.local.scriptID);
        position = this.findRot(position, heading, 0.5, 90);

        for (let i = 0; i < 180; i += 10) {
            const exitPosition = this.findRot(position, heading, 5, i);
            const capsuleTest = game.startShapeTestCapsule(position.x, position.y, position.z, exitPosition.x, exitPosition.y, exitPosition.z - i / 10,
                10, -1, alt.Player.local.scriptID, 7);
            const [_, didRaycastHit, endCoords, surfaceNormal, entityHit] = game.getShapeTestResult(capsuleTest, false,
                { x: 0, y: 0, z: 0 }, { x: 0, y: 0, z: 0 }, 0);
            if (didRaycastHit) {
                drawText(`Raycast hit. Entity ${entityHit} EndCoords: x: ${endCoords.x.toFixed(4)} y: ${endCoords.y.toFixed(4)} z: ${endCoords.z.toFixed(4)}`,
                    [0.8, 0.45], 4, [255, 255, 255, 255], 0.5);
                const distance = maths.distance(position, exitPosition);
                game.drawLine(position.x, position.y, position.z, exitPosition.x, exitPosition.y, exitPosition.z, 255, 0, 0, 255);
                drawText(`Distance: ${distance}`, [0.8, 0.4], 4, [255, 255, 255, 255], 0.5);
                if (distance < inFrontData.dist) {
                    inFrontData.pos = exitPosition;
                    inFrontData.dist = distance;
                    inFrontData.hitEntity = entityHit;
                    alt.log(`Setting the hit entity to ${entityHit}`);
                }

                if (entityHit === (this.nearestItem as INetworkingItem).item.object) {
                    drawText(`Trafiono item`, [0.8, 0.35], 4, [255, 255, 255, 255], 0.5);
                }
            }
        }

        // if (inFrontData.hitEntity !== -1) {
        drawText(`Entity ${inFrontData.hitEntity}`, [0.8, 0.35], 4, [255, 255, 255, 255], 0.5);
        // }

        return inFrontData.hitEntity;
    }

    private findRot(position: Vector3, heading: number, dist: number, rot: number) {
        const newVector = new alt.Vector3(position.x, position.y, position.z);
        const degrees = (heading + rot) * (Math.PI / 180);
        newVector.x = position.x + dist * Math.cos(degrees);
        newVector.y = position.y + dist * Math.sin(degrees);
        return newVector;
    }

    private testRaycast(raycastDistance: number = 25) {
        const pos = game.getGameplayCamCoord();
        const dir = maths.rotToDirection(game.getGameplayCamRot(2));
        const distance = raycastDistance;
        const farAway = {
            x: (pos.x + (dir.x * distance)),
            y: (pos.y + (dir.y * distance)),
            z: (pos.z + (dir.z * distance)),
        };
        drawText(`Faraway x: ${farAway.x} y: ${farAway.y} z: ${farAway.z}`, [0.5, 0.8], 4, [255, 255, 255, 255], 0.6);
        const raycastTest = game.startShapeTestRay(pos.x, pos.y, pos.z, farAway.x, farAway.y, farAway.z, 16, game.playerPedId(), 0);
        const [_, didRaycastHit, endCoords, surfaceNormal, entityHit] = game.getShapeTestResult(raycastTest, false,
            new alt.Vector3(0, 0, 0), new alt.Vector3(0, 0, 0), 0);
        game.drawLine(pos.x, pos.y, pos.z, farAway.x, farAway.y, farAway.z, 255, 0, 0, 255);

        if (didRaycastHit) {
            draw3DText(`Entity hit: ${entityHit} didRaycastHit: ${didRaycastHit}`, [endCoords.x, endCoords.y, endCoords.z], 4, [255, 255, 255, 255], 0.45);
        }

        return entityHit;
    }
}

const itemStreamer = new ItemStreamer();
export default itemStreamer;