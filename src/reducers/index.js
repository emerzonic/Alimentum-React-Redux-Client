import {combineReducers} from "redux";
import errorReducer from "./errorReducer";
import saveFeedbackReducer from "./saveFeedbackReducer";
import recipeReducer from "./recipeReducer";
import recipesReducer from "./recipesReducer";
import createUserReducer from "./createUserReducer";
import pageTitleReducer from "./pageTitleReducer";
import categoriesReducer from "./categoriesReducer";

export default combineReducers({
    errors:errorReducer,
    saveFeedBack:saveFeedbackReducer,
    recipe:recipeReducer,
    recipes:recipesReducer,
    user:createUserReducer,
    pageTitle:pageTitleReducer,
    categories:categoriesReducer
})