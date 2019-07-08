import * as alt from 'alt';
import * as game from 'natives';
import { requestScaleform } from 'source/src/Helpers/scaleform';
import maths from 'source/src/Helpers/maths';
import { GameState } from 'source/src/Constans/enums';

const NICKNAME_VISIBLE_DISTANCE = 60;
const NICKNAME_VISIBLE_DISTANCE_SQRT = NICKNAME_VISIBLE_DISTANCE * NICKNAME_VISIBLE_DISTANCE;
const NICKNAME_RESERVERD_SCALEFORMS = 14;

const nearestPlayers: any = {};

class NicknameController {
    tickInterval: number;
    hundredMsInterval: number;
    scaleformsArray: any[];
    constructor() {
        this.tickInterval = alt.setInterval(this.render.bind(this), 0);
        this.hundredMsInterval = alt.setInterval(this.calculatePlayers.bind(this), 100);
        alt.on('gameEntityDestroyed', this.entityDestroyed.bind(this));

        this.scaleformsArray = [];
        for (let i = 1; i < NICKNAME_RESERVERD_SCALEFORMS; i++) {
            const numberText = (i < 10) ? (`0${i}`) : i.toString();
            const scaleform = requestScaleform(`player_name_${numberText}`);
            this.scaleformsArray.push({
                scaleform,
                used: false
            });
        }
    }

    reserveScaleform() {
        for (let i = 0; i < this.scaleformsArray.length; i++) {
            if (!this.scaleformsArray[i].used) {
                alt.log(`Scaleform ${i} reserved`);
                this.scaleformsArray[i].used = true;
                return this.scaleformsArray[i].scaleform;
            }
        }
        return null;
    }

    freeScaleform(scaleform: any) {
        for (let i = 0; i < this.scaleformsArray.length; i++) {
            if (this.scaleformsArray[i].scaleform === scaleform) {
                if (this.scaleformsArray[i].used) {
                    alt.log(`Scaleform ${i} freed`);
                    this.scaleformsArray[i].used = false;
                    return true;
                }
            }
        }
        return false;
    }

    render() {
        for (const i in nearestPlayers) {
            const p = nearestPlayers[i];
            if (!p.scaleform) continue;
            if (!p.scaleform.isLoaded()) continue;

            const pos = game.getWorldPositionOfEntityBone(p.player.scriptID, game.getEntityBoneIndexByName(p.player.scriptID, 'IK_Head'));
            const camRot = game.getGameplayCamRot(2);
            const isInVehicle = !!p.player.vehicle;
            p.scaleform.draw3D(pos.x, pos.y, pos.z + (isInVehicle ? 0.8 : 0.3), camRot.x, camRot.y, camRot.z, 0, 1, 1, 2, 1, -1, 1);
        }
    }

    calculatePlayers() {
        for (let i = 0; i < alt.Player.all.length; i++) {
            if (alt.Player.all[i].scriptID === 0) continue;

            const player = alt.Player.all[i];
            const dist = maths.distance(player.pos, alt.getLocalPlayer().pos);
            if (dist < NICKNAME_VISIBLE_DISTANCE_SQRT) {
                if (player.scriptID in nearestPlayers) {
                    nearestPlayers[player.scriptID].distance = dist;
                    nearestPlayers[player.scriptID].player = player;
                } else {
                    alt.log(`Player with ID ${player.scriptID} nickname just streamed in`);
                    nearestPlayers[player.scriptID] = {
                        distance: dist,
                        scaleform: null,
                        name: player.name,
                        player
                    }
                }
            } else if (player.scriptID in nearestPlayers) {
                if (nearestPlayers[player.scriptID].scaleform) {
                    this.freeScaleform(nearestPlayers[player.scriptID].scaleform);
                }
                delete nearestPlayers[player.scriptID];
            }
        }

        if (Object.keys(nearestPlayers).length > NICKNAME_RESERVERD_SCALEFORMS) {
            const distances = [];
            for (const i in nearestPlayers) {
                distances.push(nearestPlayers[i].distance);
            }

            distances.sort((a, b) => {
                if (a < b) return -1;
                else if (a > b) return 1;
                return 0;
            });

            const maxDistance = distances[NICKNAME_RESERVERD_SCALEFORMS - 1];
            for (const i in nearestPlayers) {
                const nearestPlayer = nearestPlayers[i];
                if (nearestPlayer.distance > maxDistance) {
                    if (nearestPlayer.scaleform) {
                        this.freeScaleform(nearestPlayer.scaleform);
                        nearestPlayer.scaleform = null;
                    }
                } else {
                    if (!nearestPlayer.scaleform) {
                        const nextScaleform = this.reserveScaleform();
                        if (nextScaleform) {
                            alt.log(JSON.stringify(nearestPlayer, null, 4));
                            nextScaleform.SET_PLAYER_NAME(nearestPlayer.name);
                            nearestPlayer.scaleform = nextScaleform;
                        }
                    }
                }
            }
        } else {
            for (const i in nearestPlayers) {
                if (!nearestPlayers[i].scaleform) {
                    const nextScaleform = this.reserveScaleform();
                    if (nextScaleform) {
                        alt.log(JSON.stringify(nearestPlayers[i], null, 4));
                        nextScaleform.SET_PLAYER_NAME(nearestPlayers[i].name);
                        nearestPlayers[i].scaleform = nextScaleform;
                    }
                }
            }
        }
    }

    entityDestroyed(entity: any) {
        if (entity instanceof alt.Player) {
            const player = entity;
            if (player.scriptID in nearestPlayers) {
                delete nearestPlayers[player.scriptID];
            }
        }
    }
}

alt.on('gameStateChanged', (state: GameState) => {
    if (state === GameState.Playing) {
        alt.log('Initializing nicknames controller');
        const nicknameController = new NicknameController();
    }
})
