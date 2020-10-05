import React from 'react';

const Errors = props =>{

    return(
        <div className="alert alert-danger">{props.children}</div>
    )

}

export default Errors;