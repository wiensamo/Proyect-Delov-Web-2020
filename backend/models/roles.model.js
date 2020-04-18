module.exports = (sequelize, Sequelize) =>{
    const Roles = sequelize.define ("Roles", {
        idRoles: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },     
        nombreRol: Sequelize.STRING,
        descripcionRol: Sequelize.STRING,
        fechaIni: Sequelize.DATE,
        fechafin: Sequelize.DATE
    }, {
        tableName: "roles"
    });
    return Roles;
}
