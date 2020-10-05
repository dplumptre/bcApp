import {put} from 'redux-saga/effects';
import * as actions from '../actions/index';
import axiosInstance from '../../Helpers/Axios/axiosInstance';
import axios from 'axios';
import  {showErrors} from './error';


export function* forgetPasswordSaga (action){
    yield put(actions.forgetPasswordLoadingStart());
    try{
        const CancelToken = yield  axios.CancelToken;  // remember always use plain axios for this one
        const source = yield  CancelToken.source();
        const resp = yield  axiosInstance.post('forget-password',action.info,{cancelToken:source.token});
        console.log(resp);
        yield put(actions.forgetPasswordSuccess(resp.data.result));
    }catch(error){
       // console.log(error,error.response.data.error);
        const Err = yield showErrors(error);
        yield put(actions.forgetPasswordError(Err));
    }
}



export function* resetSaga (action){
    yield put(actions.resetLoadingStart());
    try{
        const CancelToken = yield  axios.CancelToken;  // remember always use plain axios for this one
        const source = yield  CancelToken.source();
        const resp = yield  axiosInstance.post('reset',action.info,{cancelToken:source.token});
        console.log(resp);
        yield put(actions.resetSuccess(resp.data.result));
    }catch(error){
       // console.log(error,error.response.data.error);
        const Err = yield showErrors(error);
        yield put(actions.resetError(Err));
    }
}