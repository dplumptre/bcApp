import React from 'react';
import logosrc from '../../assets/images/logo.png';

const Logo = props =>{
    return (
        <div className={props.styles}>
            <img  style={{MaxWidth:100,maxHeight:100}} src={logosrc} alt="logo" />
        </div>
    )
}

export default Logo;