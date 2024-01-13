const Sequelize = require('sequelize');

const sequelize = new Sequelize('library-management', 'root', 'Timely19@kang', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: '+05:30'
});

module.exports = sequelize;