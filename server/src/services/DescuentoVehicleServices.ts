import { VehicleServices } from "./vehicleServices";
import { IVehicle } from "../models/IVehicle";


export class DescuentoVehicleServices extends VehicleServices {

    public async applyDiscount(vehicle: IVehicle, discountPercentage: number): Promise<IVehicle> {
        try {
            const discount = (vehicle.precio * discountPercentage) / 100;
            vehicle.precio -= discount;

            return vehicle;

        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error(`Error applying discount: ${error.message}`);
            } else {
                throw new Error('Error applying discount: Unknown error');
            };
        };
    };
};