import * as actionsType from '../actions/actionTypes';

const initialState = {
    loading:false,
    success:false,
    percentage: null,
    error:null,
}

const percentageReducer = (state = initialState,action)=>{
    switch(action.type){
        case actionsType.PERCENTAGE_LOADING:
        return{
            ...state,
            loading:true,
            success:false,
            update:false
        }
        case actionsType.PERCENTAGE_SUCCESS:
        return{
            ...state,
            loading:false,
            success:false,
            percentage:action.percentage,
            error:null,
        }
        case actionsType.PERCENTAGE_ERROR:
        return{
            ...state,
            loading:false,
            success:false,
            percentage:null,
            error:action.error,
        }
        default:
        return state
    
    }
}


export default percentageReducer;