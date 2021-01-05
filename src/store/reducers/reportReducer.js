
import * as actionsType from '../actions/actionTypes';

//   updates status on the users table to get the report
//
const initialState = {
    loading:false,
    success:false,
    error:null,
    reports:null,
    downloadLoading:false,
    downloadSuccess:false,
    downloadedReport:null,
    downloadError:null,
}

const registerReducer = (state = initialState,action)=>{
    switch(action.type){
        case actionsType.REPORT_LOADING:
        return{
            ...state,
            downloadLoading:false,
            downloadSuccess:false,
            downloadedReport:null,
            loading:true,
            success:false,
            reports:null,
            error:null
        }
        case actionsType.REPORT_SUCCESS:
        return{
            ...state,
            loading:false,
            success:true,
            error:null,
            reports:action.data

        }
        case actionsType.REPORT_ERROR:
        return{
            ...state,
            loading:false,
            error:action.error,
            success:false,
            reports:null
        }
        case actionsType.DOWNLOAD_REPORT_LOADING:
        return{
            ...state,
            downloadLoading:true,
            downloadSuccess:false,
            downloadedReport:null,
            error:null
        }
        case actionsType.DOWNLOAD_REPORT_SUCCESS:
        return {
            ...state,
            downloadLoading:false,
            downloadedReport:action.data,
            downloadSuccess: true,
            error:null
        }
        case actionsType.DOWNLOAD_REPORT_ERROR:
        return {
            ...state,
            downloadLoading:false,
            downloadSuccess:false,
            downloadError:action.error
        }
        case actionsType.FALSIFY_DOWNLOAD_SUCCESS:
        return{
            ...state,
            downloadSuccess:false
        }
        default:
        return state;

    }


}

export default registerReducer;