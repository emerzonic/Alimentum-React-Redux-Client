import {combineReducers} from "redux";
import errorReducer from "./errorReducer";
import recipeReducer from "./recipeReducer";
import currentUserReducer from "./currentUserReducer";
import alertsMessageReducer from "./alertsMessageReducer";
import appUtilReducer from "./appUtilReducer";

export default combineReducers({
    errors:errorReducer,
    recipe:recipeReducer,
    currentUser:currentUserReducer,
    alerts:alertsMessageReducer,
    appUtil:appUtilReducer,
})