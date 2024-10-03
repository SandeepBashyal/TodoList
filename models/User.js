const {DataTypes} = require('sequelize');

const {sequelize} = require('../config/db');
const Todo = require('./Todo');
const User = sequelize.define('Users', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    phone:{
        type: DataTypes.STRING,
        allowNull: false,
    }
},{
    timestamps:true,
});

User.hasMany(Todo, {
    foreignKey: 'userId',
    as: 'todos',
});

Todo.belongsTo(User, {
    foreignKey: 'userId',
    as: 'user',
});

module.exports = User;