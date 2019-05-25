import axios from "axios";
import util from "../components/util";
import {Actions} from "./types";
import { getErrors} from "./exceptionAction";




export const getRecipeBySearchTerm = (search, history) => async dispatch => {
    try {
        const res = await axios.post("/api/recipes/searchByName", search)
        dispatch({
            type: Actions.GET_RECIPES,
            payload: res.data || []
        })
        history.push(`/search/${search.searchTerm}/results`)
    } catch (err) {
        getErrors(err, dispatch)
    }
}



export const getRecipesByCategory = (category) => async dispatch => {
    try {
        const res = await axios.get(`/api/recipes/searchByCategory/${category}`)
        dispatch({
            type: Actions.GET_RECIPES,
            payload: res.data
        })
    } catch (err) {
        getErrors(err, dispatch);
    }
}


export const getRecipeById = (recipeId) => async dispatch => {
    try {
        const res = await axios.get(`/api/recipes/searchByRecipeId/${recipeId}`)
        let refinedRecipe = util.getCleanUpRecipes(res.data[0]);
        dispatch({
            type: Actions.GET_RECIPE,
            payload: refinedRecipe
        })
    } catch (err) {
        getErrors(err, dispatch);
    }
}

export const saveRecipe = (recipe, userId) => async dispatch => {
    try {
        const res = await axios.post(`/api/currentUser/saveRecipe/${userId}`, recipe)
        dispatch({
            type: Actions.SET_SAVE_RECIPE_MESSAGE,
            payload: res.data
        })
    } catch (err) {
        getErrors(err, dispatch);
    }
}

export const setModalContent = (boolean) => async dispatch => {
        dispatch({
            type: Actions.SET_MODAL_CONTENT,
            payload: boolean
        })
}


export const getUserRecipes = (userId) => async dispatch => {
    try {
        const res = await axios.get(`/api/currentUser/getUserRecipes/${userId}`)
        dispatch({
            type: Actions.GET_FAVORITE_RECIPES,
            payload: res.data
        })
    } catch (err) {
        getErrors(err, dispatch);
    }
}

export const deleteRecipe = (recipeId, userId) => async dispatch => {
    try {
        const deleteResponse = await axios.delete(`/api/currentUser/deleteRecipe/${userId}/${recipeId}`)

        dispatch({
            type: Actions.DELETE_RECIPE,
            payload: recipeId
        })
        dispatch({
            type: Actions.SET_DELETE_RECIPE_MESSAGE,
            payload: deleteResponse.data
        })
    } catch (err) {
        getErrors(err, dispatch);
    }
}