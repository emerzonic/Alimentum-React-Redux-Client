import axios from "axios";


export default {
  // Send a new user data to the database
  sendNewUserData: function (newUser) {
    return axios.post('/signup', newUser);
  },

  // Send a user login data to the database
  sendPreviousUserData: function (previousUser) {
    return axios.post('/signin', previousUser);
  },

  // Gets Recipes from the API
  searchRecipes: function (searchTerm) {
    return axios.get(`https://localhost5000${searchTerm}`);
  },

  // Gets all saved Recipes
  getSavedRecipes: function (userid) {
    return axios.get("/recipes/saved/" + userid);
  },

  // Saves an recipe to the database
  saveRecipe: function (recipe, userId) {
    return axios.post('/save_Recipes/' + userId, recipe);
  },

  // Delete the saved recipes with the given id
  deleteRecipe: function (id) {
    return axios.delete("/" + id);
  }
};