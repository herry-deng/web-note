const { Sequelize } = require('sequelize');
const { sqlLogger } = require("../logger");
const sequelize = new Sequelize('myschooldb', 'root', 'DJC1831473219', {
    host: 'localhost',
    dialect: 'mysql',/* 选择 'mysql' | 'mariadb' | 'postgres' | 'mssql' 其一 */
    logging: (msg)=>{
      sqlLogger.debug(msg);
    },   
  });

  module.exports = sequelize;