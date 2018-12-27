import {SET_MENUS} from "../actions/types";

const initialState = []

export default function(state=initialState, action){
    switch (action.type) {
        case SET_MENUS:
        return action.payload;    
        default:
            return state;
    }

}