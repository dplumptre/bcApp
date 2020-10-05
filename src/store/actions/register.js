import * as actionTypes from './actionTypes';

export const registerLoadingStart =()=>{
    return {
        type: actionTypes.REGISTER_LOADING_START
    }
}

export const registerSuccess =()=>{
    return {
        type: actionTypes.REGISTER_SUCCESS,
    }
}

export const registerError =(error)=>{
    return {
        type: actionTypes.REGISTER_ERROR,
        error: error
    }
}


export const postRegister =(info)=>{
    return {
        type: actionTypes.POST_REGISTER,
        info:info
    }
}