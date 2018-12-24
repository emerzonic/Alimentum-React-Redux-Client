import axios from "axios";
import util from "../components/util"
import assets from "../assets"
import {GET_ERRORS, GET_CURRENT_USER_DATA, 
    GET_RECIPES, GET_SAVE_FEEDBACK, 
    GET_RECIPE_BY_ID, GET_PAGE_TITLE,GET_CATEGORIES} from "./types";
// import promiseMiddleware from 'redux-promise';


export const getRecipeBySearchTerm = (searchTerm, history) => async dispatch => {
    try{
        const res = await axios.get(`http://localhost:5000/api/recipes/searchByName/${searchTerm}`)
        console.log(res.data)
        dispatch({
            type:GET_RECIPES, 
            payload:res.data
        })
        history.push(`/search/${searchTerm}/results`)
    }catch(err){
        console.log(err)
        dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        })
    }
}


export const getCategories = () => async dispatch => {
    let categories = util.getDataArray(assets.category)
    try{
        dispatch({
            type:GET_CATEGORIES, 
            payload:categories
        })
    }catch(err){
        dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        })
}
}


export const updatePageTitle = (pageTitle) => async dispatch => {
    try{
        dispatch({
            type:GET_PAGE_TITLE, 
            payload:`${pageTitle}`
        })
    }catch(err){
        dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        })
}
}

export const getRecipesByCategory = (category) => async dispatch => {
    try{
        const res = await axios.get(`http://localhost:5000/api/recipes/searchByCategory/${category}`)
        dispatch({
            type:GET_RECIPES,
            payload:res.data
        })
    }catch(err){
        dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        })
    }
}

//==============================================================
//RECIPE DETAIL ACTIONS
//==============================================================
export const getRecipeById = (recipeId) => async dispatch => {
    try{
        const res = await axios.get(`http://localhost:5000/api/recipes/searchByRecipeId/${recipeId}`)
        let refinedRecipe = util.getRecipeObj(res.data[0]);
        dispatch({
            type:GET_RECIPE_BY_ID, 
            payload:refinedRecipe
        })
    }catch(err){
        dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        })
    }
}

export const saveRecipe = (recipe, userId) => async dispatch => {
    try{
        const res = await axios.post(`http://localhost:5000/api/currentUser/saveRecipe/${userId}`, recipe)
        dispatch({
            type:GET_SAVE_FEEDBACK,
            payload:res.data.text
        })
    }catch(err){
        dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        })
    }
}


//==============================================================
//USER SIGNUP & LOGIN ACTIONS
//==============================================================
export const createUser = (newUser, history) => async dispatch => {
    try{
        const res = await  axios.post("http://localhost:5000/api/users/signup", newUser)
       history.push('/user-form/login');
    }catch(err){
        dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        })
    }
}

export const loginUser = (user, history) => async dispatch => {
    try{
        const res = await  axios.post("http://localhost:5000/api/users/login", user)
        dispatch({
            type:GET_CURRENT_USER_DATA,
            payload:res.data
        })
        history.push('/');
    }catch(err){
        dispatch({
            type:GET_ERRORS,
            payload:err.response.data
        })
    }
}

//==============================================================
//USER FAVORITE RECIPES ACTIONS
//==============================================================