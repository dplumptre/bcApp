import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Logo from '../../partials/logo/Logo';
import Aux from '../../Hoc/Aux/Aux';
import formValidation from '../../Helpers/FormValidation/StandardForm'
import styles from '../../Helpers/FormValidation/Css.module.css';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';
import Spinner from '../../partials/Spinner/Spinner';
import ResponseError from '../../partials/errors/ResponseError';
import {Redirect}from 'react-router-dom';

class Login extends Component {

    state ={
        myForm:{
          email:    '',
          password:  '',
        },
        formErrors:{
          email:    '',
          password: '',
        },
      }


      changeHandler = (event) =>{
       
        const {name, value} = event.target;
        //console.log(name,value);
        const {myForm,formErrors} = this.state;
        const v = new formValidation();
        const {errorState,valueState} = v.validation(name,value,formErrors,myForm);
        //console.log(errorState,valueState);
    
        let  updateForm = {...this.state};
        updateForm.formErrors = errorState;
        updateForm.myForm = valueState;
        this.setState({myForm:updateForm.myForm,formErrors:updateForm.formErrors});
        //console.log(myForm);
      }



      submitFormHandler=(event)=>{
        event.preventDefault();
        const info ={
          email: this.state.myForm.email,
          password: this.state.myForm.password
        }
        //console.log(info);
        const v = new formValidation();
        const {myForm,formErrors} = this.state;
        if(v.isformValid(formErrors,myForm)){
          this.props.postAuth(info);
        }
         
    
      }

    render(){   

        const {myForm,formErrors} = this.state;
        const fieldAlert = new formValidation('alertError',styles.Errors);

        let loginForm = (
            <form>
            <div className="form-group">
                <label >Email address</label>
                <input type="email" value={myForm.email}
                onChange={ (event)=>this.changeHandler(event)} name="email" className="form-control" />
                 <div className={fieldAlert.alert(formErrors.email).css}>
                                {fieldAlert.alert(formErrors.email).value}
                                </div>
            </div>
           


            <div className="form-group">
                <label >Password</label>
                <input type="password" value={myForm.password} name="password"
                 onChange={ (event)=>this.changeHandler(event)} className="form-control" />
                  <div className={fieldAlert.alert(formErrors.password).css}>
                                {fieldAlert.alert(formErrors.password).value}
                                </div>
            </div>
           


            <div className="form-group">
            <Link className="text-muted text-decoration-none" to='/register'> New?  Register</Link> &nbsp;&nbsp;
               <Link className="text-muted text-decoration-none" to='/forget-password'>Forget Password</Link>
            </div>
                <button onClick={this.submitFormHandler} type="submit" className="btn btn-warning">Submit</button>
        </form>
        );

        if(this.props.loading){
            loginForm = (<Spinner></Spinner>);
          }     
        

         let  destination =null;

         if(this.props.user){
          // if(this.props.user.access === '1' ){
          //   destination = <Redirect to='/dashboard'/>
          // }else if(this.props.user.access === '2'){
          //  destination = <Redirect to='/answers'/>
          // }else{
          //  destination = <Redirect to='/answers'/>
          // }

          destination = <Redirect to='/dashboard'/>
         
         }





        return (  
            <Aux>

            <Logo styles={['col-md-12',"mt-3",'mb-3','d-flex','justify-content-center'].join(' ')} />



            <div className="col-md-6 offset-md-3">


<div className="shadow p-3 mb-5 bg-white rounded card text-dark border-light mb-3 " >
  <div className="card-body">
    <h5 className="card-title">Login</h5>
    <ResponseError error={this.props.error} />

          {destination}
          {loginForm}
  </div>
</div>






                </div>   
                </Aux>
        );

    }
}

const mapStateToProps = state =>{
  return{
   loading: state.authReducer.loading,
   error:state.authReducer.error,
   user :state.authReducer.user,
  }
 }

 const mapDispatchToProps= dispatch =>{
   return {
     postAuth: (info)=> dispatch(actions.postAuth(info))
   }
 }
 
export default connect(mapStateToProps,mapDispatchToProps)(Login);