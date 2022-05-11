import { IPost, Post } from '../models/post.model';

export default class PostController {
  private static _instance: PostController;

  public static get instance() {
    if (!PostController._instance) {
      PostController._instance = new PostController();
    }
    return PostController._instance;
  }

  async createPost(post: IPost) {
    return Post.create(Post);
  }
}
