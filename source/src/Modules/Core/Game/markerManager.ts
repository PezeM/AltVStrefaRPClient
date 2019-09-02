import * as alt from 'alt';
import * as native from 'natives';
import { INetworkingEntity } from 'networking-entity';

class MarkerManager {
    markers: Map<number, any>;
    tickInterval: number;

    constructor() {
        this.markers = new Map();

        this.tickInterval = alt.setInterval(this.onTickInterval.bind(this), 0);
    }

    onTickInterval() {
        for (const marker of this.markers.values()) {

        }
    }

    onStreamIn(marker: INetworkingEntity) {
        this.markers.set(marker.id, marker);
    }

    onStreamOut(marker: INetworkingEntity) {
        if (this.markers.has(marker.id)) {
            this.markers.delete(marker.id);
        }
    }
}

const markerManager = new MarkerManager();
export default markerManager;