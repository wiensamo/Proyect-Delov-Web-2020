module.exports = (sequelize, Sequelize) =>{
    const PosterUsuario = sequelize.define ("PosterUsuario", {
        idPosterUsuario: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idPoster: Sequelize.INTEGER,
        idUsuario: Sequelize.INTEGER,
        idAprobadores: Sequelize.INTEGER,
        fechaIni: Sequelize.DATE,
        fechafin: Sequelize.DATE
    }, {
        tableName: "posterusuario"
    });
    return PosterUsuario;
}

