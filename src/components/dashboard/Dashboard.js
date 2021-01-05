import React,{useEffect} from  'react';
import Aux from '../../Hoc/Aux/Aux';
import {Link} from 'react-router-dom';
import {connect,useSelector} from 'react-redux';
import * as actions from '../../store/actions/index';

const Dashboard = props => {

const fRedirct = props.falsifyRedirect;


const getPercentage= useSelector(state => state.percentageReducer.percentage);
const loading= useSelector(state => state.percentageReducer.loading);
const userId= useSelector(state => state.authReducer.user.userId);
const token= useSelector(state => state.authReducer.token);

useEffect(()=>{
  fRedirct();
},[fRedirct]);


useEffect(()=>{
    props.getpercent(token,userId);
  },[token,props,userId]);




    return (
        <Aux>
<div className="col alert alert-warning ml-3 mr-3" role="alert">
<h4 className="alert-heading">Progress</h4>


<div className="progress ">
  <div className="progress-bar progress-bar-striped bg-warning" role="progressbar" style={{width: '25%'}}
   aria-valuenow={loading? "loading":getPercentage} aria-valuemin="0" aria-valuemax="100"> {loading? "loading":getPercentage} %</div>
</div>
</div>



        <div className="alert alert-warning ml-3 mr-3" role="alert">
            <h4 className="alert-heading">Welcome! </h4>
            <p>This is an interactive class that is similar to the 
                same classes that hold at the Church. It will involve 
                interaction with the regular Teachers of the Believers' Class.
            </p>
            <hr/>
            <div className="d-flex flex-row">
            <div className="p-2"><Link className="btn btn-success" to="/classes">Start Class</Link></div>
            <div className="p-2"><Link className="btn btn-danger" to='/notifications'>Notifications</Link></div>
           </div>
        
        </div>
    </Aux> 
    );
}


const mapDispatchToProps = dispatch=>{
    return{
        falsifyRedirect : ()=> dispatch(actions.authfalsifyRedirect()),
        getpercent : (token,userid)=> dispatch(actions.percentage(token,userid)),
        
    }
  }
  
  
  
  export default connect(null,mapDispatchToProps)(Dashboard);