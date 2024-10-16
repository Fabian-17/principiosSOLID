import express, { Application } from 'express';
import cors from 'cors';
import routes from '../routes/routes';


class Server {
    private app: Application;
    private port: string;

    constructor() {
        this.app = express();
        this.port = '3000';
        this.middlewares();
        this.routes();
    };

    private middlewares(): void {
        this.app.use(cors());
        this.app.use(express.json());
    };

    private routes(): void {
        this.app.use(routes);
    };

    public listen(): void {
        this.app.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    };
};


export default Server;