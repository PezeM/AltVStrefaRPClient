/// <reference path="altv.d.ts" />
/// <reference path="alt.d.ts" />

import alt from 'alt';
import game from 'natives';
import loginModule from 'src/Login/login.js';

alt.log('Client side script loaded');

alt.onServer('setDefaultComponent', () => {
	alt.log('Setting default component...')
	game.setPedDefaultComponentVariation(game.playerPedId());
});