module.exports = (sequelize, Sequelize) =>{
    const EventoPoster = sequelize.define ("EventoPoster", {
        idEventoPoster: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idPoster: Sequelize.INTEGER,
        idEvento: Sequelize.INTEGER,
        fechaIni: Sequelize.DATE,
        fechafin: Sequelize.DATE
    }, {
        tableName: "event"
    });
    return Event;
}
