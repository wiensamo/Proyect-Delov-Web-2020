module.exports = (sequelize, Sequelize) =>{
    const RolPerfil = sequelize.define ("RolPerfil", {
        idRolPerfil: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        fechaIni: Sequelize.DATE,
        fechafin: Sequelize.DATE,
        idRol: Sequelize.INTEGER,
        idPerfil: Sequelize.INTEGER
    }, {
        tableName: "rolperfil"
    });
    return RolPerfil;
}
