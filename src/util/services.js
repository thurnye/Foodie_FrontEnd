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

  // login
  postLogin(data) {
    return http.post(`/api/user/login`, data);
  }

   // create experience -> post new recipe
  postRecipe(data) {
    return http.post("/api/recipe", data);
  }



  // create experience comments
  postComment(data) {
    return http.post("/api/recipe/comment", data);
  }

  // get all recipes
  find() {
    return http.get("/");
  }

  findById(id) {
    return http.get(`/api/${id}`);
  }


  // ------------------------------------
 

  
  
  findOne(id) {
    return http.get(`/edit/${id}`);
  }

  postEdit(id, data) {
    return http.post(`/edit/${id}`, data);
  }

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