const Controller = require('../Controller/controller');
const router = require('express').Router()

//get all users
router.get('/', Controller.getHomepage)
 
//post new user
router.post('/api', Controller.postCreateUser);

// POST /api/users/login
router.post('/api/user/login', Controller.getLogIn);

//post the edited user
router.post('/edit/:id', Controller.postUserOtherInfo);


// =============================================

//getting a user item by id
router.get('/api/:id', Controller.getAUserByID);

//get user to edit
router.get('/edit/:id', Controller.getEdit);

//post the edited user
// router.post('/edit/:id', Controller.postEdit);

//post delete
router.post('/api/:id', Controller.postDelete);




module.exports = router;