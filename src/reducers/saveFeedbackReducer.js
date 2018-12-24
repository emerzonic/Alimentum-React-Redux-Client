import {GET_SAVE_FEEDBACK} from "../actions/types";

const initialState = "";

export default function(state=initialState, action){
    switch (action.type) {
        case GET_SAVE_FEEDBACK:
        return action.payload;    
        default:
            return state;
    }

}