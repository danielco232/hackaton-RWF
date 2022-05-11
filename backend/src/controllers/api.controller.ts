import { Router } from 'express';
import { IUser } from '../models/user.model';
import UserController from './user.controller';

export default class APIController {
  private static _instance: APIController;
  router = Router();

  public static get instance() {
    if (!APIController._instance) {
      APIController._instance = new APIController();
    }
    return APIController._instance;
  }

  constructor() {
    this.router.post('/register', async (req, res) => {
        const isRegister = await UserController.instance.createUser((req.body));
        if(isRegister)
            res.sendStatus(200);
        res.sendStatus(409);
    })
  }
}
