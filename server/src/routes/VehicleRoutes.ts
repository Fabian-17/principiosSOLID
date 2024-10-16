import { Router } from "express";
import { VehicleController } from "../controllers/VehicleController";
import { VehicleServices } from "../services/vehicleServices";
import { PostgresRepository } from "../database/postgres/postgresVehicle";

const vehicleRoutes = Router();

const vehicleRepository = new PostgresRepository();
const vehicleService = new VehicleServices(vehicleRepository);
const vehicleController = new VehicleController(vehicleService);


vehicleRoutes.get('/:id', vehicleController.getVehicleById.bind(vehicleController));
vehicleRoutes.post('/', vehicleController.createVehicle.bind(vehicleController));
vehicleRoutes.put('/:id', vehicleController.updateVehicle.bind(vehicleController));
vehicleRoutes.delete('/:id', vehicleController.deleteVehicle.bind(vehicleController));


export default vehicleRoutes;