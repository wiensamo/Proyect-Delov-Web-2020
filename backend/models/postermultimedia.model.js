module.exports = (sequelize, Sequelize) =>{
    const PosterMultimedia = sequelize.define ("PosterMultimedia", {
        idPosterMultimedia: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        idPoster: Sequelize.INTEGER,
        idMultimedia: Sequelize.INTEGER,
        fechaIni: Sequelize.DATE,
        fechafin: Sequelize.DATE
    }, {
        tableName: "postermultimedia"
    });
    return PosterMultimedia;
}
