import * as alt from 'alt';
import * as game from 'natives';
import { TypedEvent } from './Event/typedEvent';

class InteriorChangeHandler {
    interiorEnterEvent: TypedEvent<number> = new TypedEvent<number>();
    interiorLeaveEvent: TypedEvent<number> = new TypedEvent<number>();
    private tickInterval: number;
    private previousInterior: number = 0;
    private currentInterior: number = 0;

    constructor() {
        this.previousInterior = 0;
        this.tickInterval = alt.setInterval(this.tick.bind(this), 1000);
    }

    tick() {
        const pedId = game.playerPedId();
        const playerInterior = game.getInteriorFromEntity(pedId);
        if (playerInterior === this.currentInterior) return;

        if (playerInterior <= 0) {
            this.previousInterior = this.currentInterior;
            this.currentInterior = 0;
            this.interiorLeave(this.previousInterior);
        } else {
            this.previousInterior = this.currentInterior;
            this.currentInterior = playerInterior;
            this.interiorEnter(this.currentInterior);
        }
    }

    private interiorLeave(interiorId: number) {
        alt.log(`Left interior ${interiorId}`);
        this.interiorLeaveEvent.emit(interiorId);
    }

    private interiorEnter(interiorId: number) {
        alt.log(`Entered interior ${interiorId}`);
        this.interiorEnterEvent.emit(interiorId);
    }
}

const interiorChangeHandler = new InteriorChangeHandler();
export default interiorChangeHandler;