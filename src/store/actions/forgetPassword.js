import * as actionTypes from './actionTypes';

export const forgetPasswordLoadingStart =()=>{
    return {
        type: actionTypes.FORGET_PASSWORD_LOADING_START
    }
}

export const forgetPasswordSuccess =(data)=>{
    return {
        type: actionTypes.FORGET_PASSWORD_SUCCESS,
        data: data
    }
}

export const forgetPasswordError =(error)=>{
    return {
        type: actionTypes.FORGET_PASSWORD_ERROR,
        error: error
    }
}


export const forgetPassword =(info)=>{
    return {
        type: actionTypes.FORGET_PASSWORD,
        info: info
    }
}



export const resetLoadingStart =()=>{
    return {
       type: actionTypes.RESET_LOADING_START
    }
}

export const resetSuccess =(data)=>{
    return {
       type: actionTypes.RESET_SUCCESS,
       success:data
    }
}

export const resetError =(error)=>{
    return {
       type: actionTypes.RESET_ERROR,
       error:error
    }
}

export const reset =(info)=>{
    return {
       type: actionTypes.RESET,
       info:info
    }
}
