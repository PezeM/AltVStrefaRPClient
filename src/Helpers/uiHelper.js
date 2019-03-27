import alt from 'alt';
import game from 'natives';

export function showUi(toogle) {
    alt.toggleGameControls(toogle);
    game.displayHud(toogle);
    game.displayRadar(toogle);
}
