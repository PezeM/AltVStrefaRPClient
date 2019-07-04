import alt from 'alt';
import game from 'natives';

class DroppedItemsController {
    constructor() {
        alt.log(`Created inventory controller streamer`);
        this.droppedItems = [];
        this.streamedItems = [];

        this.tickInterval = alt.setInterval(this.render.bind(this), 0);
        this.streamInterval = alt.setInterval(this.streamer.bind(this), 500);
    }

    streamer() {

    }

    render() {

    }
}

const droppedItemsController = new DroppedItemsController();
export default droppedItemsController;