import * as alt from 'alt';
import * as game from 'natives';
import mainUi from 'source/src/Modules/Ui/mainUi';
import { changeGameState } from 'source/src/Modules/Core/States/gameState';
import { GameState } from 'source/src/Constans/enums';

const localPlayer = alt.Player.local;

class LoginController {
    constructor() {
        alt.log('Login controller initialized');
        this.showLoginWindow();
        game.setPedDefaultComponentVariation(localPlayer.scriptID);

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
        alt.emitServer('TryToLoadCharacter', characterId);
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
        this.hideLoginView();
    }
}

const loginController = new LoginController();
export default loginController;


// let isDiscordReady = false;
// const discordInfoReadyInterval = alt.setInterval(() => {
//     if (alt.isDiscordInfoReady()) {
//         isDiscordReady = true;
//         alt.clearInterval(discordInfoReadyInterval);
//         alt.emit('discordInfoIsReady');
//     }
// }, 100);


// alt.on('discordInfoIsReady', () => {
//     alt.log('Requesting discord OAuth2');
//     alt.discordRequestOAuth2();
//     const discordOAuth2FinishedInterval = alt.setInterval(() => {
//         if (alt.isDiscordOAuth2Finished()) {
//             alt.log(`Discord OAuth2 finished`);
//             alt.emit('discordOAuth2Finished');
//             alt.clearInterval(discordOAuth2FinishedInterval);
//         }
//     }, 100);
// });

// function stringifyReplacer(key: any, value: any) {
//     if (typeof value === 'bigint') {
//         return value.toString() + 'n';
//     } else {
//         return value;
//     }
// }

// alt.on('discordOAuth2Finished', () => {
//     if (alt.isDiscordOAuth2Accepted()) {
//         alt.log(`Discord OAuth2 finished and was accepted`);
//         const oAuth2Result = alt.getDiscordOAuth2Result();
//         alt.log(oAuth2Result);
//         alt.emitServer('discordOAuth2Result', oAuth2Result);
//     } else {
//         alt.log(`Discord OAuth2 finished and was declined`);
//     }
// });
