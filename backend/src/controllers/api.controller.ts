import { Router } from 'express';
import { IPost } from '../models/post.model';
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

    this.router.post('post/new', async (req, res) => {
        await PostController.instance.createPost(req.body);
        res.sendStatus(200);
    });

    this.router.post('post/like/add', async (req, res) => {
        await PostController.instance.incrementLikes(req.body);
        res.sendStatus(200);
    });

    this.router.post('post/like/remove', async (req, res) => {
        await PostController.instance.decrementLikes(req.body);
        res.sendStatus(200);
    });

    this.router.get('post/:postId', async (req, res) => {
        const post = await PostController.instance.findPostById(+req.params.postId);
        res.send(post);
    });
  }
}
