import * as alt from 'alt';
import * as native from 'natives';
import { INetworkingEntity } from 'networking-entity';
import { INetworkingMarker, IClientSideMarker } from 'source/src/Constans/interfaces';
import maths from 'source/src/Helpers/maths';

const localPlayer = alt.Player.local;

class MarkerManager {
    markers: Map<number, INetworkingMarker>;
    clientSideMarkers: Map<number, IClientSideMarker>;
    tickInterval: number;
    markerDistanceCheckInterval: number;
    clientSideMarkersToRender: IClientSideMarker[];

    constructor() {
        this.markers = new Map();
        this.clientSideMarkers = new Map();
        this.clientSideMarkersToRender = [];

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
                true, false, 2, true, undefined, undefined, false);
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

    onStreamIn(entity: INetworkingEntity) {
        (entity as INetworkingMarker).marker = {
            type: entity.data.type.intValue as number,
            red: entity.data.type.intValue as number,
            green: entity.data.type.intValue as number,
            blue: entity.data.type.intValue as number,
            alpha: entity.data.type.intValue as number,
            scaleX: entity.data.type.intValue as number,
            scaleY: entity.data.type.intValue as number,
            scaleZ: entity.data.type.intValue as number
        };

        this.markers.set(entity.id, entity as INetworkingMarker);
    }

    onStreamOut(marker: INetworkingEntity) {
        if (this.markers.has(marker.id)) {
            this.markers.delete(marker.id);
        }
    }
}

const markerManager = new MarkerManager();
export default markerManager;