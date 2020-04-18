module.exports = (sequelize, Sequelize) =>{
    const Event = sequelize.define ("Event", {
        idEvent: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: Sequelize.STRING,
        descripcion: Sequelize.STRING,
        fechaIni: Sequelize.DATE,
        fechafin: Sequelize.DATE,
        idAprobador: Sequelize.INTEGER
    }, {
        tableName: "event"
    });
    return Event;
}
