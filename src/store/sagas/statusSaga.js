import {put} from 'redux-saga/effects';
import * as actions from '../actions/index';
import axiosInstance from '../../Helpers/Axios/axiosInstance';
import axios from 'axios';
import  {showErrors} from './error';


export function* statusSaga (action){
    yield put(actions.statusLoading());
    try{
        const CancelToken = yield  axios.CancelToken;  // remember always use plain axios for this one
        const source = yield  CancelToken.source();
        const resp = yield  axiosInstance.post('score',action.info,{cancelToken:source.token});
        console.log(resp);
        yield put(actions.statusSuccess());
        // update answers
        //yield put(actions.answer(action.token));
        yield put(actions.latestAnswer(action.token,action.info.answerId,action.info.email));
    }catch(error){
       // console.log(error,error.response.data.error);
        const Err = yield showErrors(error);
        yield put(actions.statusError(Err));
    }
}