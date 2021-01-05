import React ,{Component}from 'react';
import './App.css';
import {
  Switch,
  Route,
  withRouter,
  Redirect
} from "react-router-dom";
import Layout from './partials/layouts/Layout';
import ClassPage from './container/classpage/ClassPage';
import QuestionPage from './container/questions/Questions';
import DashboardPage from './components/dashboard/Dashboard';
import SubmitPage from './components/submit/Submit';
import RegisterPage from './container/register/Register';
import LoginPage from './container/login/Login';
import LogoutPage from './container/login/Logout';
import AnswersPage from './container/answers/Answers';
import ResetPage from './container/reset/Reset';
import ForgetPasswordPage from './container/forget-password/ForgetPassword';
import ViewAnswer from './components/answer/ViewAnswer';
import ActivationPage from './container/activation/Activation';
import NotificationPage from './container/notification/notification';
import ReportPage from './container/report/Reports';

import * as actions from './store/actions/index';

import {connect} from 'react-redux';

class App extends Component {

  componentDidMount(){
    this.props.checkState();
  }
  
  
    render(){
  
      let Routes = (
          <Switch>
             <Route path="/" exact component={LoginPage} />
             <Route path="/register" exact component={RegisterPage} />
             <Route path="/reset/:token" exact component={ResetPage} />
             <Route path="/activate-account/:token" exact component={ActivationPage} />
             <Route path="/forget-password" exact component={ForgetPasswordPage} />
             <Redirect to='/' />
          </Switch>
      );

     if(this.props.isAuth){
          Routes = (
              <Switch>
                <Route path="/logout" component={LogoutPage} />
                <Route path="/classes" exact component={ClassPage} />
                <Route path="/notifications" exact component={NotificationPage} />
                <Route path="/submit-page" exact component={SubmitPage} />
                <Route path="/dashboard" exact component={DashboardPage} />
                <Route path="/questions" exact component={QuestionPage} />
                <Route path="/answers" exact component={AnswersPage} />
                <Route path="/reports" exact component={ReportPage} />
                <Route path="/view-answer" exact component={ViewAnswer} />  
                <Redirect to='/dashboard' /> 
              </Switch>
          );

     }
   



  return (
        <Layout userInfo={this.props.userInfo} isAuth={this.props.isAuth}>
              <div className="container">
                  <div className="row ">
               {Routes}
           </div>
         </div>
        </Layout>
     );
  }
}
const mapStateToProps = state =>{
  return {
    isAuth : state.authReducer.token !== null,
    userInfo : state.authReducer.user
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    checkState : ()=> dispatch(actions.checkAuthenticationState())
  }
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(App));