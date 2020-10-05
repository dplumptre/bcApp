import React,{ Component } from "react";
import Aux from '../../Hoc/Aux/Aux';
import Spinner from '../../partials/Spinner/Spinner';
import Logo from '../../partials/logo/Logo';
import * as actions from '../../store/actions/index';
import {connect}  from 'react-redux';
import Notification from '../../partials/notification/Notification';


class Activation extends Component{




      componentDidMount =()=>{

        console.log(this.props.match.params.token);
        const {token}  = this.props.match.params;
        this.props.activate(token);

      }


      render(){

                  let page = <Notification title="Failed" message="Token is not valid, Contact admin or send an email to info@believersclass.tfolc.org"
                  alert="alert-danger" buttonColor="btn-secondary" buttonText="Back to Registration" buttonLink="/register" />

                  if(this.props.loading){
                      console.log('loading...');
                      page = <Spinner/>
                  }

                  if(this.props.success){
                    page = <Notification title="Success" message="Your account has been validated click the button below to login page"
                    alert="alert-success" buttonColor="btn-success"  buttonText="Go to Login Page" buttonLink="/" />
                  }


        return (
                    <Aux>
                    <Logo styles={['col-md-12',"mt-3",'mb-3','d-flex','justify-content-center'].join(' ')} />
                    <div className="col-md-12">
                        {page}
                    </div>
                    </Aux>
        )

      }

    }
    
    const mapStateToProps = state =>{
        return{
         loading: state.activationReducer.loading,
         error:state.activationReducer.error,
         success :state.activationReducer.success,
        }
       }
      
       const mapDispatchToProps= dispatch =>{
         return {
           activate: (info)=> dispatch(actions.activation(info))
         }
       }
       
    export default connect(mapStateToProps,mapDispatchToProps)(Activation);
