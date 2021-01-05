import {put} from 'redux-saga/effects';
import * as actions from '../actions/index';
import axiosInstance from '../../Helpers/Axios/axiosInstance';
import axios from 'axios';
import  {showErrors} from './error';


export function* reportSaga (action){
    yield put(actions.reportLoading());
    try{
        const CancelToken = yield  axios.CancelToken;  // remember always use plain axios for this one
        const source = yield  CancelToken.source();
        const resp = yield  axiosInstance.get(`get-reports?token=${action.token}`,{cancelToken:source.token});
        yield put(actions.reportSuccess(resp.data.result));
    }catch(error){
        const Err = yield showErrors(error);
        yield put(actions.reportError(Err));
    }
}


export function* downloadReportSaga (action){
    yield put(actions.downloadReportLoading());
    try{
        const CancelToken = yield  axios.CancelToken;  // remember always use plain axios for this one
        const source = yield  CancelToken.source();
        const resp = yield  axiosInstance.post(`download-reports?token=${action.token}`,action.info,{cancelToken:source.token, responseType: 'blob'});
        console.log(resp.data);
        yield put(actions.downloadReportSuccess(resp.data));
        // new Blob([data], {type: "application/octet-stream"}), "test.xlsx");
        // var blob = new Blob([response.data], {type: "text/plain;charset=utf-8"});
        //var blob = new Blob([resp.data], {type: "application/pdf;charset=utf-8"});
        //var filesaver = saveAs(blob,'report.pdf');

        /* download without dependecy */
        //const file = new Blob([resp.data], {type: 'application/pdf'});
        //const fileURL = URL.createObjectURL(file); //Build a URL from the file
        //window.open(fileURL); //Open the URL on new Window
    }catch(error){
       // console.log(error,error.response.data.error);
        const Err = yield showErrors(error);
        yield put(actions.downloadReportError(Err));
    }
}