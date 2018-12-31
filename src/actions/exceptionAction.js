import {
    GET_ERRORS,RESET_ERRORS
} from "./types";


export const getErrors = (err, dispatch) => {   
    if (err.response && err.response.status && err.response.status === 500) {
        dispatch({
            type: GET_ERRORS,
            payload: err.response
        })
    } else {
        dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
    }
}


export const resetErrors = (dispatch) => {  
        dispatch({
            type: RESET_ERRORS,
            payload: {}
        })

}