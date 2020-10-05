import * as actionTypes from './actionTypes';

export const statusLoading =()=>{
    return {
        type: actionTypes.STATUS_LOADING
    }
}

export const  statusSuccess =()=>{
    return {
        type: actionTypes.STATUS_SUCCESS,
    }
}

export const  statusError =(error)=>{
    return {
        type: actionTypes.STATUS_ERROR,
        error: error
    }
}


export const status =(info,token)=>{
    return {
        type: actionTypes.STATUS,
        info:info,
        token:token
    }
}