import { displayRadar, displayHud } from 'natives';

let isRadarVisible = false;

export const getRadarState = (): boolean => isRadarVisible;

export function showRadar() {
    isRadarVisible = true;
    displayHud(isRadarVisible);
    displayRadar(isRadarVisible);
}

export function hideRadar() {
    isRadarVisible = false;
    displayHud(isRadarVisible);
    displayRadar(isRadarVisible);
}

export function toggleRadar() {
    isRadarVisible = !isRadarVisible;
    displayHud(isRadarVisible);
    displayRadar(isRadarVisible);
}



