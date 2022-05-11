import { IUser, User, UserStatic } from '../models/user.model';

export default class UserController {
  private static _instance: UserController;

  public static get instance() {
    if (!UserController._instance) {
      UserController._instance = new UserController();
    }
    return UserController._instance;
  }

  async createUser(user: IUser) {
    const dbUser = await this.findUserByUsername(user.username);
    if (dbUser) 
        return false;
    await User.create(user);
    return true;
  }

 async findUserByUsername(username: string) {
     return User.findByPk(username);
 }
}
