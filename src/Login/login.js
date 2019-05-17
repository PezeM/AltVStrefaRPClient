import alt from 'alt';
import game from 'natives';
import { showUiAndFreezePlayer } from 'src/Helpers/uiHelper.js';

let localPlayer = alt.getLocalPlayer();
let loginView = null;

function loadLoginView() {
    loginView = new alt.WebView('http://resources/AltVStrefaRPClient/html/login/login.html');

    loginView.on('tryToLogin', (username, password) => {
        tryToLogin(username, password)
    });
    loginView.on('tryToRegister', (username, password) => {
        tryToRegister(username, password)
    });
    loginView.on('loadCharacter', (characterId) => {
        tryToLoadCharacter(characterId);
    });
    loginView.on('tryToCreateNewCharacter', () => {
        tryToCreateNewCharacter();
    });

    loginView.focus();
    alt.showCursor(true);
    showUiAndFreezePlayer(false);
}

function hideLoginView() {
    showUiAndFreezePlayer(true);
    alt.showCursor(false);
    loginView.destroy();
    // alt.nextTick(() => {
    //     alt.setCamFrozen(false);
    // });
    // loginView.destroy();
}

function tryToLogin(username, password) {
    if (!username || !password) {
        return loginView.emit('showError', 'Wysłano puste dane');
    }

    alt.emitServer('loginAccount', username, password);
}

function tryToRegister(username, password) {
    if (!username || !password) {
        return loginView.emit('showError', 'Wysłano puste dane');
    }
    alt.emitServer('registerAccount', username, password);
}

function tryToCreateNewCharacter() {
    // For now just sends requests to server and creates new default character
    alt.emitServer('tryToCreateNewCharacter');
}

function tryToLoadCharacter(characterId) {
    characterId = Number(characterId);
    alt.log('Loading character with id: ' + characterId);
    alt.emitServer('tryToLoadCharacter', characterId);
}

alt.onServer('showAuthenticateWindow', () => {
    alt.log('Loading login view');
    loadLoginView();
});

alt.onServer('showLoginError', (message) => {
    loginView.emit('showError', message);
});

alt.onServer('successfullyRegistered', () => {
    alt.log('Client - registered succ');
    loginView.emit('registeredSuccessfully');
});

alt.onServer('loginSuccesfully', (characterList) => {
    if (characterList) {
        alt.log('Character list: ' + characterList);
        loginView.emit('loggedIn', characterList);
    }
});

alt.onServer('CharacterCreatedSuccessfully', () => {
    // Destory any camera etc
    alt.log('Character created succesfully');
    game.freezeEntityPosition(localPlayer.scriptID, false);
    game.setPedDefaultComponentVariation(localPlayer.scriptID);
    // loginView.emit('hideCharacterSelectWindow');
    hideLoginView();
});

alt.onServer('loadedCharacter', () => {
    game.freezeEntityPosition(localPlayer.scriptID, false);
    // alt.log('Setting player component variation');
    game.setPedDefaultComponentVariation(localPlayer.scriptID);
    // loginView.emit('hideCharacterSelectWindow');
    hideLoginView();
});