import * as game from 'natives';
import * as alt from 'alt';

let localPlayer = alt.getLocalPlayer();
alt.on('gameEntityDelete', (entity) => {
    alt.log(`gameEntityDelete ${JSON.stringify(entity)}`);
    if (typeof entity.syncedObject !== 'undefined') {
        alt.log('Deleting synced object for entity');
        deleteObject(player);
    }
});

alt.on('gameEntityCreate', (entity) => {
    if (entity.type !== 0) return; // Only for players
    alt.log(`gameEntityCreate ${JSON.stringify(entity)}`);
    var streamObject = entity.getSyncedMeta("SyncObject");
    alt.log(`Stream object is ${streamObject}`);
    if (typeof streamObject === 'undefined' || streamObject === null) return;
    var objectData = JSON.parse(streamObject);
    alt.log(`gameEntityCreate objectData: ${objectData}`);

    if (typeof player.syncedObject === 'undefined') {
        alt.log('No syncedObjects for targeted player.');
        createObject(player, objectData);
    } else {
        alt.log(`Found syncedObjects for targeted player with data: ${player.syncedObject}`);
        deleteObject(player);
        createObject(player, objectData);
    }
});

alt.on('syncedMetaDataChange ', (newData) => {
    alt.log(`syncedMetaDataChange  ${JSON.stringify(newData)}`);
});

alt.onServer("objectStreamUpdate", (playerId, streamObject) => {
    alt.log('Triggered object stream update client-side');
    alt.log(`All players: ${JSON.stringify(alt.Player.all)}`);
    let player = alt.Player.all.find(p => p.id === playerId);
    if (player == null || player.id === localPlayer.id) return;
    alt.log(`objectStreamUpdate player: ${JSON.stringify(player)}`);
    var objectData = JSON.parse(streamObject);
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

function createObject(player, objectData) {
    var objectId = game.createObject(game.getHashKey(objectData.objectModel), player.pos.x, player.pos.y, player.pos.z + objectData.propExtraZ, true, false, false);
    alt.log(`Created object with id: ${objectId}`);
    game.attachEntityToEntity(objectId, player.scriptID, game.getPedBoneIndex(localPlayer.scriptID, objectData.boneIndex),
        objectData.positionX, objectData.positionY, objectData.positionZ,
        objectData.rotationX, objectData.rotationY, objectData.rotationZ, true, true, true, true, 0, true);
    player.syncedObject = objectId;
}

function deleteObject(player) {
    game.detachEntity(player.syncedObject, true, true);
    game.deleteObject(player.syncedObject);
    player.syncedObject = null;
}