module.exports = (sequelize, Sequelize) =>{
    const User = sequelize.define ("User", {
        idUser: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombreUsuario: Sequelize.STRING,
        contrasena: Sequelize.STRING,
        nombreUsuario: Sequelize.STRING,
        nombres: Sequelize.STRING,
        apellidos: Sequelize.STRING,
        correo: Sequelize.STRING,
        activo: Sequelize.BOOLEAN,
        token: Sequelize.STRING,
        fechaIni: Sequelize.DATE,
        fechafin: Sequelize.DATE,
        idRol: Sequelize.INTEGER
    }, {
        tableName: "user"
    });
    return User;
}
