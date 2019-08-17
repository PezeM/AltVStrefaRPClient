import * as alt from 'alt';
import { IBlipWrapper } from 'source/src/Constans/interfaces';

class BlipsManager {
    blips: Map<number, alt.Blip>;
    constructor() {
        this.blips = new Map<number, alt.Blip>();

        alt.onServer("blipManagerLoadAllBlips", this.onLoadAllBlips.bind(this));
        alt.onServer("blipManagerAddedNewBlip", this.onAddedNewBlip.bind(this));
        alt.onServer("blipManagerRemovedBlip", this.onRemovedBlip.bind(this));

        alt.onServer("blipManagerUpdateBlipName", this.onUpdateBlipName.bind(this));
    }

    createNewBlip(newBlip: IBlipWrapper) {
        const blip = new alt.PointBlip(newBlip.position.x, newBlip.position.y, newBlip.position.z);
        blip.name = newBlip.name;
        blip.sprite = newBlip.sprite;
        blip.color = newBlip.color;
        return blip;
    }

    onAddedNewBlip(newBlip: IBlipWrapper) {
        alt.log('New blip event triggered. New blip is ' + JSON.stringify(newBlip, null, 2));
        const blip = this.createNewBlip(newBlip);
        this.blips.set(newBlip.id, blip);
    }

    onRemovedBlip(blipId: number) {

    }

    onLoadAllBlips(blipsList: IBlipWrapper[]) {
        if (blipsList == null) return;
        alt.log(`Blip lists: ${JSON.stringify(blipsList, null, 2)}`);
        alt.log(`Loading ${blipsList.length} blips`);
        blipsList.forEach(blip => {
            this.onAddedNewBlip(blip);
        });
    }

    onUpdateBlipName(blipId: number, blipName: string) {
        if (!this.blips.has(blipId)) return;
        const blipToUpdate = this.blips.get(blipId) as alt.Blip;
        blipToUpdate.name = blipName;
        alt.log(`Updated blip ${blipId} name to ${blipToUpdate.name}`);
    }
}

const blipsManager = new BlipsManager();
export default blipsManager;