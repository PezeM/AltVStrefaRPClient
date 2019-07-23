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

  dot(a: Vector3, b: Vector3) {
    return (a.x * b.x) + (a.y * b.y) + (a.z * b.z);
  }

  substract(a: Vector3, b: Vector3) {
    return {
      x: a.x - b.x,
      y: a.y - b.y,
      z: a.z - b.z
    };
  }

  magnitude(vector: Vector3) {
    return Math.sqrt(vector.x * vector.x + vector.y * vector.y + vector.z * vector.z);
  }

  normalize(vector: Vector3) {
    const magnitude = this.magnitude(vector);
    vector.x = vector.x / magnitude;
    vector.y = vector.y / magnitude;
    vector.z = vector.z / magnitude;
    return vector;
  }
}

export default new Maths();
