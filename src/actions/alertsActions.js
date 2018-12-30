import {
    SET_REDIRECT_MESSAGE,    
} from "./types";



export const setRedirectMessage = (status, action) => async dispatch => {
    let message = {
        text: `Please login to ${action}.`
    }
    dispatch({
        type: SET_REDIRECT_MESSAGE,
        payload: status ? message : {}
    })
}


