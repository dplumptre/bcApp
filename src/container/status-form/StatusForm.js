import React, { Component } from 'react';
import formValidation from '../../Helpers/FormValidation/StandardForm';
import Spinner from '../../partials/Spinner/Spinner';
import ResponseError from '../../partials/errors/ResponseError';
import * as actions from '../../store/actions/index';
import {connect}  from 'react-redux';


class StatusForm extends Component {


    state ={
        myForm:{
            comments:'empty',
            status:    '',
          },
          formErrors:{
            comments:'',
            status: '',
          },
          name:null,
          answerId:null,
          dclass:null,
          email:null
    }


    componentDidMount(){
        this.setState({name:this.props.name,answerId:this.props.answerId,dclass:this.props.dclass,email:this.props.email})

    }



    changeHandler = (event) =>{
       
        const {name, value} = event.target;
        //console.log(name,value);
        const {myForm,formErrors} = this.state;
        const v = new formValidation();
        const {errorState,valueState} = v.validation(name,value,formErrors,myForm);
       // console.log(errorState,valueState);
    
        let  updateForm = {...this.state};
        updateForm.formErrors = errorState;
        updateForm.myForm = valueState;
        this.setState({myForm:updateForm.myForm,formErrors:updateForm.formErrors});
         //console.log(myForm);
      }



      submitFormHandler=(event)=>{
        event.preventDefault();
        const info ={
          name: this.state.name,
          dclass: this.state.dclass,
          email: this.state.email,
          comments: this.state.myForm.comments,
          status: this.state.myForm.status,
          answerId: this.state.answerId
        }
         console.log(info);
        if(!this.state.myForm.status || this.state.myForm.status === ""){
          alert('select status!');
        }else{
          this.props.status(info, this.props.token);
        }

         
        // const v = new formValidation();
        // const {myForm,formErrors} = this.state;
        // if(v.isformValid(formErrors,myForm)){
        //   this.props.postAuth(info);
        // }
    
      }

    render(){


    





        // const {name,dclass,email,myForm} = this.state;

         

        let mainForm =( <form className="needs-validation" novalidate>
                            <div className="form-row">
                              <div className="col-md-2 mb-3">
                                <label >Class</label>
                                <h5>{this.state.dclass} </h5>
                                <div className="invalid-tooltip">
                                </div>
                              </div>
                              <div className="col-md-3 mb-3">
                                <label >Status</label>
                                <select className="custom-select" name="status" onChange={this.changeHandler}>
                                        <option selected>Choose...</option>
                                        <option value="passed">Pass</option>
                                        <option value="failed">Fail</option>
                                </select>
                                <div className="invalid-tooltip">
                                  Please select a valid state.
                                </div>
                              </div>
                              <div className="col-md-7 mb-3">
                                <label >Comments</label>
                                <input type="text" onChange={this.changeHandler} className="form-control" name="comments" placeholder="optional" />
                                <div className="invalid-tooltip">
                                  optional
                                </div>
                              </div>
                            </div>
                            <button onClick={this.submitFormHandler}  className="btn btn-primary" type="submit">Submit form</button>
                          </form>

        )

 
        if(this.props.loading){
          mainForm = (<Spinner></Spinner>);
         }  

        //  if(this.props.success){
        //    console.log(12);
        //    this.props.latestAnswer(this.props.token)
        //  } 



        let mystatus =  "";
        if(this.props.mystatus === "passed"){
          mystatus =  <div className="container"> <div className="alert alert-success">{this.props.mystatus}</div></div>
        }else if(this.props.mystatus === "failed"){
          mystatus =  <div className="container"><div className="alert alert-danger">{this.props.mystatus}</div></div>
        }


        return(
                <div className="shadow p-3 mb-5 bg-white rounded card text-dark border-light mb-3 " >
                <div className="card-body">

                 {mystatus }

                <ResponseError error={this.props.error} />

                        {mainForm}
                </div>
                </div>
        )
    }

}


const mapStateToProps = state =>{
  return{
    success: state.statusReducer.success,
    loading: state.statusReducer.loading,
    error:   state.statusReducer.error,
    update: state.answerReducer.update,
    token:   state.authReducer.token,
  }
}

const mapDispatchToProps = dispatch=>{
  return{
    status : (info,token)=> dispatch(actions.status(info,token)),
   // latestAnswer : (token)=> dispatch(actions.latestAnswer(token)),
  }

}



export default connect(mapStateToProps,mapDispatchToProps)(StatusForm);