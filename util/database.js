const Sequelize = require('sequelize');

const sequelize = new Sequelize('library-management', 'root', 'Timely19@kang', {
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = sequelize;