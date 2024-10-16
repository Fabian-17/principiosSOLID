import { Request, Response } from 'express';
import { ClientServices } from '../services/clientServices';
import { IClient } from '../models/IClient';


export class ClientController {
    private clientServices: ClientServices;

    constructor(clientServices: ClientServices) {
        this.clientServices = clientServices;
    };

    public async createClient(req: Request, res: Response): Promise<void> {
        try {
            const clientData: IClient = req.body;
            const newClient = await this.clientServices.createClient(clientData);
            res.status(201).json(newClient);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Unknown error occurred while creating client' });
            };
        };
    };

    public async getClientById(req: Request, res: Response): Promise<void> {
        try {
            const clientId = parseInt(req.params.id);
            const client = await this.clientServices.getClientById(clientId);
            if (client) {
                res.status(200).json(client);
            } else {
                res.status(404).json({ message: 'Client not found' });
            }
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Unknown error occurred while retrieving client' });
            };
        };
    };


    public async updateClient(req: Request, res: Response): Promise<void> {
        try {
            const clientId = parseInt(req.params.id);
            const clientData: IClient = req.body;
            const updatedClient = await this.clientServices.updateClient(clientId, clientData);
            res.status(200).json(updatedClient);
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Unknown error occurred while updating client' });
            };
        };
    };



    public async deleteClient(req: Request, res: Response): Promise<void> {
        try {
            const clientId = parseInt(req.params.id);
            await this.clientServices.deleteClient(clientId);
            res.status(204).end();
        } catch (error: unknown) {
            if (error instanceof Error) {
                res.status(500).json({ message: error.message });
            } else {
                res.status(500).json({ message: 'Unknown error occurred while deleting client' });
            };
        };
    };

};