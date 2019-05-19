import alt from 'alt';
import game from 'natives';
import menusManager from 'src/Modules/Ui/menusManager.js';

let localPlayer = alt.getLocalPlayer();

// menusManager.onUiEvent('viewLoaded', () => {
//     menusManager.openMenu('openLoginView', true, true);
// });

menusManager.onUiEvent('tryToLogin', (username, password) => {
    if (!username || !password) {
        return menusManager.emitUiEvent('showError', 'Wysłano puste dane');
    }

    alt.emitServer('loginAccount', username, password);
});

menusManager.onUiEvent('tryToRegister', (username, password) => {
    if (!username || !password) {
        return menusManager.emitUiEvent('showError', 'Wysłano puste dane');
    }

    alt.emitServer('registerAccount', username, password);
});

menusManager.onUiEvent('loadCharacter', (characterId) => {
    characterId = Number(characterId);
    alt.log('Loading character with id: ' + characterId);
    alt.emitServer('tryToLoadCharacter', characterId);
});

menusManager.onUiEvent('tryToCreateNewCharacter', () => {
    alt.emitServer('tryToCreateNewCharacter');
});

alt.onServer('showAuthenticateWindow', () => {
    alt.log('Loading login view');
    showLoginWindow();
});

alt.onServer('showLoginError', (message) => {
    menusManager.emitUiEvent('showError', message);
});

alt.onServer('successfullyRegistered', () => {
    alt.log('Client - registered succ');
    menusManager.emitUiEvent('registeredSuccessfully');
});

alt.onServer('loginSuccesfully', (characterList) => {
    if (characterList) {
        alt.log('Character list: ' + characterList);
        menusManager.emitUiEvent('succesfullyLoggedIn', characterList);
    }
});

alt.onServer('CharacterCreatedSuccessfully', () => {
    // Destory any camera etc
    alt.log('Character created succesfully');
    game.freezeEntityPosition(localPlayer.scriptID, false);
    game.setPedDefaultComponentVariation(localPlayer.scriptID);
    menusManager.emitUiEvent('hideCharacterSelectWindow');
    hideLoginView();
});

alt.onServer('loadedCharacter', () => {
    game.freezeEntityPosition(localPlayer.scriptID, false);
    // alt.log('Setting player component variation');
    game.setPedDefaultComponentVariation(localPlayer.scriptID);
    menusManager.emitUiEvent('hideCharacterSelectWindow');
    hideLoginView();
});

function showLoginWindow() {
    if (menusManager.viewLoaded) {
        menusManager.openMenu('openLoginView', true, true);
    } else {
        let interval = alt.setInterval(() => {
            if (menusManager.viewLoaded) {
                menusManager.openMenu('openLoginView', true, true);
                alt.clearInterval(interval);
            }
        }, 50);
    }
}

function hideLoginView() {
    menusManager.closeMenu();
}