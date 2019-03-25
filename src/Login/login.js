import alt from 'alt';
import game from 'natives';
import { showUi } from 'src/Helpers/uiHelper.js';
import chat from 'chat';

let loginView = null;
let viewLoaded = () => {
    return loginView == null ? false : true;
}

export let counter = {
    value: 0
};

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
    // Player successfully registered
    alt.log('Client - registered succ');
    loginView.emit('registeredSuccessfully');
});

alt.onServer('loginSuccesfully', (characterList) => {
    if (characterList) {
        alt.log('Character list: ' + characterList);
        // alt.log('Character list as json: ' + JSON.parse(characterList));
        loginView.emit('loggedIn', characterList);
    }

    // alt.showCursor(false);
    // showUi(true);

    // alt.log('Setting default component...')
    // game.setPedDefaultComponentVariation(game.playerPedId());
});

export default { hello, counter };