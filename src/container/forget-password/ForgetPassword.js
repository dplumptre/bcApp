import React, { Component } from 'react';
import Logo from '../../partials/logo/Logo';
import Aux from '../../Hoc/Aux/Aux';
import formValidation from '../../Helpers/FormValidation/StandardForm'
import styles from '../../Helpers/FormValidation/Css.module.css';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';
import Spinner from '../../partials/Spinner/Spinner';
import ResponseError from '../../partials/errors/ResponseError';

class ForgetPassword extends Component {

    state ={
        myForm:{
          email:    '',
        },
        formErrors:{
          email:    '',
        },
      }


      componentDidMount =()=>{



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
        }
        console.log(info);
        const v = new formValidation();
        const {myForm,formErrors} = this.state;
        if(v.isformValid(formErrors,myForm)){
          console.log('yess');
          this.props.forgetPassword(info);
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
                  <h5 className="card-title">Forget Password</h5>
                <form>
                    <div className="form-group">
                        <label >Email address</label>
                        <input type="email" name="email" className="form-control" value={myForm.email}
                onChange={ (event)=>this.changeHandler(event)} />
                  <div className={fieldAlert.alert(formErrors.email).css}>
                                {fieldAlert.alert(formErrors.email).value}
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
                    <h4 className="alert-heading">Request Sent!</h4>
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
    success: state.forgetPasswordReducer.success,
    loading: state.forgetPasswordReducer.loading,
    error: state.forgetPasswordReducer.error,

  }

}

const mapDispatchToProps = dispatch=>{
  return{
    forgetPassword : (info)=> dispatch(actions.forgetPassword(info)),
  }

}



export default connect(mapStateToProps,mapDispatchToProps)(ForgetPassword);