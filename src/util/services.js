import http from './http-commons';

class StuffDataService {

  // ===================USER==================
  // signup
  create(data) {
    return http.post('/user', data);
  }

  // update user
  postEditUser(data) {
    return http.post(`/user/edit/`, data);
  }

  // login
  postLogin(data) {
    return http.post(`/user/login`, data);
  }

  // google login/signup
  postGoogleLogin(data) {
    return http.post(`/user/google/login`, data);
  }
  
  // forgotten password 
  postForgottenPassword(data) {
    return http.post(`/user/forgottenPassword/login`, data);
  }

  // get one user by id
  findUserById(id) {
    return http.get(`/user/${id}`);
  }

  //======================Recipes============================

  // post recipe -> create and update
  postRecipe(userId, data) {
    return http.post(`/recipe/add/${userId}`, data);
  }
  // get user recipes
  getUserRecipes(id, data) {
    return http.post(`/recipe/user/${id}`, data);
  }

  // get all recipes
  getAllRecipes(data) {
    return http.post('/recipe', data);
  }

  // get all recipes by query
  findQuery(data) {
    return http.post('/recipe/query', data);
  }

  // get one recipe by id
  findById(id) {
    return http.get(`/recipe/${id}`);
  }

  //updateRecipe ---> Deprecated
  postUpdatedRecipe(id, data) {
    return http.post(`/recipe/update/${id}`, data);
  }

  // remove Recipe
  removeRecipe(id) {
    return http.post(`/recipe/removeRecipe/${id}`);
  }

  //generate pdf -server
  generateCookBookPDF(userId, data) {
    return http.post(`/recipe/generateBook/${userId}`, data, {
      responseType: 'blob'
    })
  }
  //generate CookBook - frontend
  generateCookBook(userId, data) {
    return http.post(`/recipe/generateCookBook/${userId}`, data)
  }

  // =====================Reviews===============================

  // create experience comments
  postReview(data) {
    return http.post('/review/recipe', data);
  }

  // ======================EVENTS================================

  //create event
  postEvent(data) {
    return http.post('/event', data);
  }

  //get event query
  getEvents(data) {
    return http.post('/event/query', data);
  }

  // get user event
  getUserEvents(userId, data) {
    return http.post(`/event/user/${userId}`, data);
  }

  // get one event
  findEventById(id) {
    return http.get(`/event/${id}`);
  }

  // remove event
  removeEvent(id) {
    return http.post(`/event/${id}`);
  }


  // =======================Forum Room==========================
  postForum(data) {
    return http.post(`/forum`, data);
  }
  getForums(data) {
    return http.post(`/forum/all`, data);
  }


  // =======================Group Room==========================
  postGroup(data) {
    return http.post(`/group`, data);
  }
  
  getGroups(data) {
    return http.post(`/group/all`, data);
  }
  
  // Join or Leave Group
  postGroupRequest(data){
    return http.post('/group/request', data)
  }
  
  // Get Single Group
  getGroup(groupId){
    return http.get(`/group/${groupId}`)
  }
  
  // Approve Group Join Request
  postApproveRequest(data){
    return http.post(`/group/approve`, data)
  }
  
  //private group
  postPrivateGroup(data){
    return http.post(`/group/private`, data);

  }

  // ======================= DISCUSSION PANEL==========================
  postGroupDiscussionPanel(data){
    return http.post(`/panel`, data)
  }
  getGroupDiscussionPanels(data){
    return http.post(`/panel/discussions`, data)
  }



  // =======================Other Services==========================
  getAutoComplete(data) {
    return http.post(`/autoComplete`, data);
  }






  // ------------------------------------

  findOne(id) {
    return http.get(`/edit/${id}`);
  }

  // postEdit(id, data) {
  //   return http.post(`/edit/${id}`, data);
  // }

  remove(id) {
    return http.post(`/api/${id}`);
  }

  deleteAll() {
    return http.delete(`/api`);
  }

  findByTitle(title) {
    return http.get(`/api?title=${title}`);
  }
  
  
}

export default new StuffDataService()