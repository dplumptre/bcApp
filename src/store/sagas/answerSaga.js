import {put} from 'redux-saga/effects';
import axiosInstance from '../../Helpers/Axios/axiosInstance';
import * as actions from '../actions/index';
import  axios from 'axios';
import  {showErrors} from './error';



export function*  answerSaga (action){

    yield put(actions.answerLoading());
    try{
        const CancelToken = yield  axios.CancelToken;  // remember always use plain axios for this one
        const source = yield  CancelToken.source();
        const resp = yield  axiosInstance.get(`get-answers?token=${action.token}`,{cancelToken:source.token});
        console.log(resp.data,action.token);
        yield put(actions.answerSuccess(resp.data.result));
    }catch(error){
        const Err = yield showErrors(error);
        yield put(actions.answerError(Err));
    }
    
}


export function*  latestAnswerSaga(action){

    //yield put(actions.answerLoading());
    // try{
    //     const CancelToken = yield  axios.CancelToken;  // remember always use plain axios for this one
    //     const source = yield  CancelToken.source();
    //     const resp = yield  axiosInstance.get(`get-answers?token=${action.token}`,{cancelToken:source.token});
    //     console.log('yesss',resp.data.result,action.token);
    //    // yield put(actions.answerSuccess(resp.data.result));
    //     yield put(actions.answerUpdate(resp.data.result));
    // }catch(error){
    //     const Err = yield showErrors(error);
    //     yield put(actions.answerError(Err));
    // }
       // yield put(actions.answerUpdate(resp.data.result));
  //  }catch(error){
       // console.log('an error occured, couldnt get data');
        // const Err = yield showErrors(error);
        // yield put(actions.answerError(Err));
   // }


   try{
    const CancelToken = yield  axios.CancelToken;  // remember always use plain axios for this one
    const source = yield  CancelToken.source();
    const resp = yield  axiosInstance.get(`get-single-answers/${action.answerId}?token=${action.token}`,{cancelToken:source.token});
    console.log('yesss',resp.data.result);
 // yield put(actions.answerUpdate(resp.data.result));
    yield put(actions.answerUpdate(resp.data.result,resp.data.user_id));
    }catch(error){
    const Err = yield showErrors(error);
    yield put(actions.answerError(Err));
    }
    
}