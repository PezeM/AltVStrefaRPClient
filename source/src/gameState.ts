import * as alt from 'alt';
import { GameState } from 'source/src/Constans/enums';

let gameState = GameState.Loading;

export const getGameState = () => {
    return gameState;
}

export function changeGameState(state: GameState) {
    if (state == null) {
        alt.log(`Invalid type of game state. State: ${JSON.stringify(state)}`);
        return;
    }

    if (state === gameState) {
        alt.log(`Can't change state to the same state: ${state}`);
    } else {
        gameState = state;
        alt.emit('gameStateChanged', gameState);
    }
}

alt.on('gameStateChanged', (state: GameState) => {
    alt.log(`Changed gameState to ${state.toString()}`);
});