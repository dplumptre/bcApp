import {put,delay} from 'redux-saga/effects';
//import {delay} from 'redux-saga';
import * as actions from '../actions/index';
import axiosInstance from '../../Helpers/Axios/axiosInstance';
import axios from 'axios';
import  {showErrors} from './error';





export function*  autoLogoutSaga(action){
    yield localStorage.removeItem('token');
    yield localStorage.removeItem('user');
    yield localStorage.removeItem('expiryDate');
    yield put(actions.authLogoutSucceed());
}


export function* checkExpirySaga(action){
    yield delay(action.ex * 1000);
    yield put (actions.autoLogout());
}



export function* postAuthSaga(action){

    yield put(actions.authLoading());
    try{
        const CancelToken = yield  axios.CancelToken;  // remember always use plain axios for this one
        const source = yield  CancelToken.source();
        const resp = yield  axiosInstance.post('/login',action.info,{cancelToken:source.token});
        const {token,expires,user} = resp.data
         //console.log(token,expires,user);
         const expiryDate = yield new Date (new Date().getTime() + (expires * 1000));
         yield localStorage.setItem('token',token);
         yield localStorage.setItem('user',JSON.stringify(user));
         yield localStorage.setItem('expiryDate',expiryDate);
         yield put(actions.authSuccess(token,user));
         yield put(actions.checkExpiry(expires));
    }catch(error){
       // console.log(error,error.response.data.error);
        const Err = yield showErrors(error);
        yield put(actions.authFail(Err));
    }
}





export function* checkAuthenticationStateSaga(){
    const token = yield localStorage.getItem('token');
    if(!token){
        yield put(actions.autoLogout());
       }else{
           const  expiryDate = yield new Date(localStorage.getItem('expiryDate'));
        if(expiryDate <= new Date()){
         //   console.log('theres token',expiryDate ,new Date() );
           yield put(actions.autoLogout());
        }else{
          
            const  user = yield localStorage.getItem('user');
            yield put(actions.authSuccess(token,JSON.parse(user)));
            const expires = ((expiryDate.getTime() - new Date().getTime())/1000);
            yield put(actions.checkExpiry(expires));
        }

       }


}

