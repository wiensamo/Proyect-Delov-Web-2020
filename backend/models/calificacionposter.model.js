module.exports = (sequelize, Sequelize) =>{
    const CalificacionPoster = sequelize.define ("CalificacionPoster", {
        idCalificacionPoster: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idPoster: Sequelize.INTEGER,
        idMultimedia: Sequelize.INTEGER,
        idCalificacion: Sequelize.INTEGER
    }, {
        tableName: "calificacionposter"
    });
    return CalificacionPoster;
}
