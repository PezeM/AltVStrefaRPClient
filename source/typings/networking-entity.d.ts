declare module "networking-entity" {
    export interface MValue {
        boolValue?: boolean,
        doubleValue?: number,
        stringValue?: string,
        intValue?: number,
        uintValue?: number,
        dictionaryValue?: any,
        listValue?: any[],
        entityValue?: number,
        nullValue?: boolean
    }

    export interface INetworkingEntity {
        id: number,
        position: Vector3,
        dimension: number,
        range: number,
        data: {
            [key: string]: MValue
        },
        [key: string]: any
    }

    export interface INetworkingDataChange {
        key: string,
        value: MValue,
    }

    export function create(): void;
    export function createWithWebView(webView: any): void;
    export function createNoneDefault(): void;
    export function init(url: string, token: string): void;
    export function onStreamIn(callback: (entity: INetworkingEntity) => void): void;
    export function onStreamOut(callback: (entity: INetworkingEntity) => void): void;
    export function onDataChange(callback: (entity: INetworkingEntity, changedData: INetworkingDataChange) => void): void;
}

