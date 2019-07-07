import * as alt from 'alt';

class Maths {
  degToRad(deg: number) {
    return (deg * Math.PI) / 180.0;
  }

  rotToDirection(rotation: Vector3) {
    const radiansZ = (Math.PI / 180) * rotation.z;
    const radiansX = (Math.PI / 180) * rotation.x;
    const num = Math.abs(Math.cos(radiansX));

    return {
      x: -Math.sin(radiansZ) * num,
      y: Math.cos(radiansZ) * num,
      z: Math.sin(radiansX),
    };
  }

  distanceSqrt(a: Vector3, b: Vector3, useZ = true) {
    if (useZ) {
      return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2) + Math.pow(b.z - a.z, 2));
    } else {
      return Math.sqrt(Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2));
    }
  }

  distance(a: Vector3, b: Vector3, useZ = true) {
    if (useZ) {
      return Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2) + Math.pow(b.z - a.z, 2);
    } else {
      return Math.pow(b.x - a.x, 2) + Math.pow(b.y - a.y, 2);
    }
  }
}

export default new Maths();
