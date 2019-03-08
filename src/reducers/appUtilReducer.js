import {
Actions
} from "../actions/types";

const initialState = {
    categories: [],
    menus: [],
    pageTitle:"",
    showBackButton:false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case Actions.GET_CATEGORIES:
            return { ...state,
                categories: action.payload
            }
        case Actions.SET_MENUS:
            return { ...state,
                menus: action.payload
            }
        case Actions.SET_PAGE_TITLE:
            return { ...state,
                pageTitle: action.payload
            }
        default:
            return state
    }

}