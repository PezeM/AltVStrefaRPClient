import alt from 'alt';
import game from 'natives';
import chat from 'chat';
import { showUi } from 'src/Helpers/uiHelper.js';

let localPlayer = alt.getLocalPlayer();
let loginView = null;
let viewLoaded = () => {
    return loginView == null ? false : true;
}

export function hello() {
    return "Module.js working";
}

function loadLoginView() {
    loginView = new alt.WebView('http://resources/testAltVClient/html/login/index.html');

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

    alt.showCursor(true);
    showUi(false);
    loginView.focus();
}

function tryToLogin(username, password) {
    if (!username || !password) {
        return loginView.emit('showError', 'Wysłano puste dane');
    }

    alt.log(`Login: ${username} Password: ${password}`);
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
        // alt.log('Character list as json: ' + JSON.parse(characterList));
        loginView.emit('loggedIn', characterList);
    }
});

alt.onServer('CharacterCreatedSuccessfully', () => {
    // Destory any camera etc
    game.setPedDefaultComponentVariation(localPlayer.scriptID);
});

export default { hello, counter };