import {SHOW_BACK_BUTTON} from "../actions/types";

const initialState = false

export default function(state=initialState, action){
    switch (action.type) {
        case SHOW_BACK_BUTTON:
        return action.payload;    
        default:
            return state;
    }
}