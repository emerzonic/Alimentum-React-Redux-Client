import {
    Actions
} from "../actions/types";

const initialState = {
    saveMessage: {},
    deleteMessage: {},
    redirectMessage: {},
    welcomeMessage: {}
}

export default function (state = initialState, action) {
    switch (action.type) {
        case Actions.SET_SAVE_RECIPE_MESSAGE:
            return { ...state,
                saveMessage: action.payload
            }
        case Actions.SET_DELETE_RECIPE_MESSAGE:
            return { ...state,
                deleteMessage: action.payload
            }
        case Actions.SET_REDIRECT_MESSAGE:
            return { ...state,
                redirectMessage: action.payload
            }
        case Actions.SET_WELCOME_MESSAGE:
            return { ...state,
                welcomeMessage: action.payload
            }
        default:
            return state
    }

}