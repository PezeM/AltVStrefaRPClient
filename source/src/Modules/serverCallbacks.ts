import * as alt from 'alt';
import { IServerCallback } from 'source/src/Constans/interfaces';
const CALLBACKS_LIFETIME = 10000;

class ServerCallbacks {
    private callbacks: IServerCallback[];
    private callbacksCleanupInterval: number;
    private registedCallbacks: Set<string>;
    constructor() {
        this.callbacks = [];
        this.registedCallbacks = new Set();
        this.callbacksCleanupInterval = alt.setInterval(this.callbacksCleanup.bind(this), 10000);
    }

    callback(eventName: string, callbackEventName: string, args: any | any[], callback: (...result: any) => void) {
        if (eventName === undefined) {
            alt.log(`ServerCallback -> eventname is undefined`);
            return;
        }

        if (args === undefined) {
            alt.emitServer(eventName);
        } else {
            alt.emitServer(eventName, ...args);
        }

        this.callbacks.push({ callbackEventName, startTime: Date.now(), completed: false, callback });
        alt.log(`Called server event named ${eventName} with args ${args}`);

        if (this.registedCallbacks.has(eventName)) return;
        this.registedCallbacks.add(eventName);

        alt.onServer(callbackEventName, (...result: any) => {
            let index = -1;
            for (let i = 0; i < this.callbacks.length; i++) {
                if (this.callbacks[i].callbackEventName !== callbackEventName) continue;
                index = i;
                break;
            }

            if (index === -1) return;
            this.callbacks[index].callback(...result);
            this.callbacks[index].completed = true;
        });
    }

    private callbacksCleanup() {
        let cleanedCallbacks = 0;
        for (let i = 0; i < this.callbacks.length; i++) {
            const callback = this.callbacks[i];
            if (callback.completed || (callback.startTime + CALLBACKS_LIFETIME) < Date.now()) {
                this.callbacks.splice(i, 1);
                cleanedCallbacks++;
            }
        }
        if (cleanedCallbacks < 1) return;
        alt.log(`Cleaned ${cleanedCallbacks} callbacks.`);
    }
}

const serverCallbacks = new ServerCallbacks();
export default serverCallbacks;