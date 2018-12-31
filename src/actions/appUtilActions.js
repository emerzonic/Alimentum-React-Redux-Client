import util from "../components/util"
import assets from "../assets"
import {

    SET_PAGE_TITLE,
    GET_CATEGORIES,
    SET_MENUS
} from "./types";

//SETUP HOME PAGE MENU
export const getMenus = () => async dispatch => {
    let homePageMenus = util.getDataArray(assets.homeCardsObj)
    dispatch({
        type: SET_MENUS,
        payload: homePageMenus
    })
}

//GENERATE RECIPE CATEGORIES
export const getCategories = () => async dispatch => {
    let categories = util.getDataArray(assets.category)
    dispatch({
        type: GET_CATEGORIES,
        payload: categories
    })
}

//DYNAMIC PAGE TITLE UPDATE
export const updatePageTitle = (pageTitle) => async dispatch => {
    dispatch({
        type: SET_PAGE_TITLE,
        payload: pageTitle
    })
}


