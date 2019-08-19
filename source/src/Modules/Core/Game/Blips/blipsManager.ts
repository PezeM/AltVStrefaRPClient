import * as alt from 'alt';
import { IBlipWrapper } from 'source/src/Constans/interfaces';
import IdGenerator from 'source/src/Modules/Core/idGenerator';

class BlipsManager {
    blips: Map<number, alt.Blip>;
    idGenerator: IdGenerator;
    constructor() {
        this.blips = new Map<number, alt.Blip>();
        this.idGenerator = new IdGenerator(1000000);

        alt.onServer("blipManagerLoadAllBlips", this.onLoadAllBlips.bind(this));
        alt.onServer("blipManagerAddedNewBlip", this.onAddedNewBlip.bind(this));
        alt.onServer("blipManagerRemovedBlip", this.onRemovedBlip.bind(this));

        alt.onServer("blipManagerUpdateBlipName", this.onUpdateBlipName.bind(this));
        alt.onServer('blipManagerUpdateBlipPosition', this.onUpdateBlipPosition.bind(this));
        alt.onServer('blipManagerUpdateBlipSprite', this.onUpdateBlipSprite.bind(this));
        alt.onServer('blipManagerUpdateBlipColor', this.onUpdateBlipColor.bind(this));
    }

    createNewClientSideBlip(blip: alt.Blip): number {
        const nextId = this.idGenerator.getNextId();
        this.blips.set(nextId, blip);
        return nextId;
    }

    onAddedNewBlip(newBlip: IBlipWrapper) {
        const blip = this.createNewBlip(newBlip);
        this.blips.set(newBlip.id, blip);
    }

    onRemovedBlip(blipId: number) {
        if (!this.blips.has(blipId)) return;
        const blip = this.blips.get(blipId) as alt.Blip;
        this.blips.delete(blipId);
        blip.destroy();
        alt.log(`Deleted blip ${blipId}`);
    }

    onLoadAllBlips(blipsList: IBlipWrapper[]) {
        if (blipsList == null) return;
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

    onUpdateBlipPosition(blipId: number, blipPosition: alt.Vector3) {
        if (!this.blips.has(blipId)) return;
        const blipToUpdate = this.blips.get(blipId) as alt.Blip;
        // blipToUpdate.position = blipPosition; // ???????? array of what
        blipToUpdate.position = [blipPosition.x, blipPosition.y, blipPosition.z]; // ?????
        alt.log(`Updated blip ${blipId} position to ${JSON.stringify(blipToUpdate.position, null, 2)}`);
    }

    onUpdateBlipSprite(blipId: number, blipSprite: number) {
        if (!this.blips.has(blipId)) return;
        const blipToUpdate = this.blips.get(blipId) as alt.Blip;
        blipToUpdate.sprite = blipSprite;
        alt.log(`Updated blip ${blipId} sprite to ${blipToUpdate.sprite}`);
    }

    onUpdateBlipColor(blipId: number, blipColor: number) {
        if (!this.blips.has(blipId)) return;
        const blipToUpdate = this.blips.get(blipId) as alt.Blip;
        blipToUpdate.color = blipColor;
        alt.log(`Updated blip ${blipId} color to ${blipToUpdate.color}`);
    }

    private createNewBlip(newBlip: IBlipWrapper) {
        const blip = new alt.PointBlip(newBlip.position.x, newBlip.position.y, newBlip.position.z);
        blip.category = 4;
        blip.shortRange = true;
        blip.sprite = newBlip.sprite;
        blip.color = newBlip.color;
        blip.name = newBlip.name;
        return blip;
    }
}

const blipsManager = new BlipsManager();
export default blipsManager;