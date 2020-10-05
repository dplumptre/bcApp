import * as actionTypes from './actionTypes';




export const authLoading =()=>{
    return {
       type: actionTypes.AUTH_LOADING
    }
}


export const authSuccess =(token,user)=>{
    return {
       type: actionTypes.AUTH_SUCCESS,
       token:token,
       user:user
    }
}


export const authFail =(err)=>{
    return {
       type: actionTypes.AUTH_FAIL,
       error:err
    }
}

export const autoLogout=()=>{
    return {
        type:actionTypes.AUTH_INI_LOGOUT
    }
}

export const authLogoutSucceed=()=>{
    return {
        type:actionTypes.AUTO_LOGOUT
    }
}

export const checkExpiry=(ex)=>{
    return {
        type:actionTypes.CHECK_EXPIRY,
        ex:ex
    }
}

export const authfalsifyRedirect = ()=>{
    return {
        type : actionTypes.AUTH_FALSIFY_REDIRECT,
    }
}



export const postAuth =(info)=>{
    return {
        type : actionTypes.POST_AUTH,
        info : info
    }
}



export const checkAuthenticationState =()=>{
    return {
        type : actionTypes.AUTH_CHECK_STATE,

    }
}


