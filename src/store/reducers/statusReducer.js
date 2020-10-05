
import * as actionsType from '../actions/actionTypes';

//   updates status on the answers table and insert into Notifiction table
//
const initialState = {
    loading:false,
    success:false,
    error:null,
}

const registerReducer = (state = initialState,action)=>{
    switch(action.type){
        case actionsType.STATUS_LOADING:
        return{
            ...state,
            loading:true,
            success:false,
            error:null
        }
        case actionsType.STATUS_SUCCESS:
        return{
            ...state,
            loading:false,
            success:true,
            error:null,
        }
        case actionsType.STATUS_ERROR:
        return{
            ...state,
            loading:false,
            error:action.error,
            success:false
        }
        default:
        return state;

    }


}

export default registerReducer;