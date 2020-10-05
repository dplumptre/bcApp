import React, { Component } from "react";
import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';

class Logout extends Component{


    componentDidMount(){
        this.props.autoLogout();
    }

    render(){   
             

        return (
            <Redirect to='/' />
        ) 
    }
}

const mapDispatchToProps= dispatch=>{
    return {
        autoLogout : ()=> dispatch(actions.autoLogout())
    }
}



export default connect(null,mapDispatchToProps)(Logout);