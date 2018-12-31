import {
    GET_CATEGORIES,
    SET_MENUS,
    SET_PAGE_TITLE
} from "../actions/types";

const initialState = {
    categories: [],
    menus: [],
    pageTitle:"",
    showBackButton:false
}

export default function (state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORIES:
            return { ...state,
                categories: action.payload
            }
        case SET_MENUS:
            return { ...state,
                menus: action.payload
            }
        case SET_PAGE_TITLE:
            return { ...state,
                pageTitle: action.payload
            }
        default:
            return state
    }

}