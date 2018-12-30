import {
    SET_SAVE_RECIPE_MESSAGE,
    SET_DELETE_RECIPE_MESSAGE,
    SET_REDIRECT_MESSAGE,
    SET_WELCOME_MESSAGE
} from "../actions/types";

const initialState = {
    saveMessage: {},
    deleteMessage: {},
    redirectMessage: {},
    welcomeMessage: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case SET_SAVE_RECIPE_MESSAGE:
            return { ...state,
                saveMessage: action.payload
            }
        case SET_DELETE_RECIPE_MESSAGE:
            return { ...state,
                deleteMessage: action.payload
            }
        case SET_REDIRECT_MESSAGE:
            return { ...state,
                redirectMessage: action.payload
            }
        case SET_WELCOME_MESSAGE:
            return { ...state,
                welcomeMessage: action.payload
            }
        default:
            return state
    }

}