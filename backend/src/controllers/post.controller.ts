import { IPost, IPostBase, Post } from '../models/post.model';

export default class PostController {
  private static _instance: PostController;

  public static get instance() {
    if (!PostController._instance) {
      PostController._instance = new PostController();
    }
    return PostController._instance;
  }

  async createPost(post: IPostBase) {
    return Post.create({
        ...Post,
        likes: 0
    });
  }

 async incrementLikes(postId: number) {
     const post = await Post.findByPk(postId);
     return post.update({ likes: post.likes+1 });
 };

 async decrementLikes(postId: number) {
    const post = await Post.findByPk(postId);
    return post.update({ likes: post.likes-1 });
};
}
