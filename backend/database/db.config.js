const dbconfiguracion={
    HOST: "localhost",
    USER: "root1",
    PASSWORD:"p1_N8spaf6eg",
    DB:"posterDB",
    dialect:"mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}
module.exports=dbconfiguracion;
