import { ClientServiceInterface } from "../interfaces/ClientServiceInterface";
import { IClient } from "../models/IClient";
import { IClientRepository } from "../repository/IClientRepository";


export class ClientServices implements ClientServiceInterface {
    private clientRepository: IClientRepository;

    constructor(clientRepository: IClientRepository) {
        this.clientRepository = clientRepository;
    };

    public async createClient(client: IClient) {
        try {
            return await this.clientRepository.create(client);
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error(`Error creating client: ${error.message}`);
            } else {
                throw new Error('Error creating client: Unknown error');
            };
        };
    };

    public async getClientById(id: number) {
        try {
            return await this.clientRepository.getById(id);
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error(`Error creating client: ${error.message}`);
            } else {
                throw new Error('Error creating client: Unknown error');
            };
        };
    };

    public async updateClient(id: number, client: IClient) {
        try {
            return await this.clientRepository.update(id, client);
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error(`Error creating client: ${error.message}`);
            } else {
                throw new Error('Error creating client: Unknown error');
            };
        };
    };

    public async deleteClient(id: number) {
        try {
            return await this.clientRepository.delete(id);
        } catch (error: unknown) {
            if (error instanceof Error) {
                throw new Error(`Error creating client: ${error.message}`);
            } else {
                throw new Error('Error creating client: Unknown error');
            };
        };
    };

};