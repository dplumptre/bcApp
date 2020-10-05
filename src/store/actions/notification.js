 import * as actionTypes from './actionTypes';

export const notificationLoading =()=>{
    return {
        type: actionTypes.NOTIFICATION_LOADING
    }
}

export const notificationSuccess =(info)=>{
    return {
        type: actionTypes.NOTIFICATION_SUCCESS,
        info:info
    }
}

export const notificationError =(error)=>{
    return {
        type: actionTypes.NOTIFICATION_ERROR,
        error: error
    }
}

export const notification =(token,id)=>{
    return {
        type: actionTypes.NOTIFICATION,
        token:token,
        id:id
    }
}