import * as actionTypes from './actionTypes';

export const activationLoading =()=>{
    return {
        type: actionTypes.ACTIVATION_LOADING
    }
}

export const activationSuccess =()=>{
    return {
        type: actionTypes.ACTIVATION_SUCCESS,
    }
}

export const activationError =(error)=>{
    return {
        type: actionTypes.ACTIVATION_ERROR,
        error: error
    }
}


export const activation =(info)=>{
    return {
        type: actionTypes.ACTIVATION,
        token:info
    }
}