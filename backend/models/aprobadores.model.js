module.exports = (sequelize, Sequelize) =>{
    const Aprobadores = sequelize.define ("Aprobadores", {
        idAprobadores: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        statusAprob: Sequelize.STRING,
        comentario: Sequelize.STRING,
        fechaIni: Sequelize.DATE,
        fechafin: Sequelize.DATE
    }, {
        tableName: "aprobadores"
    });
    return Aprobadores;
}
