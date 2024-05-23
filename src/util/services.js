import http from './http-commons';

class StuffDataService {

  // ===================USER==================
  // signup
  create(data) {
    return http.post('/user', data);
  }

  // update user
  postEdit(id, data) {
    return http.post(`/user/edit/${id}`, data);
  }

  // login
  postLogin(data) {
    return http.post(`/user/login`, data);
  }

  //======================Recipes============================

  // post recipe -> create and update
  postRecipe(userId, data) {
    return http.post(`/recipe/${userId}`, data);
  }
  // get user recipes
  getUserRecipes(id, data) {
    return http.post(`/recipe/user/${id}`, data);
  }

  // get all recipes
  find(data) {
    return http.post('/recipes', data);
  }

  // get all recipes by query
  findQuery(data) {
    return http.post('/recipes/query', data);
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

export default new StuffDataService();
