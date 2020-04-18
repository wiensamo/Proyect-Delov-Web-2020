module.exports = (sequelize, Sequelize) =>{
    const Perfil = sequelize.define ("Perfil", {
        idPerfil: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombrePerfil: Sequelize.STRING,
        descripcionPerfil: Sequelize.STRING,
        fechaIni: Sequelize.DATE,
        fechafin: Sequelize.DATE,
        componenteAngular: Sequelize.STRING
    }, {
        tableName: "perfil"
    });
    return Perfil;
}
