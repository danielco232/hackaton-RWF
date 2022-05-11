import { DataTypes, Model } from 'sequelize';
import postgresDB from './database.model';

export interface IPostBase {
    title: string;
    body: string;
}

export interface IPost extends IPostBase {
    likes: number
}

export interface PostStatic extends Model<IPost>, IPost {
}
  
export const Post = postgresDB.define<PostStatic>(
    'post',
    {
        title: DataTypes.STRING,
        body: DataTypes.STRING,
        likes: DataTypes.INTEGER,
    },
    { schema: 'posts' }
);