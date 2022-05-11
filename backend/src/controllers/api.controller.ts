import { Router } from 'express';
import { IUser } from '../models/user.model';
import PostController from './post.controller';
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
        const isRegister = await UserController.instance.createUser(req.body);
        if(isRegister)
            res.sendStatus(200);
        res.sendStatus(409);
    });
    
    this.router.post('/login', async (req, res) => {
        const user = req.body;
        const dbUser = <IUser>(await UserController.instance.findUserByUsername(user.username));
        if (user.password == dbUser?.password)
            res.sendStatus(200);
        res.sendStatus(401);
    });

    this.router.post('post/add', async (req, res) => {
        await PostController.instance.createPost(req.body);
        res.sendStatus(200);
    });

    this.router.post('post/:postId/like/add', async (req, res) => {
        await PostController.instance.incrementLikes(+req.params.postId);
        res.sendStatus(200);
    });

    this.router.post('post/:postId/like/remove', async (req, res) => {
        await PostController.instance.decrementLikes(+req.params.postId);
        res.sendStatus(200);
    });

    this.router.get('post/all', async (req, res) => {
        res.send(await PostController.instance.findAll());
    });

    this.router.post('post/:postId/comment/add', async (req, res) => {
        PostController.instance.createComment({
            postId: +req.params.postId,
            ...req.body
        });
        res.sendStatus(200);
    });
  }
}
