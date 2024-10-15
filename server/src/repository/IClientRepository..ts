import { IClient } from "../models/IClient";


export interface IClientRepository {
    create(client: IClient): Promise<IClient>;
    getById(id: number): Promise<IClient>;
    update(id: number, client: IClient): Promise<IClient>;
    delete(id: number): Promise<IClient>;
};