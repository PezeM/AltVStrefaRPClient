declare module "alt" {
  enum VehicleLockState {
    None = 0,
    Unlocked,
    Locked,
    LockoutPlayerOnly,
    LockPlayerInside,
    InitiallyLocked,
    ForceDoorsShut,
    LockedCanBeDamaged
  }

  export class Entity {
    setMeta(name: String, value: any): void;
    getMeta(name: String): any;    
  }
  export class Checkpoint {}
  export class Blip {}

  export class Position {
    x: Number;
    y: Number;
    z: Number;
  }

  export class Player extends Entity {
    readonly ping: Number;
    name: String;
    readonly vehicle: Vehicle;
    readonly seat: Number;
    readonly health: Number;
    pos: Position;

    setDateTime(day: Number, month: Number, year: Number, hour: Number, minute: Number, second: Number): void;
    setWeather(weather: Number): void;

    kick(): void;
  }

  export class Vehicle extends Entity {
    driver: Player;
    modKit: Number;
    modKitsCount: Number;
    primaryColor: Number;
    secondaryColor: Number;
    customPrimaryColor: Number;
    customSecondaryColor: Number;
    tireSmokeColor: Number;
    neonColor: Number;
    pearlColor: Number;
    wheelColor: Number;
    interiorColor: Number;
    dashboardColor: Number;
    customTires: Number;
    darkness: Number;
    windowTint: Number;
    neon: Number;
    dirtLevel: Number;
    numberPlateIndex: Number;
    numberPlateText: String;

    getModsCount(category: Number): Number;
    setMod(category: Number, id: Number): void;
    setExtra(id: Number, disable: boolean): void;
    setWheels(category: Number, id: Number): void;

    engineOn: boolean;
    readonly handbrakeActive: boolean;
    headlightColor: Number;
    sirenActive: boolean;
    lockState: VehicleLockState;
    readonly daylightOn: boolean;
    readonly nightlightOn: boolean;
    roofOpened: boolean;
    readonly flamethrowerActive: boolean;

    getDoorState(id: Number): Number;
    setDoorState(id: Number, state: Number): void;
    isWindowOpened(id: Number): boolean;
    setWindowOpened(id: Number, opened: boolean): void;
    getGamestateDataBase64(): String;
    setGamestateDataBase64(data: String): void;

    engineHealth: Number;
    petrolTankHealth: Number;
    bodyHealth: Number;
    bodyAdditionalHealth: Number;
    readonly wheelsCount: Number;
    readonly repairsCount: Number;

    setWheelBurst(id: Number, burst: boolean): void;
    isWheelBurst(id: Number): boolean;
    setWheelHasTire(id: Number, hasTire: boolean): void;
    doesWheelHasTire(id: Number): boolean;
    setWheelHealth(id: Number, health: Number): void;
    getWheelHealth(id: Number): Number;
    getHealthDataBase64(): String;
    setHealthDataBase64(data: String): void;

    readonly hasArmoredWindows: boolean;

    getPartDamageLevel(id: Number): Number;
    setPartDamageLevel(id: Number, damageLevel: Number): void;
    getPartBulletHoles(id: Number): Number;
    setPartBulletHoles(id: Number, bulletHoles: Number): void;
    isLightDamaged(id: Number): boolean;
    setLightDamaged(id: Number, damaged: boolean): void;
    isWindowDamaged(id: Number): boolean;
    setWindowDamaged(id: Number, damaged: boolean): void;
    isSpecialLightDamaged(id: Number): boolean;
    setSpecialLightDamaged(id: Number, damaged: boolean): void;
    getBumperDamageLevel(id: Number): Number;
    setBumperDamageLevel(id: Number, damageLevel: Number): void;
    getArmoredWindowHealth(id: Number): Number;
    setArmoredWindowHealth(id: Number, health: Number): void;
    getArmoredWindowShootCount(id: Number): Number;
    setArmoredWindowShootCount(id: Number, shootCount: Number): void;
    getDamageStatusBase64(): String;
    setDamageStatusBase64(data: String): void;
  }

  export function on(event: String, callback: Function): void;
  export function emit(event: String, ...args: any[]): void;
  export function onClient(event: String, callback: Function): void;
  export function emitClient(client: Player | null, event: String, ...args: any[]): void;

  export function log(...args: any[]): void;
  export function logWarning(...args: any[]): void;
  export function logError(...args: any[]): void;

  export function getPlayersByName(name: String): Player[];

  export function createVehicle(model: Number | String, posX: Number, posY: Number, posZ: Number, heading: Number): Vehicle;
  export function removeEntity(entity: Entity): void;

  export function createCheckpoint(type: Number, x: Number, y: Number, z: Number, radius: Number, height: Number, r: Number, g: Number, b: Number, a: Number): Checkpoint;
  export function createBlipForCoords(type: Number, x: Number, y: Number, z: Number): Blip;
}
