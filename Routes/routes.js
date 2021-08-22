const Controller = require('../Controller/controller');
const router = require('express').Router()


 
//post new user
router.post('/api', Controller.postCreateUser);

// POST /api/users/login
router.post('/api/user/login', Controller.getLogIn);

//post the updated user
router.post('/edit/:id', Controller.postUpdatedUser);


//post new recipe ---> this will be the post recipe
router.post('/api/recipe', Controller.postNewRecipe);

//get all recipes
router.get('/', Controller.getAllRecipes)

//post new user comment 
router.post('/api/recipe/comment', Controller.postComment);

//getting a recipe by id
router.get('/api/:id', Controller.getOneRecipe);

// =============================================

//get all users
// router.get('/', Controller.getHomepage)


//getting a user item by id
// router.get('/api/:id', Controller.getAUserByID);

//get user to edit
// router.get('/edit/:id', Controller.getEdit);

//post the edited user
// router.post('/edit/:id', Controller.postEdit);

//post delete
// router.post('/api/:id', Controller.postDelete);




module.exports = router;