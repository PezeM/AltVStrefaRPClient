import { displayRadar, displayHud } from 'natives';

let radarState = false;

export const isRadarVisible = (): boolean => radarState;

export function showRadar(show = true) {
    radarState = show;
    displayHud(show);
    displayRadar(show);
}

export function hideRadar() {
    showRadar(false);
}

export function toggleRadar() {
    radarState = !radarState;
    displayHud(radarState);
    displayRadar(radarState);
}



