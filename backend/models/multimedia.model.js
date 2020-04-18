module.exports = (sequelize, Sequelize) =>{
    const Multimedia = sequelize.define ("Multimedia", {
        idMultimedia: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreMultimedia: Sequelize.STRING,
        ruta: Sequelize.STRING,
        formato: Sequelize.STRING,
        ubicacion: Sequelize.STRING,
        fechaIni: Sequelize.DATE,
        fechafin: Sequelize.DATE
    }, {
        tableName: "multimedia"
    });
    return Multimedia;
}
