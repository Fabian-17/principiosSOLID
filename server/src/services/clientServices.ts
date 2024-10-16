import { ClientServiceInterface } from "../interfaces/ClientServiceInterface";
import { IClient } from "../models/IClient";
import { IClientRepository } from "../repository/IClientRepository";


export class ClientServices implements ClientServiceInterface {
    private clientRepository: IClientRepository;

    constructor(clientRepository: IClientRepository) {
        this.clientRepository = clientRepository;
    };

    public async createClient(client: IClient) {
        return await this.clientRepository.create(client);
    };

    public async getClientById(id: number) {
        return await this.clientRepository.getById(id);
    };

    public async updateClient(id: number, client: IClient) {
        return await this.clientRepository.update(id, client);
    };

    public async deleteClient(id: number) {
        return await this.clientRepository.delete(id);
    };

};