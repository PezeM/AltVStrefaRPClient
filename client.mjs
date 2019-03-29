/// <reference path="altv.d.ts" />
/// <reference path="alt.d.ts" />

import alt from 'alt';
import game from 'natives';
import chat from 'chat';
import loginModule from 'src/Login/login.js';
import * as noclipModul from 'src/Admin/noclip.js';

let localPlayer = alt.getLocalPlayer();
let cursorShown = false;

// Startup
game.freezeEntityPosition(localPlayer.scriptID, true);

alt.log('Client side script loaded');

alt.on('keydown', (key) => {
	if (key == 'F6'.charCodeAt(0)) {
		cursorShown = !cursorShown;
		alt.showCursor(cursorShown);
	}
});

alt.on('update', () => {
	// DEV Constant running
	if (game.isPedSprinting(localPlayer.scriptID)) {
		game.restorePlayerStamina(localPlayer.scriptID, 100);
		chat.pushLine('Biegasz');
	}
});