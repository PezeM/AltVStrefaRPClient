import * as alt from 'alt';
import * as game from 'natives';
import mainUi from 'source/src/Modules/Ui/mainUi';
import { changeGameState } from 'source/src/gameState';
import { GameState } from 'source/src/Constans/enums';

const localPlayer = alt.Player.local;

class LoginController {
    constructor() {
        alt.log('Login controller initialized');
        this.showLoginWindow();

        mainUi.onUiEvent('tryToLogin', this.tryToLogin.bind(this));
        mainUi.onUiEvent('tryToRegister', this.tryToRegister.bind(this));
        mainUi.onUiEvent('loadCharacter', this.loadCharacter.bind(this));
        mainUi.onUiEvent('tryToCreateNewCharacter', this.tryToCreateNewCharacter.bind(this));

        alt.onServer('showAuthenticateWindow', this.showAuthenticateWindow.bind(this));
        alt.onServer('showLoginError', this.showLoginError.bind(this));
        alt.onServer('successfullyRegistered', this.successfullyRegistered.bind(this));
        alt.onServer('loggedInSuccesfully', this.loggedInSuccesfully.bind(this));
        alt.onServer('characterCreatedSuccessfully', this.characterCreatedSuccessfully.bind(this));
        alt.onServer('loadedCharacter', this.loadedCharacter.bind(this));
    }

    tryToLogin(username: string, password: string) {
        if (!username.trim() || !password.trim()) {
            return mainUi.emitUiEvent('showError', 'Wysłano puste dane');
        }

        alt.emitServer('LoginAccount', username, password);
    }

    tryToRegister(username: string, password: string) {
        if (!username.trim() || !password.trim()) {
            return mainUi.emitUiEvent('showError', 'Wysłano puste dane');
        }

        alt.emitServer('RegisterAccount', username, password);
    }

    loadCharacter(characterId: number) {
        characterId = Number(characterId);
        alt.log(`Loading character with id: ${characterId}`);
        alt.emitServer('tryToLoadCharacter', characterId);
    }

    tryToCreateNewCharacter() {
        alt.emitServer('TryToCreateNewCharacter');
    }

    showAuthenticateWindow() {
        // Propably not needed anymore
        this.showLoginWindow();
    }

    showLoginError(message: string) {
        mainUi.emitUiEvent('showError', message);
    }

    successfullyRegistered() {
        mainUi.emitUiEvent('registeredSuccessfully');
    }

    loggedInSuccesfully(characterList: string) {
        if (characterList == null || typeof characterList === 'undefined') {
            alt.logError('Character list was null. Couldnt show character list');
            return;
        }

        mainUi.emitUiEvent('succesfullyLoggedIn', characterList);
    }

    characterCreatedSuccessfully() {
        // Destory any camera etc
        alt.log('Character created succesfully');
        this.onCharacterLoad();
    }

    loadedCharacter() {
        this.onCharacterLoad();
    }

    private hideLoginView() {
        changeGameState(GameState.Playing);
        mainUi.closeMenu();
    }

    private showLoginWindow() {
        // Propably move camera somewhere
        if (mainUi.viewLoaded) {
            mainUi.openMenu('openLoginView', true, true);
        } else {
            const interval = alt.setInterval(() => {
                if (mainUi.viewLoaded) {
                    mainUi.openMenu('openLoginView', true, true);
                    alt.clearInterval(interval);
                }
            }, 250);
        }
    }

    private onCharacterLoad() {
        game.freezeEntityPosition(localPlayer.scriptID, false);
        game.setPedDefaultComponentVariation(localPlayer.scriptID);
        this.hideLoginView();
    }
}

const loginController = new LoginController();
export default loginController;