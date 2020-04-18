const dbManager = require ('../database/db.manager');

/**
 * 
 * Creation of an user
 * 
 */
async function createUser (req, res) {
    
    // CHECK IF THE REQUEST BODY IS EMPTY
    if (!req.body) {
        res.status(400).send({
          message: "Request body is empty!!!!"
        });
        return;
    }

    // CREATING THE OBJECT TO PERSIST
    const newUserObject = {      
        nombreUsuario:req.body.nombreUsuario,
        contrasena:req.body.contrasena,
        nombreUsuario:req.body.nombreUsuario,
        nombres:req.body.nombres,
        apellidos:req.body.apellidos,
        correo:req.body.correo,
        activo:req.body.activo,
        token:req.body.token,
        fechaIni:req.body.fechaIni,
        fechafin:req.body.fechafin,
        idRol:req.body.idRol
    }
    
    // EXECUTING THE CREATE QUERY - INSERT THE OBJECT INTO DATABASE 
    dbManager.User.create(newUserObject).then (
        data => {
            res.send (data);
        }
    ).catch (
        e => {
            // Print error on console
            console.log(e);
            // Send error message as a response 
            res.status(500).send({
                message: "Some error occurred"
            });
        }
    );
}

/**
 * GEt all users between two dates
 */
async function findAllUsersByDates (req, res){

    const where = {
        from: {
            
        }
    };

    try {
        //Execute query
        const users = await dbManager.User.findAll ({
            where: {
                fechaIni:{
                    $ge: req.body.fechaIni
                },
                fechafin:{
                    $le:  req.body.fechafin
                }
            }
        });
        
        //Send response
        res.json({
                data: users
        });

    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}


/**
 * Get user by id
 */
async function findOneUser (req, res){
    try {
        const { idUser } = req.params;

        //Execute query
        const user = await dbManager.User.findOne({
            where: {
                idUser: idUser
            }
        });
        //Send response
        res.json(user);

    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}

/**
 * Update user
 */
async function updateUser (req, res){
    try {
        const { idUser } = req.params;

        //Execute query
        const user = await dbManager.User.findOne({
            where: {
                idUser: idUser
            }
        });
        
        //Send response
        res.json(user);

    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }
}

/**
 * Delete an existen user by username
 * @param {*} req 
 * @param {*} res 
 */
function deleteUserByUsername (req, res){ 
                /**
                 * TASK:
                 * IMPLEMENT THE FUNCTION______________________- 
                 */

}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
function deleteAllUsers (req, res){
                /**
                 * TASK:
                 * IMPLEMENT THE FUNCTION______________________- 
                 */
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
function findAllUsersByCreatedDate (req, res){
                /**
                 * TASK:
                 * IMPLEMENT THE FUNCTION______________________- 
                 */
}

/**
 * Get user by id
 */
async function ValidateOneUser (req, res){
    try {
        const { username } = req.params;

        //Execute query
        const user = await dbManager.User.findOne({
            where: {
                username: username
            }
        });
        //Send response
        if ( user == null ){
            res.json(false);
        }else{
            res.json(true);
        }         
    } catch (e) {
        // Print error on console
        console.log(e);
        // Send error message as a response 
        res.status(500).send({
            message: "Some error occurred"
        });
    }
    
}

exports.createUser = createUser; 
exports.findAllUsersByDates = findAllUsersByDates; 
exports.findOneUser = findOneUser; 
exports.updateUser = updateUser;
exports.deleteUserByUsername = deleteUserByUsername;
exports.deleteAllUsers = deleteAllUsers;
exports.findAllUsersByCreatedDate = findAllUsersByCreatedDate;
exports.ValidateOneUser = ValidateOneUser;