module.exports = (sequelize, Sequelize) =>{
    const UsuarioAprobacion = sequelize.define ("UsuarioAprobacion", {
        idUsuarioAprobacion: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idAprobacion: Sequelize.INTEGER,
        idUsuario: Sequelize.INTEGER,
        fechaIni: Sequelize.DATE,
        fechafin: Sequelize.DATE
    }, {
        tableName: "usuarioaprobacion"
    });
    return UsuarioAprobacion;
}
