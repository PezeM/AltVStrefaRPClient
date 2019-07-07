declare module "chat" {
    export function pushLine(text: string): void;
    export function pushMessage(name: string, text: string): void;
    export function isOpen(): boolean;
}