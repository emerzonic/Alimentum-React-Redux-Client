import {DELETE_FEEDBACK} from "../actions/types";

const initialState = {}

export default function(state=initialState, action){
    switch (action.type) {
        case DELETE_FEEDBACK:
        return action.payload;    
        default:
            return state;
    }

}