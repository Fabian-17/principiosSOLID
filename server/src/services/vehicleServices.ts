import { VehicleServiceInterface } from "../interfaces/VehicleServiceInterface";
import { IVehicle } from "../models/IVehicle";
import { IVehicleRepository } from "../repository/IVehicleRepository";


export class VehicleServices implements VehicleServiceInterface {
    private vehicleRepository: IVehicleRepository;


    constructor(vehicleRepository: IVehicleRepository) {
        this.vehicleRepository = vehicleRepository;
    };

    public async createVehicle(vehicle: IVehicle) {
        return await this.vehicleRepository.create(vehicle);
    };

    public async getVehicleById(id: number) {
        return await this.vehicleRepository.getById(id);
    };

    public async updateVehicle(id: number, vehicle: IVehicle) {
        return await this.vehicleRepository.update(id, vehicle);
    };

    public async deleteVehicle(id: number) {
        return await this.vehicleRepository.delete(id);
    };

};


