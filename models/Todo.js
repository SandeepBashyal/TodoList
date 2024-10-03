const { DataTypes} = require('sequelize');

const {sequelize} = require('../config/db');

const Todo = sequelize.define('Todos', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    status: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'Users',
            key: 'id',
        },
    },
    public: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    }
},{
    timestamps:true,
});

module.exports = Todo;