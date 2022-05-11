import { DataTypes, Model } from 'sequelize';
import postgresDB from './database.model';

export interface IComment {
    body: string;
    postId: number;
}

export interface CommentStatic extends Model<IComment>, IComment {
}
  
export const Comment = postgresDB.define<CommentStatic>(
    'comment',
    {
        body: DataTypes.STRING,
        postId: DataTypes.INTEGER,
    },
    { schema: 'posts' }
);