import * as actionsType from '../actions/actionTypes';


const initialState = {
            loading:false,
            questions:[],
            error:null,
            postLoading:false,
            postSuccess:null,
            postError:[]
}

const qnaReducer = (state = initialState,action) =>{
    switch(action.type){
        case actionsType.QUESTIONS_LOADING_START:
        return{
            ...state,
            loading:true,
            postSuccess:null,
        }
        case actionsType.QUESTIONS_SUCCESS:
        return{
            ...state,
            loading:false,
            questions:action.data
        }
        case actionsType.QUESTIONS_ERROR:
        return{
            ...state,
            loading:false,
            error:action.error
        }
        case actionsType.POST_QUESTIONS_LOADING_START:
        return{
            ...state,
            postLoading:true,
            postError:[]
        }
        case actionsType.POST_QUESTIONS_SUCCESS:
        return{
            ...state,
            postLoading:false,
            postSuccess:action.data,
            postError:[]
        }
        case actionsType.POST_QUESTIONS_ERROR:
        return{
            ...state,
            postLoading:false,
            postSuccess:null,
            postError:action.error
        }
        case actionsType.NULLIFY_SUCCESS_POST_QUESTION:
        return{
            ...state,
            postSuccess:null,
        }
        default:
        return state
    }
}


export default qnaReducer;