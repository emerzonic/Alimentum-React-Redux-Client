import {
    Actions
} from "../actions/types";

const initialState = {
    user: {},
    validToken: false
}


export default function (state = initialState, action) {
    switch (action.type) {
        case Actions.SET_CURRENT_USER:
            return {
                ...state,
                user: action.payload,
                validToken: action.payload.id ? true : false
            }
        default:
            return state;
    }
}