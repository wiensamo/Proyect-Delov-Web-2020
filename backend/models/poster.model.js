module.exports = (sequelize, Sequelize) =>{
    const Poster = sequelize.define ("Poster", {
        idPoster: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        titulo: Sequelize.STRING,
        descripcion: Sequelize.STRING,
        materia: Sequelize.STRING,
        carrera: Sequelize.STRING,
        grupo: Sequelize.STRING,
        statusAprob: Sequelize.STRING,
        vistas: Sequelize.INTEGER,
        fechaIni: Sequelize.DATE,
        fechafin: Sequelize.DATE
    }, {
        tableName: "poster"
    });
    return Poster;
}
