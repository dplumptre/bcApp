import {put} from 'redux-saga/effects';
import axiosInstance from '../../Helpers/Axios/axiosInstance';
import * as actions from '../actions/index';
import  axios from 'axios';
import  {showErrors} from './error';



export function*  initClassesSaga (action){
    yield put(actions.classesLoadingStart());
    try{
        const CancelToken = yield  axios.CancelToken;  // remember always use plain axios for this one
        const source = yield  CancelToken.source();
        const resp = yield  axiosInstance.get(`online-class?token=${action.token}`,{cancelToken:source.token});
        yield put(actions.classesSuccess(resp.data.result));
    }catch(error){
        const Err = yield showErrors(error);
        yield put(actions.classesError(Err));
    }
    
}



export function*  lectureInitSaga (action){
    yield put(actions.lectureLoadingStart());
    try{
        const CancelToken = yield  axios.CancelToken;  // remember always use plain axios for this one
        const source = yield  CancelToken.source();
        const resp = yield  axiosInstance.get(`online-lecture/${action.id}?token=${action.token}`,{cancelToken:source.token});
        yield put(actions.lectureSuccess(resp.data.result,resp.data.classInfo));
    }catch(error){
        const Err = yield showErrors(error);
        yield put(actions.lectureError(Err));
    }
    
}



