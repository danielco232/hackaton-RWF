import { Sequelize } from 'sequelize';

const postgresDB = new Sequelize('rwf', 'postgres', 'n8410201', {
    host: '127.0.0.1',
    dialect: 'postgres'
  });

export default postgresDB;