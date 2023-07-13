import http from './http-commons';

class StuffDataService {

  // signup
  create(data) {
    return http.post("/api", data);
  }

  // update user
  postEdit(id, data) {
    return http.post(`/edit/${id}`, data);
  }

  // get user recipes
  getUserRecipes(id, data) {
    return http.post(`/user/${id}`, data);
  }

  // login
  postLogin(data) {
    return http.post(`/api/user/login`, data);
  }

   // create experience -> post new recipe
  postRecipe(data) {
    return http.post("/api/recipe", data);
  }



  // create experience comments
  postReview(data) {
    return http.post("/api/recipe/review", data);
  }

  // get all recipes
  find(data) {
    return http.post("/", data);
  }

  // get all recipes
  findQuery(data) {
    return http.post("/query", data);
  }

  // get one recipe
  findById(id) {
    return http.get(`/api/${id}`);
  }

  //updateRecipe
  postUpdatedRecipe(id, data) {
    return http.post(`/api/recipe/update/${id}`, data);
  }

  // remove Recipe
  removeRecipe(id) {
    return http.post(`/api/removeRecipe/${id}`);
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