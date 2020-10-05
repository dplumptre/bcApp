import * as actionTypes from './actionTypes';

export const questionsLoadingStart =()=>{
    return {
        type: actionTypes.QUESTIONS_LOADING_START
    }
}

export const questionsSuccess =(data)=>{
    return {
        type: actionTypes.QUESTIONS_SUCCESS,
        data: data
    }
}

export const questionsError =(error)=>{
    return {
        type: actionTypes.QUESTIONS_ERROR,
        error: error
    }
}

export const questionsInit =(id,token)=>{
    return {
        type: actionTypes.QUESTIONS_INIT,
        id:id,
        token:token
    }
}


// post questions


export const nullifySuccess =()=>{
    return {
        type: actionTypes.NULLIFY_SUCCESS_POST_QUESTION
    }
}

export const postQuestionsLoadingStart =()=>{
    return {
        type: actionTypes.POST_QUESTIONS_LOADING_START
    }
}

export const postQuestionsSuccess =(data)=>{
    return {
        type: actionTypes.POST_QUESTIONS_SUCCESS,
        data: data
    }
}

export const postQuestionsError =(error)=>{
    return {
        type: actionTypes.POST_QUESTIONS_ERROR,
        error: error
    }
}

export const postQuestionsInit =(id,info,token)=>{
    return {
        type: actionTypes.POST_QUESTIONS_INIT,
        id:id,
        info:info,
        token:token
    }
}