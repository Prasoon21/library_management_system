const Sequelize = require('sequelize');

const sequelize = require('../util/database')

const Library = sequelize.define('Library', {
    bookName: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Library;