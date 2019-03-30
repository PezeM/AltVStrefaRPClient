/// <reference path="../../altv.d.ts" />
/// <reference path="../../alt.d.ts" />

import alt from 'alt';
import game from 'natives';

export function rotToDirection(rotation) {
    try {
        // var radiansZ = degToRad(rotation.z);
        // var radiansX = degToRad(rotation.X);
        // var num = Math.abs(Math.cos(radiansX));

        var radiansZ = Math.PI / 180 * rotation.z;
        var radiansX = Math.PI / 180 * rotation.x;
        var num = Math.abs(Math.cos(radiansX));

        return {
            x: (-Math.sin(radiansZ) * num),
            y: (Math.cos(radiansZ) * num),
            z: Math.sin(radiansX)
        };
    } catch (error) {
        alt.log('Error in rotToDirection' + error);
        return null;
    }
}

export function degToRad(deg) {
    return deg * Math.PI / 180.0;
}