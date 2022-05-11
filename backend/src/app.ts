import express, { Express } from 'express';
import compression from 'compression';
import APIController from './controllers/api.controller';
import postgresDB from './models/database.model';
import { nextTick } from 'process';

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
    this.app.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Credentials", "true");
      res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
      res.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers")      
      next();
    })
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(compression());
    
    this.app.use('/api', APIController.instance.router);

    this.app.listen(3000, () => {
      console.log(`Application started on port 3000!`);
    });

    await postgresDB.authenticate();
    await postgresDB.createSchema('management', {});
    await postgresDB.createSchema('posts', {});
    await postgresDB.sync({ alter: true });
  };
}
