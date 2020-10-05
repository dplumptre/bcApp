import React,{ Component } from "react";
import Aux from '../../Hoc/Aux/Aux';
import formValidation from '../../Helpers/FormValidation/StandardForm';
import Spinner from '../../partials/Spinner/Spinner';
import Logo from '../../partials/logo/Logo';
import ResponseError from '../../partials/errors/ResponseError';
import * as actions from '../../store/actions/index';
import {connect}  from 'react-redux';
import styles from '../../Helpers/FormValidation/Css.module.css';

class Reset extends Component{

    state ={
        token:null,
        myForm:{
          password: '',
        },
        formErrors:{
          password: '',
        },
      }



      componentDidMount =()=>{

        console.log(this.props.match.params.token);
        const {token}  = this.props.match.params;
        this.setState({token});

      }




      changeHandler=(event)=>{
        const {name, value} = event.target;
        const {myForm,formErrors} = this.state;
        const v = new formValidation();
        const {errorState,valueState} = v.validation(name,value,formErrors,myForm);
        //console.log(errorState,valueState);
    
        let  updateForm = {...this.state};
        updateForm.formErrors = errorState;
        updateForm.myForm = valueState;
        this.setState({myForm:updateForm.myForm,formErrors:updateForm.formErrors});
      }


      submitFormHandler=(event)=>{
        event.preventDefault();
        const {myForm,formErrors,token} = this.state;
        const v = new formValidation('alertError',styles.Errors);
        if( v.isformValid(formErrors,myForm)){
            const info = {
                password:myForm.password,
                token:token
            }
            console.log(info);
            this.props.reset(info);
        }
    }  



    goToLogin =()=>{
        this.props.history.push('/');
      }



    render(){

        const {myForm,formErrors} = this.state;
        const fieldAlert = new formValidation('alertError',styles.Errors);

                let  mainForm =(
                  <Aux>
                  <h5 className="card-title">Reset Password</h5>
                <form>
                <div className="form-group">
                <label >Enter New Password</label>
                <input type="password" value={myForm.password} name="password" 
                 onChange={ (event)=>this.changeHandler(event)} className="form-control" />
                  <div className={fieldAlert.alert(formErrors.password).css}>
                                {fieldAlert.alert(formErrors.password).value}
                                </div>
                 </div>
                        <button  disabled={!fieldAlert.isformValid(formErrors,myForm)} onClick={this.submitFormHandler}  type="submit" className="btn btn-warning">Submit</button>
                </form>
                </Aux>
                );


                if(this.props.loading){
                    mainForm = (<Spinner></Spinner>);
                }  

             

 



                 
       
                if(this.props.success){
                    mainForm = (
                      <div className="alert alert-success" role="alert">
                      <h4 className="alert-heading">Password Reset Successful!</h4>
                      <p>  {this.props.success}
                      </p>
                      <hr />
                      <button onClick={this.goToLogin} className="btn btn-success mt-3 mb-3 ">go to Login Page</button>
                      </div>
                     )
                   }


        return (

            <Aux>

            <Logo styles={['col-md-12',"mt-3",'mb-3','d-flex','justify-content-center'].join(' ')} />


            <div className="col-md-6 offset-md-3">




<div className="shadow p-3 mb-5 bg-white rounded card text-dark border-light  mb-3" >
  <div className="card-body">
    
    
    <ResponseError error={this.props.error} />

    {mainForm}
  </div>
</div>

                </div>   
            </Aux>
        );

    }

}



const mapStateToProps = state =>{
    return{
      success: state.forgetPasswordReducer.resetSuccess,
      loading: state.forgetPasswordReducer.resetLoading,
      error: state.forgetPasswordReducer.resetError,
      redirect :state.forgetPasswordReducer.redirection,
    }
  }
  
  const mapDispatchToProps = dispatch=>{
    return{
      reset : (info)=> dispatch(actions.reset(info)),
    }
  
  }
  
  

export default connect(mapStateToProps,mapDispatchToProps)(Reset);