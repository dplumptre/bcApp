import {put} from 'redux-saga/effects';
import * as actions from '../actions/index';
import axiosInstance from '../../Helpers/Axios/axiosInstance';
import axios from 'axios';
import  {showErrors} from './error';

export function* questionsInitSaga (action){
    yield put(actions.questionsLoadingStart());
    try{
        const CancelToken = yield  axios.CancelToken;  // remember always use plain axios for this one
        const source = yield  CancelToken.source();
        const resp = yield  axiosInstance.get(`question/${action.id}?token=${action.token}`,{cancelToken:source.token});
        yield put(actions.questionsSuccess(resp.data.result,resp.data.classInfo));
    }catch(error){
        const Err = yield showErrors(error);
        yield put(actions.questionsError(Err));
    }
}

export function* postQuestionsInitSaga (action){
    yield put(actions.postQuestionsLoadingStart());
    try{
        const CancelToken = yield  axios.CancelToken;  // remember always use plain axios for this one
        const source = yield  CancelToken.source();
        const resp = yield  axiosInstance.post(`question/${action.id}?token=${action.token}`,action.info,{cancelToken:source.token});
        console.log(resp);
        yield put(actions.postQuestionsSuccess(resp.data.result));
    }catch(error){
       // console.log(error,error.response.data.error);
        const Err = yield showErrors(error);
        yield put(actions.postQuestionsError(Err));
    }
}