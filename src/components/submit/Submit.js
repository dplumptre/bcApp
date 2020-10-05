import React from 'react';
import {Link} from 'react-router-dom';

const Submit = props =>{

    return(
        
        <div className="col-12">
            <div className="alert alert-success" role="alert">
            <h4 className="alert-heading">Well done!</h4>
            <p>  Your answers has been sent kindly check your emails for instructions 
            </p>
            <hr />
            <Link to='/dashboard' className="btn btn-success mt-3 mb-3 ">Back to dashboard</Link>
            </div>
        </div>
)


}

export default Submit;