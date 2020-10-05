import React from 'react';
import {NavLink} from 'react-router-dom';
import Aux from '../../Hoc/Aux/Aux';


const Nav = props =>{

let mainNav = null;


if(props.isAuth){
  mainNav = (
    <Aux>
    <NavLink className="nav-item nav-link" to="/dashboard">Dashboard</NavLink>
      <NavLink className="nav-item nav-link" to="/answers">Answers</NavLink>
      <NavLink className="nav-item nav-link" to="/classes">Classes</NavLink>
      <NavLink className="nav-item nav-link" to="/notifications">Notifications</NavLink>
    </Aux> 
);
}









    return (
<nav className="navbar navbar-expand-lg navbar-dark bg-danger">
  <NavLink className="navbar-brand" to="/">Believer's Class</NavLink>

  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div className="navbar-nav">
      

       {mainNav}


    </div>

    <ul className="navbar-nav ml-auto">
    {props.userInfo ? <NavLink className="nav-item nav-link" to="/">Welcome! { props.userInfo.firstname}</NavLink> : null} 
           {props.isAuth ? <NavLink className="nav-item nav-link" to="/logout">Logout</NavLink>: null}
          {props.isAuth ? null :<NavLink className="nav-item nav-link" to="/register">Register</NavLink>}
          <a className="nav-item nav-link"  href="https://tfolc.org">TFOLC</a>
        </ul>


  </div>
</nav>


    )
}

export default Nav;