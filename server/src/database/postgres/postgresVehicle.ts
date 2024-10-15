import { IVehicleRepository } from '../../repository/IVehicleRepository';
import { IVehicle } from '../../models/IVehicle';


export class PostgresRepository implements IVehicleRepository {
    private vehicles: IVehicle[] = [];

    async create(vehicle: IVehicle): Promise<IVehicle> {
        vehicle.id = this.vehicles.length + 1;
        this.vehicles.push(vehicle);
        return vehicle;
    };

    async getById(id: number): Promise<IVehicle> {
        const vehicle = this.vehicles.find(v => v.id === id);
        if (!vehicle) {
            throw new Error('Vehicle not found');
        };
        return vehicle;
    };

    async update(id: number, vehicle: IVehicle): Promise<IVehicle> {
        const index = this.vehicles.findIndex(v => v.id === id);
        if (index === -1) {
            throw new Error('Vehicle not found');
        };
        this.vehicles[index] = {...this.vehicles[index], ...vehicle};
        return this.vehicles[index];
    };


    async delete(id: number): Promise<IVehicle> {
        const index = this.vehicles.findIndex(v => v.id === id);
        if (index === -1) {
            throw new Error('Vehicle not found');
        };

        const deletedVehicle = this.vehicles.splice(index, 1)[0];
        return deletedVehicle;

    };
};