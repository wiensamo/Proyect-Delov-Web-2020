module.exports = (sequelize, Sequelize) =>{
    const Calificaciones = sequelize.define ("Calificaciones", {
        idCalificaciones: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        estrellas: Sequelize.INTEGER,
        comentario: Sequelize.STRING,
        idUsuario: Sequelize.INTEGER
    }, {
        tableName: "calificaciones"
    });
    return Calificaciones;
}
