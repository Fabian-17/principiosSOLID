import { IVehicle } from "../models/IVehicle";


export interface VehicleServiceInterface {
    createVehicle(vehicle: IVehicle): Promise<IVehicle>;
    getVehicleById(id: number): Promise<IVehicle>;
    updateVehicle(id: number, vehicle: IVehicle): Promise<IVehicle>;
    deleteVehicle(id: number): Promise<IVehicle>;
};