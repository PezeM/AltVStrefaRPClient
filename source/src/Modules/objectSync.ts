import * as game from 'natives';
import * as alt from 'alt';

const localPlayer = alt.getLocalPlayer();
alt.on('gameEntityDelete', (entity: any) => {
    if (entity instanceof alt.Player) {
        alt.log(`gameEntityDelete ${JSON.stringify(entity)}`);
        if (typeof entity.syncedObject !== 'undefined') {
            alt.log('Deleting synced object for entity');
            deleteObject(entity);
        }
    }
});

alt.on('gameEntityCreate', (entity: any) => {
    if (entity instanceof alt.Player) {
        alt.log(`gameEntityCreate ${JSON.stringify(entity)}`);
        const streamObject = entity.getSyncedMeta("SyncObject");
        alt.log(`Stream object is ${streamObject}`);
        if (typeof streamObject === 'undefined' || streamObject === null) return;
        const objectData = JSON.parse(streamObject);
        alt.log(`gameEntityCreate objectData: ${objectData}`);

        if (typeof entity.syncedObject === 'undefined') {
            alt.log('No syncedObjects for targeted player.');
            createObject(entity, objectData);
        } else {
            alt.log(`Found syncedObjects for targeted player with data: ${entity.syncedObject}`);
            deleteObject(entity);
            createObject(entity, objectData);
        }
    }
});

alt.on('syncedMetaDataChange ', (entity: any, key: any, value: any) => {
    alt.log(`syncedMetaDataChange  ${JSON.stringify(value)}`);
});

alt.onServer("objectStreamUpdate", (playerId: number, streamObject: any) => {
    alt.log('Triggered object stream update client-side');
    alt.log(`All players: ${JSON.stringify(alt.Player.all)}`);
    const player = alt.Player.all.find(p => p.id === playerId);
    if (player == null || player.id === localPlayer.id) return;
    alt.log(`objectStreamUpdate player: ${JSON.stringify(player)}`);
    const objectData = JSON.parse(streamObject);
    // if (objectData == null) return;
    alt.log(`objectStreamUpdate objectData: ${JSON.stringify(objectData)}`);

    if (typeof player.syncedObject === 'undefined' && objectData) {
        alt.log('No syncedObjects for targeted player.');
        createObject(player, objectData);
    } else {
        alt.log(`Found syncedObjects for targeted player with data: ${player.syncedObject}`);
        deleteObject(player);
        if (objectData)
            createObject(player, objectData);
    }
});

function createObject(player: alt.Player, objectData: any) {
    const objectId = game.createObject(game.getHashKey(objectData.objectModel), player.pos.x, player.pos.y, player.pos.z + objectData.propExtraZ,
        true, false, false);
    alt.log(`Created object with id: ${objectId}`);
    game.attachEntityToEntity(objectId, player.scriptID, game.getPedBoneIndex(localPlayer.scriptID, objectData.boneIndex),
        objectData.positionX, objectData.positionY, objectData.positionZ,
        objectData.rotationX, objectData.rotationY, objectData.rotationZ, true, true, true, true, 0, true);
    player.syncedObject = objectId;
}

function deleteObject(player: alt.Player) {
    game.detachEntity(player.syncedObject, true, true);
    game.deleteObject(player.syncedObject);
    player.syncedObject = null;
}