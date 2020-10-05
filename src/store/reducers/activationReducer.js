import * as actionsType from '../actions/actionTypes';

const initialState = {
    loading:false,
    success:false,
    error:null,
}

const activationReducer = (state = initialState,action)=>{
    switch(action.type){
        case actionsType.ACTIVATION_LOADING:
        return{
            ...state,
            loading:true,
            success:false,
        }
        case actionsType.ACTIVATION_ERROR:
        return{
            ...state,
            loading:false,
            success:false,
            error:action.error,
        }
        case actionsType.ACTIVATION_SUCCESS:
        return{
            ...state,
            loading:false,
            success:true,
            error:null,
        }
        default:
        return state;

    }


}

export default activationReducer;