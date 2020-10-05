import * as actionsType from '../actions/actionTypes';

const initialState = {
    loading:false,
    success:false,
    notifications: null,
    error:null,
}

const notificationReducer = (state = initialState,action)=>{
    switch(action.type){
        case actionsType.NOTIFICATION_LOADING:
        return{
            ...state,
            loading:true,
            success:false,
            update:false
        }
        case actionsType.NOTIFICATION_SUCCESS:
        return{
            ...state,
            loading:false,
            success:false,
            notifications:action.info,
            error:null,
        }
        case actionsType.NOTIFICATION_ERROR:
        return{
            ...state,
            loading:false,
            success:false,
            notifications:null,
            error:action.error,
        }
        default:
        return state
    
    }
}


export default notificationReducer;