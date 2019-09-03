import * as alt from 'alt';
import * as native from 'natives';
import { INetworkingEntity, INetworkingDataChange } from 'networking-entity';
import { INetworkingMarker, IClientSideMarker } from 'source/src/Constans/interfaces';
import maths from 'source/src/Helpers/maths';
import IdGenerator from 'source/src/Modules/Core/idGenerator';

const localPlayer = alt.Player.local;

class MarkerManager {
    markers: Map<number, INetworkingMarker>;
    tickInterval: number;
    private clientSideMarkers: Map<number, IClientSideMarker>;
    private markerDistanceCheckInterval: number;
    private idGenerator: IdGenerator;
    private clientSideMarkersToRender: IClientSideMarker[];

    constructor() {
        this.markers = new Map();
        this.clientSideMarkers = new Map();
        this.clientSideMarkersToRender = [];
        this.idGenerator = new IdGenerator(0);

        this.tickInterval = alt.setInterval(this.onTickInterval.bind(this), 0);
        this.markerDistanceCheckInterval = alt.setInterval(this.onMarkerDistanceCheckInterval.bind(this), 500);
    }

    onTickInterval() {
        for (const marker of this.markers.values()) {
            native.drawMarker(marker.marker.type,
                marker.position.x, marker.position.y, marker.position.z,
                0, 0, 0,
                0, 0, 0,
                marker.marker.scaleX, marker.marker.scaleY, marker.marker.scaleZ,
                marker.marker.red, marker.marker.green, marker.marker.blue, marker.marker.alpha,
                false, false, 2, true, undefined, undefined, false);

            // false, false, 2, false, undefined, undefined, false
        }

        for (let i = 0; i < this.clientSideMarkersToRender.length; i++) {
            const marker = this.clientSideMarkersToRender[i];
            native.drawMarker(marker.type,
                marker.pos.x, marker.pos.y, marker.pos.z,
                0, 0, 0,
                0, 0, 0,
                marker.scaleX, marker.scaleY, marker.scaleZ,
                marker.red, marker.green, marker.blue, marker.alpha,
                true, false, 2, true, undefined, undefined, false);

        }
    }

    onMarkerDistanceCheckInterval() {
        const localPlayerPosition = localPlayer.pos;
        this.clientSideMarkersToRender.length = 0;
        for (const marker of this.clientSideMarkers.values()) {
            if (maths.distance(localPlayerPosition, marker.pos) <= marker.range) {
                this.clientSideMarkersToRender.push(marker);
            }
        }
    }

    addMarker(type: number, position: Vector3, scale: Vector3, r: number, g: number, b: number, a: number, range: number = 10): IClientSideMarker {
        const newMarker: IClientSideMarker = {
            id: this.idGenerator.getNextId(),
            type,
            pos: position,
            scaleX: scale.x,
            scaleY: scale.y,
            scaleZ: scale.z,
            red: r,
            green: g,
            blue: b,
            alpha: a,
            range
        }

        this.clientSideMarkers.set(newMarker.id, newMarker);
        return newMarker;
    }

    removeMarker(markerId: number) {
        if (this.clientSideMarkers.has(markerId)) {
            return this.clientSideMarkers.delete(markerId);
        }
        return false;
    }

    onStreamIn(entity: INetworkingEntity) {
        (entity as INetworkingMarker).marker = {
            type: entity.data.type.intValue as number,
            red: entity.data.red.intValue as number,
            green: entity.data.green.intValue as number,
            blue: entity.data.blue.intValue as number,
            alpha: entity.data.alpha.intValue as number,
            scaleX: entity.data.scaleX.doubleValue as number,
            scaleY: entity.data.scaleY.doubleValue as number,
            scaleZ: entity.data.scaleZ.doubleValue as number
        };

        this.markers.set(entity.id, entity as INetworkingMarker);
    }

    onStreamOut(entity: INetworkingEntity) {
        if (this.markers.has(entity.id)) {
            this.markers.delete(entity.id);
        }
    }

    onDataChange(entity: INetworkingEntity, changedData: INetworkingDataChange) {
        const marker = this.markers.get(entity.id);
        if (marker == null) return;
        (marker.marker as any)[changedData.key] = (changedData.value as any)[Object.keys(changedData.value)[0]];
    }
}

const markerManager = new MarkerManager();
export default markerManager;