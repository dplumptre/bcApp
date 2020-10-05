import * as actionTypes from '../actions/actionTypes';

const initialState ={
        loading: true,
        classes :[],
        error:null,
        lectureLoading: false,
        lectures:[],
        lectureErrors:null,
        classInfo:{}
}


const classesReducer = (state = initialState,action )=>{
    switch(action.type){
        case actionTypes.CLASSES_LOADING_START:
        return {
            ...state,
            loading:true
        }
        case actionTypes.CLASSES_SUCCESS:
        return {
            ...state,
            loading:false,
            classes: action.data
        }
        case actionTypes.CLASSES_ERROR:
        return {
            ...state,
            loading:false,
            error:action.error
        }
        case actionTypes.LECTURE_LOADING_START:
        return {
            ...state,
            lectureLoading:true
        }
        case actionTypes.LECTURE_SUCCESS:
        return {
            ...state,
            lectureLoading:false,
            lectures: action.data,
            classInfo:action.classInfo
        }
        case actionTypes.LECTURE_ERROR:
        return {
            ...state,
            lectureLoading:false,
            lectureErrors:action.error
        }
        default:
        return state
    
    
    

    }

    

}

export default classesReducer;