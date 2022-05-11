import { DataTypes, Model } from 'sequelize';
import postgresDB from './database.model';

export interface IUser {
    username: string;
    password: string;
    fname: string;
    lname: string;
    age: number;
    address: string;
    photo: string;
    unit: string;
    injury: string;
    bio: string;
}

export interface UserStatic extends Model<IUser>, IUser {
}
  
export const User = postgresDB.define<UserStatic>(
    'user',
    {
        username: {
            primaryKey: true,
            type: DataTypes.STRING,
          },
        password: DataTypes.STRING,
        fname: DataTypes.STRING,
        lname: DataTypes.STRING,
        age: DataTypes.INTEGER,
        address: DataTypes.STRING,
        photo: DataTypes.STRING,
        unit: DataTypes.STRING,
        injury: DataTypes.STRING,
        bio: DataTypes.STRING,
    },
    { schema: 'management' }
);