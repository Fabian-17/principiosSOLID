import { Router } from "express";
import clientRoutes from "./ClientRoutes";
import vehicleRoutes from "./VehicleRoutes";


const routes = Router();

routes.use('/client', clientRoutes);
routes.use('/vehicle', vehicleRoutes);


export default routes;