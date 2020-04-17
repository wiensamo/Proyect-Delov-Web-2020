const Sequelize = require('sequelize');

const sequelizeConexion = require('./db.conexion');


// Importar modelos

const UserModel = require('../models/user.model'); 


//Inicializar modelos

const User = UserModel(sequelizeConexion,Sequelize); 
 
const models = {
    User: User
}
const db ={

    ...models,
    sequelizeConexion
}

module.exports= db;
