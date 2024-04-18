// ormconfig.js
module.exports = {
    type: 'mongodb',
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 27017,
    database: process.env.DB_NAME || 'task_manager',
    entities: ['dist/**/*.entity{.ts,.js}'],
    synchronize: true,
  };
  