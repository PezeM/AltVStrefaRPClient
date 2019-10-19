export interface IListender<T> {
    (event: T): any;
}

export interface IDisposable {
    dispose(): any;
}

export class TypedEvent<T> {
    private listeners: Array<IListender<T>> = [];
    private listenersOnce: Array<IListender<T>> = [];

    on(listener: IListender<T>): IDisposable {
        this.listeners.push(listener);
        return { dispose: () => this.off(listener) };
    }

    once(listener: IListender<T>): void {
        this.listenersOnce.push(listener);
    }

    off(listener: IListender<T>): void {
        const callbackIndex = this.listeners.indexOf(listener);
        if (callbackIndex > -1) this.listeners.splice(callbackIndex, 1);
    }

    emit(event: T) {
        for (let i = 0; i < this.listeners.length; i++) {
            this.listeners[i](event);
        }

        if (this.listenersOnce.length > 0) {
            const toCall = this.listenersOnce;
            this.listenersOnce = [];
            for (let i = 0; i < toCall.length; i++) {
                toCall[i](event);
            }
        }
    }
}