
import * as actionsType from '../actions/actionTypes';

const initialState = {
    loading:false,
    success:false,
    error:null,
    redirection:false,
}

const registerReducer = (state = initialState,action)=>{
    switch(action.type){
        case actionsType.REGISTER_LOADING_START:
        return{
            ...state,
            loading:true,
            success:false,
            user:{},
            token:null,
            redirection:false,
        }
        case actionsType.REGISTER_SUCCESS:
        return{
            ...state,
            loading:false,
            success:true,
            error:null,
            redirection:true,
        }
        case actionsType.AUTH_FALSIFY_REDIRECT:
        return{
            ...state,
            redirection:false,
            success:false,
        }
        case actionsType.REGISTER_ERROR:
        return{
            ...state,
            loading:false,
            error:action.error
        }
        default:
        return state;

    }


}

export default registerReducer;