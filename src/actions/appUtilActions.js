import util from "../components/util"
import assets from "../assets"
import { Actions
} from "./types";

export const getMenus = () => async dispatch => {
    let homePageMenus = util.getDataArray(assets.homeCardsObj)
    dispatch({
        type: Actions.SET_MENUS,
        payload: homePageMenus
    })
}

export const getCategories = () => async dispatch => {
    let categories = util.getDataArray(assets.category)
    dispatch({
        type: Actions.GET_CATEGORIES,
        payload: categories
    })
}

export const updatePageTitle = (pageTitle) => async dispatch => {
    dispatch({
        type: Actions.SET_PAGE_TITLE,
        payload: pageTitle
    })
}


