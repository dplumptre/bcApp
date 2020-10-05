import {put} from 'redux-saga/effects';
import axiosInstance from '../../Helpers/Axios/axiosInstance';
import * as actions from '../actions/index';
import  axios from 'axios';
import  {showErrors} from './error';



export function*  percentageSaga (action){

    yield put(actions.percentageLoading());
    try{
        const CancelToken = yield  axios.CancelToken;  // remember always use plain axios for this one
        const source = yield  CancelToken.source();
        const resp = yield  axiosInstance.get(`get-percentage/${action.id}?token=${action.token}`,{cancelToken:source.token});
        yield put(actions.percentageSuccess(resp.data.result));
    }catch(error){
        const Err = yield showErrors(error);
        yield put(actions.percentageError(Err));
    }
    
}