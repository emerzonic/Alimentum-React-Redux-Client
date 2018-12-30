import {
    setJwtToken,
    updateJwtToken
} from "../securityUtlis/jwtToken";
import util from "../components/util"
import assets from "../assets"
import axios from "axios";
import {
    GET_ERRORS,
    GET_RECIPES,
    GET_SAVE_FEEDBACK,
    GET_RECIPE_BY_ID,
    GET_PAGE_TITLE,
    GET_CATEGORIES,
    SET_MENUS,
    SET_CURRENT_USER,
    GET_USER_RECIPES,
    DELETE_RECIPE,
    DELETE_FEEDBACK,
    SHOW_BACK_BUTTON,
    SET_WELCOME_MESSAGE,
    SET_LOGIN_MESSAGE
} from "./types";

//==============================================================
//SETUP HOME PAGE MENU
//==============================================================
export const getMenus = () => async dispatch => {
    let homePageMenus = util.getDataArray(assets.homeCardsObj)
    dispatch({
        type: SET_MENUS,
        payload: homePageMenus
    })
}


//==============================================================
//SEARCH RECIPE ACTION
//==============================================================
export const getRecipeBySearchTerm = (searchTerm, history) => async dispatch => {
    try {
        const res = await axios.get(`/api/recipes/searchByName/${searchTerm}`)
        dispatch({
            type: GET_RECIPES,
            payload: res.data || []
        })
        history.push(`/search/${searchTerm}/results`)
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
}

//==============================================================
//GET RECIPES BY CATEGORIES ACTION
//==============================================================
export const getCategories = () => async dispatch => {
    let categories = util.getDataArray(assets.category)
    dispatch({
        type: GET_CATEGORIES,
        payload: categories
    })
}


export const updatePageTitle = (pageTitle) => async dispatch => {
    dispatch({
        type: GET_PAGE_TITLE,
        payload: pageTitle
    })
}

export const updateBackButton = (status) => async dispatch => {
    dispatch({
        type: SHOW_BACK_BUTTON,
        payload: status
    })
}

export const setRedirectMessage = (status) => async dispatch => {
    let message = {
        text: "Please login to perform that action."
    }
    dispatch({
        type: SET_LOGIN_MESSAGE,
        payload: status ? message : {}
    })
}


export const getRecipesByCategory = (category) => async dispatch => {
    try {
        const res = await axios.get(`/api/recipes/searchByCategory/${category}`)
        dispatch({
            type: GET_RECIPES,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
}

//==============================================================
//RECIPE DETAIL ACTIONS
//==============================================================
export const getRecipeById = (recipeId) => async dispatch => {
    try {
        const res = await axios.get(`/api/recipes/searchByRecipeId/${recipeId}`)
        let refinedRecipe = util.getRecipeObj(res.data[0]);
        dispatch({
            type: GET_RECIPE_BY_ID,
            payload: refinedRecipe
        })
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
}

export const saveRecipe = (recipe, userId) => async dispatch => {
    try {
        const res = await axios.post(`/api/currentUser/saveRecipe/${userId}`, recipe)
        dispatch({
            type: GET_SAVE_FEEDBACK,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
}


//==============================================================
//SECURITY ACTIONS
//==============================================================
export const createUser = (newUser, history) => async dispatch => {
    try {
        const res = await axios.post("/api/users/signup", newUser)
        dispatch({
            type: SET_WELCOME_MESSAGE,
            payload: res.data
        })
        history.push('/user-form/login');
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
}

export const loginUser = (user) => async dispatch => {
    try {
        const res = await axios.post("/api/users/login", user)
        const {
            token
        } = res.data;
        localStorage.setItem("JwtToken", token);
        setJwtToken(token)
        updateJwtToken(token, dispatch, SET_CURRENT_USER)
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
}

export const logoutUser = (history) => async dispatch => {
    try {
        localStorage.removeItem("JwtToken");
        setJwtToken(false)
        updateJwtToken(false, dispatch, SET_CURRENT_USER)
        history.push("/user-form/login")
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
}

//==============================================================
//USER FAVORITE RECIPES ACTIONS
//==============================================================
export const getUserRecipes = (userId) => async dispatch => {
    try {
        const res = await axios.get(`/api/currentUser/getUserRecipes/${userId}`)
        dispatch({
            type: GET_USER_RECIPES,
            payload: res.data
        })
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
}

export const deleteRecipe = (recipeId, userId) => async dispatch => {
    dispatch({
        type: DELETE_FEEDBACK,
        payload: {}
    })
    try {
         await axios.delete(`/api/currentUser/deleteRecipe/${userId}/${recipeId}`)
        const deleteResponse = await axios.delete(`/api/currentUser/deleteRecipe/${userId}/${recipeId}`)
        // const getRecipesResonse = await axios.get(`/api/currentUser/getUserRecipes/${userId}`)
        // dispatch({
        //     type: GET_USER_RECIPES,
        //     payload: getRecipesResonse.data
        // })
        dispatch({
            type: DELETE_RECIPE,
            payload: recipeId
        })
        dispatch({
            type: DELETE_FEEDBACK,
            payload: deleteResponse.data
        })
    } catch (err) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
}