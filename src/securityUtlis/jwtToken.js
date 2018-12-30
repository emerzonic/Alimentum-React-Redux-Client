import axios from "axios";
import jwt_decode from "jwt-decode";
import { logoutUser } from "../actions/securityActions";



export const setJwtToken = (token)=>{
    if(token){
        axios.defaults.headers.common["Authorization"] = token;
    }else{
        delete axios.defaults.headers.common["Authorization"];
    }

}

export const updateJwtToken = (token, dispatch, type)=>{
    if(token){
        const decodedToken = jwt_decode(token);
        dispatch({
            type:type,
            payload:decodedToken
        })
    }else{
        dispatch({
            type:type,
            payload:{}
        })
    }
}


export const checkJwtTokenStatus = (token, dispatch)=>{
    const decodedToken = jwt_decode(token);
    const currentTime = Date.now() / 1000;
    if(decodedToken.exp < currentTime){
        dispatch(logoutUser())
        window.location.href="/user-form/login"
    }
 
}


