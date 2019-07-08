import * as game from 'natives';

class Scaleform {
  handle: number;
  constructor(scaleformName: string) {
    this.handle = game.requestScaleformMovieInstance(scaleformName);
  }

  draw3D(posX: number, posY: number, posZ: number, rotX: number, rotY: number, rotZ: number, unk1: number, unk2: number, unk3: number,
    scaleX: number, scaleY: number, scaleZ: number, unk4: number
  ) {
    return game.drawScaleformMovie3dNonAdditive(this.handle, posX, posY, posZ, rotX, rotY, rotZ, unk1, unk2, unk3, scaleX, scaleY, scaleZ, unk4);
  }

  isLoaded() {
    return game.hasScaleformMovieLoaded(this.handle);
  }
}

function handleScaleform(scaleform: Scaleform) {
  const scaleformHandler = {
    get(target: any, propKey: any, receiver: any) {
      if (propKey in target) {
        return target[propKey];
      }

      const scaleformFunction = (handler: number, fName: string, ...args: any[]) => {
        if (args !== undefined && Array.isArray(args) && args.length > 0) {
          game.beginScaleformMovieMethod(handler, fName);
          for (const a in args) {
            const nextArg = args[a];
            if (typeof nextArg === 'number' && Number.isInteger(nextArg)) {
              game.addScaleformMovieMethodParameterInt(nextArg);
            } else if (typeof nextArg === 'number') {
              game.addScaleformMovieMethodParameterFloat(nextArg);
            } else if (typeof nextArg === 'boolean') {
              game.addScaleformMovieMethodParameterBool(nextArg);
            } else {
              game.addScaleformMovieMethodParameterString(nextArg);
            }
          }
          game.endScaleformMovieMethod();
        } else {
          game.callScaleformMovieMethod(handler, fName);
        }
      };
      return scaleformFunction.bind(null, target.handle, propKey);
    },
  };

  return new Proxy(scaleform, scaleformHandler);
}

export function requestScaleform(name: string) {
  return handleScaleform(new Scaleform(name));
}
