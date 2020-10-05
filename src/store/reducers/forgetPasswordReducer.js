import * as actionsType from '../actions/actionTypes';


const initialState = {
    loading:false,
    success:null,
    error:null,
    resetLoading:false,
    resetError:null,
    resetSuccess:null,
    redirection:null
}

const forgetPasswordReducer = (state = initialState,action)=>{
    switch(action.type){
        case actionsType.FORGET_PASSWORD_LOADING_START:
        return{
            ...state,
            loading:true,
            success:null,
            redirection:false
        }
        case actionsType.FORGET_PASSWORD_SUCCESS:
        return{
            ...state,
            loading:false,
            success:action.data,
            error:null
        }
        case actionsType.FORGET_PASSWORD_ERROR:
        return{
            ...state,
            loading:false,
            error:action.error,
            success:null
        }
        case actionsType.RESET_LOADING_START:
        return{
            ...state,
            resetLoading:true,
            success:null,
            redirection:false,
            resetSuccess:null,
            resetError:null,
        }
        case actionsType.RESET_SUCCESS:
        return{
            ...state,
            resetLoading:false,
            redirection:true,
            resetSuccess:action.success,
        }
        case actionsType.RESET_ERROR:
        return{
            ...state,
            resetLoading:false,
            resetError:action.error,
            redirection:false
        }
        default:
        return state;

    }


}

export default forgetPasswordReducer;