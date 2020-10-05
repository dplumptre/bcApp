import React, { Component } from 'react';
import * as actions from '../../store/actions/index';
import {connect}  from 'react-redux';
import Spinner from '../../partials/Spinner/Spinner';
import Notification from '../../components/notification/Notification';
import Aux from '../../Hoc/Aux/Aux';
import Logo from '../../partials/logo/Logo';

class notification extends Component {


    componentDidMount(){
        this.props.getNotifications(this.props.token,this.props.user.userId); 
    }
   

    render(){

         
        let  notifnz = <Notification data={this.props.notifications} />;

        if(this.props.loading){
          notifnz = <Spinner />;
        }


        return  (

<Aux>
<Logo styles={['col-md-12',"mt-3",'mb-3','d-flex','justify-content-center'].join(' ')} />
<div className="col-md-12">
    <div className="shadow p-3 mb-5 bg-white rounded card text-dark border-light  mb-3" >
        <div className="card-body">

        {notifnz}
        
        </div>
    </div>
</div>
</Aux>




        )
        
    }

}


const mapStateToProps = state =>{
  return{
    notifications: state.notificationReducer.notifications,
    success: state.notificationReducer.success,
    loading: state.notificationReducer.loading,
    error:   state.notificationReducer.error,
    token:   state.authReducer.token,
    user:state.authReducer.user
  }
}

const mapDispatchToProps = dispatch=>{
  return{
    getNotifications : (token,id)=> dispatch(actions.notification(token,id)),
  }

}



export default connect(mapStateToProps,mapDispatchToProps)(notification);