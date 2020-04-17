
module.exports = (sequelize,Sequelize) => {
    const User = sequelize.define('User',
        {
            idUser:{
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true
            },
            username: {
                type: Sequelize.STRING,
                unique: true              
            },
            mail: {
                type: Sequelize.STRING,
                unique: true
            },
            tipousuario: {
                type: Sequelize.STRING,
                unique: true              
            },
            estado: {
                type: Sequelize.STRING,
                unique: true              
            },
            area: {
                type: Sequelize.STRING,
                unique: true              
            },
            creationdate: Sequelize.DATE 
        },{
            tableName: "Users"
        }


    );

    return User;

}
