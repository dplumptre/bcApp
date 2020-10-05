import * as actionTypes from './actionTypes';

export const classesLoadingStart =()=>{
    return {
        type: actionTypes.CLASSES_LOADING_START
    }
}

export const classesSuccess =(data)=>{
    return {
        type: actionTypes.CLASSES_SUCCESS,
        data: data
    }
}

export const classesError =(error)=>{
    return {
        type: actionTypes.CLASSES_ERROR,
        error: error
    }
}

export const initClasses =(token)=>{
    return {
        type: actionTypes.INIT_CLASSES,
        token:token
    }
}


// lectures 
export const lectureLoadingStart =()=>{
    return {
        type: actionTypes.LECTURE_LOADING_START
    }
}

export const lectureSuccess =(data,classInfo)=>{
    return {
        type: actionTypes.LECTURE_SUCCESS,
        data: data,
        classInfo:classInfo
    }
}

export const lectureError =(error)=>{
    return {
        type: actionTypes.LECTURE_ERROR,
        error: error
    }
}

export const lectureInit =(id,token)=>{
    return {
        type: actionTypes.LECTURE_INIT,
        id:id,
        token:token
    }
}