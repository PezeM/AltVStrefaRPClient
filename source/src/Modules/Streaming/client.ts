import alt from 'alt';
import { INetworkingEntity } from 'networking-entity';

// This is the client class to communicate with the webview
// e.g. const client = new NetworkingEntityClient(webview);
class NetworkingEntityClient {
    webview: alt.WebView;
    onStreamIn: (entity?: INetworkingEntity) => void;
    onStreamOut: (entity?: INetworkingEntity) => void;
    onDataChange: (entity?: INetworkingEntity, newData?: any) => void;
    // create position submit interval
    constructor(webview: alt.WebView, defaultToken = true) {
        this.webview = webview;
        this.onStreamIn = (entity?: INetworkingEntity) => { };
        this.onStreamOut = (entity?: INetworkingEntity) => { };
        this.onDataChange = () => { };
        webview.on("networkingEntityStreamIn", (entity: INetworkingEntity) => {
            this.onStreamIn(entity);
        });
        webview.on("networkingEntityStreamOut", (entity: INetworkingEntity) => {
            this.onStreamOut(entity);
        });
        webview.on("networkingEntityDataChange", (entity: INetworkingEntity, newData: any) => {
            this.onDataChange(entity, newData);
        });
        if (defaultToken) {
            alt.onServer("streamingToken", (url: string, token: string) => {
                this.init(url, token);
            });
        }
    }

    init(url: string, token: string) {
        this.webview.emit("networkingEntitySetup", url, token);
        const localPlayer = alt.Player.local;
        let pos;
        alt.setInterval(() => {
            pos = localPlayer.pos;
            this.webview.emit("playerPosition", pos.x, pos.y, pos.z);
        }, 100);
    }
}

let networkingEntityClient: any = null;

export function create(webview: alt.WebView) {
    networkingEntityClient = new NetworkingEntityClient(webview, true);
}

export function createNoneDefault(webview: alt.WebView) {
    networkingEntityClient = new NetworkingEntityClient(webview, false);
}

export function init(url: string, token: string) {
    if (networkingEntityClient == null) {
        alt.log("call create(webview) first");
        return;
    }
    networkingEntityClient.init(url, token)
}

export function onStreamIn(callback: Function) {
    if (networkingEntityClient == null) {
        alt.log("call create(webview) first");
        return;
    }
    networkingEntityClient.onStreamIn = (entity: INetworkingEntity) => {
        callback(entity);
    };
}

export function onStreamOut(callback: Function) {
    if (networkingEntityClient == null) {
        alt.log("call create(webview) first");
        return;
    }
    networkingEntityClient.onStreamOut = (entity: INetworkingEntity) => {
        callback(entity);
    };
}

export function onDataChange(callback: Function) {
    if (networkingEntityClient == null) {
        alt.log("call create(webview) first");
        return;
    }
    networkingEntityClient.onDataChange = (entity: any, newData: any) => {
        callback(entity, newData);
    };
}

export default { create, createNoneDefault, init, onStreamIn, onStreamOut, onDataChange };