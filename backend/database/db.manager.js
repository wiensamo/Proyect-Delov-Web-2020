//IMPORT SEQUELIZE
const Sequelize = require("sequelize");
//IMPORT SEQUELIZE CONNECTION
const sequelizeConnection = require('../database/db.connection.js');
console.log("hola");
//IMPORT MODELS
const AprovadoresModel = require("../models/aprobadores.model");
const CalificacionesModel = require("../models/calificaciones.model");
const CalificacionPosterModel = require("../models/calificacionposter.model");
const MultimediaModel = require("../models/multimedia.model");
const PerfilModel = require("../models/perfil.model");
const PosterModel = require("../models/poster.model");
const PosterMultimediaModel = require("../models/postermultimedia.model");
const PosterUsuarioModel = require("../models/posterusuario.model");
const RolesModel = require("../models/roles.model");
const RolPerfilModel = require("../models/rolPerfil.model");
const UserModel = require("../models/user.model");
const UsuarioAprobacionModel = require("../models/usuarioaprobacion.model");
const EventModel = require("../models/event.model");
const PosterEventModel = require("../models/poster.model");

//INITIALIZE MODELS
const	Aprovadores	=	AprovadoresModel 		(sequelizeConnection, Sequelize);
const	Calificaciones	=	CalificacionesModel 		(sequelizeConnection, Sequelize);
const	CalificacionPoster	=	CalificacionPosterModel 		(sequelizeConnection, Sequelize);
const	Multimedia	=	MultimediaModel 		(sequelizeConnection, Sequelize);
const	Perfil	=	PerfilModel 		(sequelizeConnection, Sequelize);
const	Poster	=	PosterModel 		(sequelizeConnection, Sequelize);
const	PosterMultimedia	=	PosterMultimediaModel 		(sequelizeConnection, Sequelize);
const	PosterUsuario	=	PosterUsuarioModel 		(sequelizeConnection, Sequelize);
const	Roles	=	RolesModel 		(sequelizeConnection, Sequelize);
const	RolPerfil	=	RolPerfilModel 		(sequelizeConnection, Sequelize);
const	User	=	UserModel 		(sequelizeConnection, Sequelize);
const	UsuarioAprobacion	=	UsuarioAprobacionModel 		(sequelizeConnection, Sequelize);
const	Event	=	EventModel 		(sequelizeConnection, Sequelize);
const	PosterEvent	=	PosterEventModel 		(sequelizeConnection, Sequelize);

//CREATE RELATIONS BETWEEN MODELS
Perfil.belongsTo( Roles, { through: RolPerfil });
User.hasMany( Roles, { foreignKey: 'idRoles', sourceKey: 'idUser' });
Roles.belongsTo( User, { foreignKey: 'idUser', sourceKey: 'idRoles' });
User.belongsTo( Aprovadores, { through: UsuarioAprobacion });
User.belongsTo( Poster, { through: PosterUsuario });
PosterUsuario.hasOne( Aprovadores, { foreignKey: 'idAprobadores', sourceKey: 'idAprobadores' });
Poster.belongsTo( Multimedia, { through: PosterMultimedia });
Poster.belongsTo( Calificaciones, { through: CalificacionPoster });
Event.belongsTo( Poster, { through: PosterEvent });

//GROUP MODELS
const models = {
  Aprovadores	:	Aprovadores	,
  Calificaciones	:	Calificaciones	,
  CalificacionPoster	:	CalificacionPoster	,
  Multimedia	:	Multimedia	,
  Perfil	:	Perfil	,
  Poster	:	Poster	,
  PosterMultimedia	:	PosterMultimedia	,
  PosterUsuario	:	PosterUsuario	,
  Roles	:	Roles	,
  RolPerfil	:	RolPerfil	,
  User	:	User	,
  UsuarioAprobacion	:	UsuarioAprobacion	,
  Event: Event,
  PosterEvent : PosterEvent
};


/**
 * Create object to manage the models and database
 */
const db = {
    ...models,
    sequelizeConnection
};
  
// EXPORT CONSTANT DB
module.exports = db;
