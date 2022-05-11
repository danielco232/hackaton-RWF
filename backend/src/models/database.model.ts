import { Sequelize } from 'sequelize';

const postgresDB = new Sequelize('rwf', 'postgres', 'Aa123456', {
    host: '127.0.0.1',
    dialect: 'postgres'
  });

export default postgresDB;