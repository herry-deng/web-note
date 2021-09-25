const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('myschooldb', 'root', 'DJC1831473219', {
    host: 'localhost',
    dialect: 'mysql',/* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */
    // logging: null,   // 不再显示日志记录
  });

  module.exports = sequelize;