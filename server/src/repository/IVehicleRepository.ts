import { IVehicle } from '../models/IVehicle';


export interface IVehicleRepository{
    create(vehicle: IVehicle): Promise<IVehicle>;
    getById(id: number): Promise<IVehicle>;
    update(id: number, vehicle: IVehicle): Promise<IVehicle>;
    delete(id: number): Promise<IVehicle>;
};