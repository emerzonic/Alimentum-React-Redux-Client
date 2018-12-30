import {
    setJwtToken,
    updateJwtToken
} from "../securityUtlis/jwtToken";
import axios from "axios";
import {
    SET_CURRENT_USER,
    SET_WELCOME_MESSAGE,
} from "./types";
import {
    getErrors
} from "./exceptionAction";



export const createUser = (newUser, history) => async dispatch => {
    try {
        const res = await axios.post("/api/users/signup", newUser)
        dispatch({
            type: SET_WELCOME_MESSAGE,
            payload: res.data
        })
        history.push('/user-form/login');
    } catch (err) {
        getErrors(err, dispatch);
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
        getErrors(err, dispatch);
    }
}

export const logoutUser = (history) => async dispatch => {
    try {
        localStorage.removeItem("JwtToken");
        setJwtToken(false)
        updateJwtToken(false, dispatch, SET_CURRENT_USER)
        history.push("/user-form/login")
    } catch (err) {
        getErrors(err, dispatch);
    }
}