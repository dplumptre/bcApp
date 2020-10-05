import * as actionTypes from './actionTypes';

export const answerLoading =()=>{
    return {
        type: actionTypes.ANSWER_LOADING
    }
}

export const answerSuccess =(info)=>{
    return {
        type: actionTypes.ANSWER_SUCCESS,
        info:info
    }
}

export const answerError =(error)=>{
    return {
        type: actionTypes.ANSWER_ERROR,
        error: error
    }
}


// export const latestAnswer =(token)=>{
//     return {
//         type: actionTypes.LATEST_ANSWER,
//         token:token
//     }
// }

export const latestAnswer =(token,answerId,email)=>{
    return {
        type: actionTypes.LATEST_ANSWER,
        token:token,
        email:email,
        answerId:answerId
    }
}

export const answerUpdate =(data,id)=>{
    return {
        type: actionTypes.ANSWER_UPDATE,
        data:data,
        id:id
    }
}

export const answer =(token)=>{
    return {
        type: actionTypes.ANSWER,
        token:token
    }
}