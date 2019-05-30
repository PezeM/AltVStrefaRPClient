/// <reference path="../../altv.d.ts" />
/// <reference path="../../alt.d.ts" />

import alt from 'alt';
import game from 'natives';

export function rotToDirection(rotation) {
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

export function degToRad(deg) {
    return deg * Math.PI / 180.0;
}

export function distanceSqrt(distOne, distTwo) {
    var num1 = distOne.x - distTwo.x;
    var num2 = distOne.y - distTwo.y;
    var num3 = distOne.z - distTwo.z;
    return (num1 * num1) + (num2 * num2) + (num3 * num3);
}

export function distanceSqrt2(distOne, distTwo) {
    return Math.pow(distOne.x - distTwo.x, 2) + Math.pow(distOne.y - distTwo.y, 2) + Math.pow(distOne.z - distTwo.z, 2);
}

export function distance2(distOne, distTwo) {
    return Math.sqrt(distOne.x * distTwo.x + distOne.y * distTwo.y + distOne.z * distTwo.z);
}

export function distance(distOne, distTwo) {
    return Math.sqrt(distSquared(distOne, distTwo));
}