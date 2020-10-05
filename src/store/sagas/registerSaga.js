import {put} from 'redux-saga/effects';
import * as actions from '../actions/index';
import axiosInstance from '../../Helpers/Axios/axiosInstance';
import axios from 'axios';
import  {showErrors} from './error';


export function* registerSaga (action){
    yield put(actions.registerLoadingStart());
    try{
        const CancelToken = yield  axios.CancelToken;  // remember always use plain axios for this one
        const source = yield  CancelToken.source();
        const resp = yield  axiosInstance.post('register',action.info,{cancelToken:source.token});
        console.log(resp);
        yield put(actions.registerSuccess());



        // const {token,expires,user} = resp.data
        // //console.log(token,expires,user);
        // const expiryDate = new Date (new Date().getTime() + (expires * 1000));
        // yield localStorage.setItem('token',token);
        // yield localStorage.setItem('user',JSON.stringify(user));
        // yield localStorage.setItem('expiryDate',expiryDate);
        // yield put(actions.authSuccess(token,user));
        // yield put(actions.checkExpiry(expires));




        
    }catch(error){
       // console.log(error,error.response.data.error);
        const Err = yield showErrors(error);
        yield put(actions.registerError(Err));
    }
}