import { VehicleServiceInterface } from "../interfaces/VehicleServiceInterface";
import { IVehicle } from "../models/IVehicle";
import { IVehicleRepository } from "../repository/IVehicleRepository";


export class VehicleServices implements VehicleServiceInterface {
    private vehicleRepository: IVehicleRepository;


    constructor(vehicleRepository: IVehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    };

    public async createVehicle(vehicle: IVehicle) {
        try {
            return await this.vehicleRepository.create(vehicle);
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error(`Error creating vehicle: ${error.message}`);
            } else {
                throw new Error('Error creating vehicle: Unknown error');
            };
        };
    };

    public async getVehicleById(id: number) {
        try {
            return await this.vehicleRepository.getById(id);
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error(`Error getting vehicle: ${error.message}`);
            } else {
                throw new Error('Error getting vehicle: Unknown error');
            };
        };
    };

    public async updateVehicle(id: number, vehicle: IVehicle) {
        try {
            return await this.vehicleRepository.update(id, vehicle);
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error(`Error getting vehicle: ${error.message}`);
            } else {
                throw new Error('Error getting vehicle: Unknown error');
            };
        };
    };

    public async deleteVehicle(id: number) {
        try {
         return await this.vehicleRepository.delete(id);
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error(`Error getting vehicle: ${error.message}`);
            } else {
                throw new Error('Error getting vehicle: Unknown error');
            };
        };
    };

};