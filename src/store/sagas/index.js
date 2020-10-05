import {takeEvery} from 'redux-saga/effects';
import * as actionTypes from '../actions/actionTypes';
import {initClassesSaga,lectureInitSaga} from '../sagas/classes';
import {questionsInitSaga,postQuestionsInitSaga} from '../sagas/questionsAndAnsSaga';
import {registerSaga} from './registerSaga';
import {forgetPasswordSaga,resetSaga} from './forgetPasswordSaga';
import {autoLogoutSaga,checkExpirySaga,postAuthSaga,checkAuthenticationStateSaga} from './authSaga';
import {activationSaga} from './activationSaga';
import {answerSaga,latestAnswerSaga} from './answerSaga';
import {statusSaga} from './statusSaga';
import {notificationSaga} from './notificationSaga';
import {percentageSaga} from './percentageSaga';

export function* mySagas(){
    yield takeEvery(actionTypes.INIT_CLASSES,initClassesSaga);
    yield takeEvery(actionTypes.LECTURE_INIT,lectureInitSaga);
    yield takeEvery(actionTypes.QUESTIONS_INIT,questionsInitSaga);
    yield takeEvery(actionTypes.POST_QUESTIONS_INIT,postQuestionsInitSaga);
    yield takeEvery(actionTypes.POST_REGISTER,registerSaga);
    yield takeEvery(actionTypes.FORGET_PASSWORD,forgetPasswordSaga);
    yield takeEvery(actionTypes.AUTH_INI_LOGOUT,autoLogoutSaga);
    yield takeEvery(actionTypes.CHECK_EXPIRY,checkExpirySaga);
    yield takeEvery(actionTypes.POST_AUTH,postAuthSaga);
    yield takeEvery(actionTypes.AUTH_CHECK_STATE,checkAuthenticationStateSaga);
    yield takeEvery(actionTypes.RESET,resetSaga);
    yield takeEvery(actionTypes.ACTIVATION,activationSaga);
    yield takeEvery(actionTypes.ANSWER,answerSaga);
    yield takeEvery(actionTypes.STATUS,statusSaga);
    yield takeEvery(actionTypes.NOTIFICATION,notificationSaga);
    yield takeEvery(actionTypes.PERCENTAGE,percentageSaga);
    yield takeEvery(actionTypes.LATEST_ANSWER,latestAnswerSaga);
    
}




