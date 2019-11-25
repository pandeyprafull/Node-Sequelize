const Sequelize = require('sequelize');
console.log(process.env.DB)
console.log(process.env.USERT)
console.log(process.env.PASSWORD)
console.log(process.env.HOST)
const sequelize = new Sequelize(process.env.DB, process.env.USERT, process.env.PASSWORD, {
    dialect: 'mysql',
    host: process.env.HOST
});

module.exports = sequelize;