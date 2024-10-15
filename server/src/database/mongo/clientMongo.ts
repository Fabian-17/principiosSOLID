import { IClientRepository } from "../../repository/IClientRepository";
import { IClient } from "../../models/IClient";


export class ClientMongo implements IClientRepository {

    private clients: IClient[] = [];

    async create(client: IClient): Promise<IClient> {
        client.id = this.clients.length + 1;
        this.clients.push(client);
        return client;
    };

    async getById(id: number): Promise<IClient> {
        const client = this.clients.find(c => c.id === id);
        if (!client) {
            throw new Error('Client not found');
        };
        return client;
    };


    async update(id: number, client: IClient): Promise<IClient> {
        const index = this.clients.findIndex(c => c.id === id);
        if (index === -1) {
            throw new Error('Client not found');
        };
        this.clients[index] = {...this.clients[index], ...client};
        return this.clients[index];
    };


    async delete(id: number): Promise<IClient> {
        const index = this.clients.findIndex(c => c.id === id);
        if (index === -1) {
            throw new Error('Client not found');
        };

        const deletedClient = this.clients.splice(index, 1)[0];
        return deletedClient;
    };
};