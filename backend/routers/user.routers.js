var express = require('express');
var router = express.Router();
const userController = require ('../controllers/user.userController'); 

/**
 * POST Route to create user
 */
router.post ('/createUser',userController.createUser);
/**
 * GET Route to list all users
 */
router.get('/findByDate', userController.findAllUsersByDates);
/**
 * GET Route to find user by id
 */
router.get('/:idUser', userController.findOneUser);

/**
 * PUT Route to update an user by id
 */
router.put ('/:idUser',userController.updateUser);
/**
 * DELETE Route to delete an user by username
 */
router.delete ('/:username',userController.deleteUserByUsername);
/**
 * DELETE Route to delete all users
 */
router.delete ('/',userController.deleteAllUsers);
/**
 * Get Route to validate a username
 */
router.get('/ValidateOneUser/:username',userController.ValidateOneUser);


/**
 * TASK:
 * ADD THE MISSING ROUTES ______________________________________________________ 
 */

// Export router
module.exports = router;

