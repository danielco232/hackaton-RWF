import express, { Express } from 'express';
import compression from 'compression';
import APIController from './controllers/api.controller';
import postgresDB from './models/database.model';

export default class App {
  private static _instance: App;
  app: Express;

  public static get instance() {
    if (!App._instance) {
      App._instance = new App();
    }
    return App._instance;
  }

  private constructor() {
    this.app = express();
  }

  init = async () => {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(compression());
    
    this.app.use('/api', APIController.instance.router);

    this.app.listen(3000, () => {
      console.log(`Application started on port 3000!`);
    });

    await postgresDB.authenticate();
    // await postgresDB.createSchema('management', {});
    // await postgresDB.sync({ alter: true });

  };
}
