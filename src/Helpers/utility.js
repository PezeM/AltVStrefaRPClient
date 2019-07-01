/// <reference path="../../natives.d.ts" />
/// <reference path="../../alt.d.ts" />
import * as alt from 'alt';
import * as game from 'natives';

const Utils = {};

Utils.delay = function (timeout) {
  return new Promise((resolve, reject) => {
    alt.setTimeout(resolve, timeout);
  });
}

Utils.waitFor = function (check, timeout = -1, delay = 100) {
  return new Promise((resolve, reject) => {
    const start = +new Date;

    const interval = alt.setInterval(() => {
      const now = +new Date;
      const success = check();

      if (success || (timeout !== -1 && (now - start >= timeout))) {
        alt.clearInterval(interval);
        resolve(success);
      }
    }, delay);
  });
}

Utils.promisify = function (start, ended, check = () => true, run = null, delay = 50) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      start.apply(this, args);

      const interval = alt.setInterval(() => {
        if (ended.apply(this, args)) {
          alt.clearInterval(interval);
          const success = check.apply(this, args);
          resolve(success);
          return;
        }
        if (run !== null)
          run.apply(this, args);
      }, delay);
    });
  }
}

Utils.promise = function (data, delay = 50) {
  return new Promise(function (resolve, reject) {
    const interval = alt.setInterval(() => {
      if (data() == true) {
        resolve(true);
        alt.clearInterval(interval);
      }
    }, delay);
  });
}

Utils.joaat = function (key) {
  const keyLowered = key.toLowerCase();
  const length = keyLowered.length;
  let hash, i;

  for (hash = i = 0; i < length; i++) {
    hash += keyLowered.charCodeAt(i);
    hash += (hash << 10);
    hash ^= (hash >>> 6);
  }

  hash += (hash << 3);
  hash ^= (hash >>> 11);
  hash += (hash << 15);

  return Utils.toUnsigned(hash);
}


Utils.toSigned = function (value, nbit = 32) {
  value = value << 32 - nbit;
  value = value >> 32 - nbit;
  return value;
}

Utils.toUnsigned = function (value) {
  return (value >>> 0);
}

Utils.getRandomFloat = function (min, max) {
  return Math.random() * (max - min) + min;
}

Utils.getRandomInt = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

Utils.getRandomBool = function () {
  return Math.random() >= 0.5;
}

Utils.getRandomString = function (length = 8) {
  let s = '';
  const randomchar = () => {
    const n = Math.floor(Math.random() * 62);
    if (n < 10)
      return n; //1-10
    if (n < 36)
      return String.fromCharCode(n + 55); //A-Z
    return String.fromCharCode(n + 61); //a-z
  }

  while (s.length < length)
    s += randomchar();

  return s;
}

Utils.loadModelAsync = function (model) {
  return new Promise((resolve, reject) => {
    if (typeof model === 'string') {
      model = game.getHashKey(model);
    }

    if (!game.isModelValid(model))
      return resolve(false);

    if (game.hasModelLoaded(model))
      return resolve(true);

    game.requestModel(model);

    let interval = alt.setInterval(() => {
      if (game.hasModelLoaded(model)) {
        alt.clearInterval(interval);
        return resolve(true);
      }
    }, 0);
  });
}

export default Utils;