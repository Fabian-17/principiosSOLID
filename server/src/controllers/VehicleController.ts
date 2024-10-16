import { Request, Response } from 'express';
import { VehicleServices } from '../services/vehicleServices';
import { IVehicle } from '../models/IVehicle';


export class VehicleController {
    private vehicleServices: VehicleServices;

    constructor(vehicleServices: VehicleServices) {
        this.vehicleServices = vehicleServices;
    };

    public async createVehicle(req: Request, res: Response): Promise<void> {
        try {
            const vehicleData: IVehicle = req.body;
            const newVehicle = await this.vehicleServices.createVehicle(vehicleData);
            res.status(201).json(newVehicle);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Unknown error occurred while creating vehicle' });
            };
        };
    };

    public async getVehicleById(req: Request, res: Response): Promise<void> {
        try {
            const vehicleId = parseInt(req.params.id);
            const vehicle = await this.vehicleServices.getVehicleById(vehicleId);
            if (vehicle) {
                res.status(200).json(vehicle);
            } else {
                res.status(404).json({ message: 'Vehicle not found' });
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Unknown error occurred while retrieving vehicle' });
            };
        };
    };


    public async updateVehicle(req: Request, res: Response): Promise<void> {
        try {
            const vehicleId = parseInt(req.params.id);
            const vehicleData: IVehicle = req.body;
            const updatedVehicle = await this.vehicleServices.updateVehicle(vehicleId, vehicleData);
            res.status(200).json(updatedVehicle);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Unknown error occurred while updating vehicle' });
            };
        };
    };


    public async deleteVehicle(req: Request, res: Response): Promise<void> {
        try {
            const vehicleId = parseInt(req.params.id);
            await this.vehicleServices.deleteVehicle(vehicleId);
            res.status(204).send();
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Unknown error occurred while deleting vehicle' });
            };
        };
    };
    
};