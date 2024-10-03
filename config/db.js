const {Sequelize} = require('sequelize');
const config = require('./config.json');

const sequelize = new Sequelize(config.development.database,config.development.username,config.development.password,{
    host:config.development.host,
    dialect:config.development.dialect,
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    }
});

const connect = async () => {
    try{
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    }catch(err){
        console.error('Unable to connect to the database:',err);
    }
}
module.exports = {
    sequelize,
    connect
};


