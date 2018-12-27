import {combineReducers} from "redux";
import errorReducer from "./errorReducer";
import saveFeedbackReducer from "./saveFeedbackReducer";
import recipeReducer from "./recipeReducer";
import recipesReducer from "./recipesReducer";
import pageTitleReducer from "./pageTitleReducer";
import categoriesReducer from "./categoriesReducer";
import menuReducer from "./menuReducer";
import currentUserReducer from "./currentUserReducer";
import favoriteRecipesReducer from "./favoriteRecipesReducer";
import deleteRecipeReducer from "./deleteRecipeReducer";
import backButtonReducer from "./backButtonReducer";

export default combineReducers({
    errors:errorReducer,
    saveFeedBack:saveFeedbackReducer,
    recipe:recipeReducer,
    recipes:recipesReducer,
    currentUser:currentUserReducer,
    pageTitle:pageTitleReducer,
    categories:categoriesReducer,
    menus:menuReducer,
    favoriteRecipes:favoriteRecipesReducer,
    deleteFeedBack:deleteRecipeReducer,
    showBackButton:backButtonReducer
})