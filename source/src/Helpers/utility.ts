import * as alt from 'alt';
import * as game from 'natives';

class Utils {
  delay(timeout: number) {
    return new Promise((resolve, reject) => {
      alt.setTimeout(resolve, timeout);
    })
  }

  waitFor(check: Function, timeout: number = -1, delay: number = 100) {
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

  promisify(start: any, ended: any, check: Function = () => true, run: any = null, delay: number = 50) {
    return function (...args: any[]) {
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


  promise(data: Function, delay: number = 50) {
    return new Promise(function (resolve, reject) {
      const interval = alt.setInterval(() => {
        if (data() == true) {
          resolve(true);
          alt.clearInterval(interval);
        }
      }, delay);
    });
  }

  joaat(key: string) {
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

    return this.toUnsigned(hash);
  }


  toSigned(value: number, nbit = 32): number {
    value = value << 32 - nbit;
    value = value >> 32 - nbit;
    return value;
  }

  toUnsigned(value: number) {
    return (value >>> 0);
  }

  getRandomFloat(min: number, max: number): number {
    return Math.random() * (max - min) + min;
  }

  getRandomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  getRandomBool(): boolean {
    return Math.random() >= 0.5;
  }

  getRandomString(length = 8): string {
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

  async loadModelAsync(model: string | number) {
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
        if (game.hasModelLoaded(model as number)) {
          alt.clearInterval(interval);
          return resolve(true);
        }
      }, 0);
    });
  }
}

export default new Utils();