import * as alt from 'alt';

let gameState = 'loading';

export const getGameState = () => {
    return gameState;
}

export function changeGameState(state) {
    if (state == null || typeof state !== 'string') {
        alt.log(`Invalid type of game state. State: ${JSON.stringify(state)}`);
        return;
    }

    if (state == gameState) {
        alt.log(`Can't change state to the same state: ${state}`);
    } else {
        gameState = state;
        alt.emit('gameStateChanged', gameState);
    }
}

alt.on('gameStateChanged', state => {
    alt.log(`Changed gameState to ${state}`);
});