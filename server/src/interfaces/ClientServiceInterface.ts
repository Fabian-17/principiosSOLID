import { IClient } from "../models/IClient"


export interface ClientServiceInterface {
    createClient(client: IClient): Promise<IClient>;
    getClientById(id: number): Promise<IClient>;
    updateClient(id: number, client: IClient): Promise<IClient>;
    deleteClient(id: number): Promise<IClient>;
};