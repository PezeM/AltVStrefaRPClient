import * as game from 'natives';

class Scaleform {
    constructor(scaleformName) {
        this.handle = game.requestScaleformMovieInstance(scaleformName);
    }

    draw3D(posX, posY, posZ, rotX, rotY, rotZ, unk1, unk2, unk3, scaleX, scaleY, scaleZ, unk4) {
        return game.drawScaleformMovie3dNonAdditive(this.handle,
            posX, posY, posZ, rotX, rotY, rotZ,
            unk1, unk2, unk3,
            scaleX, scaleY, scaleZ,
            unk4);
    }

    isLoaded() {
        return game.hasScaleformMovieLoaded(this.handle);
    }
}

function handleScaleform(scaleform) {
    let handler = {
        get(target, propKey, receiver) {
            if (propKey in target) {
                return target[propKey];
            }

            let scaleformFunction = (handler, fName, ...args) => {
                if (args !== undefined && Array.isArray(args) && args.length > 0) {
                    game.beginScaleformMovieMethod(handler, fName);
                    for (let a in args) {
                        let nextArg = args[a];
                        if (typeof (nextArg) == 'number' && Number.isInteger(nextArg)) {
                            game.addScaleformMovieMethodParameterInt(nextArg);
                        } else if (typeof (nextArg) == 'number') {
                            game.addScaleformMovieMethodParameterFloat(nextArg);
                        } else if (typeof (nextArg) == 'boolean') {
                            game.addScaleformMovieMethodParameterBool(nextArg);
                        } else {
                            game.addScaleformMovieMethodParameterString(nextArg);
                        }
                    }
                    game.endScaleformMovieMethod();
                } else {
                    game.callScaleformMovieMethod(handler, fName);
                }
            }
            return scaleformFunction.bind(null, target.handle, propKey);
        }
    };

    return new Proxy(scaleform, handler);
}

export function requestScaleform(name) {
    return handleScaleform(new Scaleform(name));
}