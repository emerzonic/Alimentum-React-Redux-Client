import {GET_USER_RECIPES} from "../actions/types";

const initialState = []

export default function(state=initialState, action){
    switch (action.type) {
        case GET_USER_RECIPES:
        return action.payload;    
        default:
            return state;
    }

}