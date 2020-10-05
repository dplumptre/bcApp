import * as actionTypes from '../actions/actionTypes'; 

const initialState ={
    user: null,
    token : null,
    redirection:false,
    loading:false,
    success:null

}

const authReducer = (state = initialState, action)=>{
    switch(action.type){
        case actionTypes.AUTH_LOADING:
        return{
            ...state,
            redirection:false,
            loading:true,
            error:null
        }
        case actionTypes.AUTH_SUCCESS:
        return {
            ...state,
            loading:false,
            token:action.token,
            user:action.user
        }
        case actionTypes.AUTH_FALSIFY_REDIRECT:
        return{
            ...state,
            redirection:false
        }
        case actionTypes.AUTH_FAIL:
        return{
            ...state,
            loading:false,
            error: action.error
        }
        case actionTypes.AUTO_LOGOUT:
        return{
            ...state,
            token:null,
            user:null
        } 

        default:
        return state
    }
}


export default authReducer;