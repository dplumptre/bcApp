import * as actionTypes from './actionTypes';

export const percentageLoading =()=>{
    return {
        type: actionTypes.PERCENTAGE_LOADING
    }
}

export const percentageSuccess =(data)=>{
    return {
        type: actionTypes.PERCENTAGE_SUCCESS,
        percentage: data
    }
}

export const percentageError =(error)=>{
    return {
        type: actionTypes.PERCENTAGE_ERROR,
        error: error
    }
}


export const percentage =(token,id)=>{
    return {
        type: actionTypes.PERCENTAGE,
        token:token,
        id:id
    }
}