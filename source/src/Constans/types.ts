import { ITrashBin, IVehicleShop } from "source/src/Constans/interfaces";
import * as alt from 'alt';
import { VehicleSeat } from "./enums";

export type TrashBinArray = ITrashBin[];
export type AnimList = Array<Array<string | string[]>>;
export type VehicleShopList = IVehicleShop[];

export type VehicleEnterEventCallback = (vehicle: alt.Vehicle, seat: VehicleSeat) => void;
export type VehicleLeaveEventCallback = (vehicle: alt.Vehicle, seat: VehicleSeat) => void;
export type VehicleChangedSeatEventCallback = (vehicle: alt.Vehicle, newSeat: VehicleSeat, oldSeat: VehicleSeat) => void;