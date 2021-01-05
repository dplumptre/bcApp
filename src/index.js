import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import {BrowserRouter as Router } from "react-router-dom";
import { createStore, applyMiddleware, combineReducers ,compose} from 'redux'
import createSagaMiddleware from 'redux-saga'
import {Provider} from 'react-redux'
import classesReducer from './store/reducers/classesReducer';
import qnaReducer from './store/reducers/qnaReducer';
import registerReducer from './store/reducers/registerReducer';
import activationReducer from './store/reducers/activationReducer';
import authReducer from './store/reducers/authReducer';
import forgetPasswordReducer from './store/reducers/forgetPasswordReducer';
import {mySagas} from './store/sagas/index';
import answerReducer from './store/reducers/answerReducer';
import statusReducer from './store/reducers/statusReducer';
import notificationReducer from './store/reducers/notificationReducer';
import percentageReducer from './store/reducers/percentageReducer';
import reportReducer from './store/reducers/reportReducer';
//import {} from './store/reducers/'


const sagaMiddleware = createSagaMiddleware();
const rootReducers = combineReducers({
  classesReducer,
  registerReducer,
  forgetPasswordReducer,
  qnaReducer,
  activationReducer,
  answerReducer,
  authReducer,
  statusReducer,
  notificationReducer,
  percentageReducer,
  reportReducer,


})

 const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
 const store = createStore(rootReducers, composeEnhancers( applyMiddleware(sagaMiddleware)));


sagaMiddleware.run(mySagas);








ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <Router>
         <App />
         </Router>
         </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
