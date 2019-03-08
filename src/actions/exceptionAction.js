import {Actions} from "./types";


export const getErrors = (err, dispatch) => { 
    if (err.response && err.response.status && err.response.status === 500) {
        dispatch({
            type: Actions.GET_ERRORS,
            payload: err.response
        })
    } else {
        dispatch({
            type: Actions.GET_ERRORS,
            payload: err.response.data
        })
    }
}


export const resetErrors = (dispatch) => {  
        dispatch({
            type: Actions.RESET_ERRORS,
            payload: {}
        })

}