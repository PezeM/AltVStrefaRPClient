import * as alt from 'alt';
import * as game from 'natives';
import mainUi from 'source/src/Modules/Ui/mainUi.js';
import { changeGameState } from 'source/src/gameState';
import { GameState } from 'source/typings/strefa';

const localPlayer = alt.getLocalPlayer();

alt.log(`Login.js initialized`);

mainUi.onUiEvent('tryToLogin', (username: string, password: string) => {
    if (!username || !password) {
        return mainUi.emitUiEvent('showError', 'Wysłano puste dane');
    }

    alt.emitServer('loginAccount', username, password);
});

mainUi.onUiEvent('tryToRegister', (username: string, password: string) => {
    if (!username || !password) {
        return mainUi.emitUiEvent('showError', 'Wysłano puste dane');
    }

    alt.emitServer('registerAccount', username, password);
});

mainUi.onUiEvent('loadCharacter', (characterId: number) => {
    characterId = Number(characterId);
    alt.log('Loading character with id: ' + characterId);
    alt.emitServer('tryToLoadCharacter', characterId);
});

mainUi.onUiEvent('tryToCreateNewCharacter', () => {
    alt.emitServer('tryToCreateNewCharacter');
});

alt.onServer('showAuthenticateWindow', () => {
    alt.log('Loading login view');
    showLoginWindow();
});

alt.onServer('showLoginError', (message: string) => {
    mainUi.emitUiEvent('showError', message);
});

alt.onServer('successfullyRegistered', () => {
    mainUi.emitUiEvent('registeredSuccessfully');
});

alt.onServer('loginSuccesfully', (characterList: string) => {
    if (characterList) {
        alt.log('Character list: ' + characterList);
        mainUi.emitUiEvent('succesfullyLoggedIn', characterList);
    }
});

alt.onServer('CharacterCreatedSuccessfully', () => {
    // Destory any camera etc
    alt.log('Character created succesfully');
    game.freezeEntityPosition(localPlayer.scriptID, false);
    game.setPedDefaultComponentVariation(localPlayer.scriptID);
    // mainUi.emitUiEvent('hideCharacterSelectWindow');
    hideLoginView();
});

alt.onServer('loadedCharacter', () => {
    game.freezeEntityPosition(localPlayer.scriptID, false);
    game.setPedDefaultComponentVariation(localPlayer.scriptID);
    // mainUi.emitUiEvent('hideCharacterSelectWindow');
    hideLoginView();
});

function showLoginWindow() {
    if (mainUi.viewLoaded) {
        mainUi.openMenu('openLoginView', true, true);
    } else {
        const interval = alt.setInterval(() => {
            if (mainUi.viewLoaded) {
                mainUi.openMenu('openLoginView', true, true);
                alt.clearInterval(interval);
            }
        }, 100);
    }
}

function hideLoginView() {
    changeGameState(GameState.Playing);
    mainUi.closeMenu();
}