/// <reference path="../../natives.d.ts" />
/// <reference path="../../alt.d.ts" />
import * as alt from 'alt';

const Maths = {};

Maths.degToRad = function (deg) {
    return deg * Math.PI / 180.0;
}

Maths.rotToDirection = function (rotation) {
    try {
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

Maths.distanceSqrt = function (a, b, useZ = true) {
    if (useZ) {
        return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2) + Math.pow(b.z - a.z, 2));
    } else {
        return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
    }
}

Maths.distance = function (a, b, useZ = true) {
    if (useZ) {
        return Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2) + Math.pow(b.z - a.z, 2);
    } else {
        return Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2);
    }
}

export default Maths;