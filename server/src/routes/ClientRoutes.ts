import { Router } from "express";
import { ClientController } from "../controllers/ClientController";
import { ClientServices } from "../services/clientServices";
import { ClientMongo } from "../database/mongo/clientMongo";

const clientRoutes = Router();

const ClientRepository = new ClientMongo();
const clientService = new ClientServices(ClientRepository);
const clientController = new ClientController(clientService);

// uso bind para que el this de las funciones apunte al objeto clientController
// porque si no apuntaría al objeto que llama a la función y se perdería el contexto
clientRoutes.get('/:id', clientController.getClientById.bind(clientController));
clientRoutes.post('/', clientController.createClient.bind(clientController));
clientRoutes.put('/:id', clientController.updateClient.bind(clientController));
clientRoutes.delete('/:id', clientController.deleteClient.bind(clientController));


export default clientRoutes;