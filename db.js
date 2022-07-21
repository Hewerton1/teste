JavaScript
const Sequelize = require('sequelize');
const sequelize = new Sequelize('crud', 'root', 'hewertonc', {dialect: 'mysql', host: 'localhost'});

module.exports = sequelize;
