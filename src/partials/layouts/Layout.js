import React from 'react';
import Nav from '../nav/Nav';
import Aux from '../../Hoc/Aux/Aux';

const Layout = props =>{

    return ( 
       <Aux>
          <Nav userInfo={props.userInfo} isAuth={props.isAuth}/>
          <div className="mt-3 mb-3">{props.children}</div>
        </Aux>
    )

}

export default Layout;