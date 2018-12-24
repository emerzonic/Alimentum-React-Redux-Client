import {GET_RECIPE_BY_ID} from "../actions/types";

const initialState = {}

export default function(state=initialState, action){
    switch (action.type) {
        case GET_RECIPE_BY_ID:
        return action.payload;    
        default:
            return state;
    }

}