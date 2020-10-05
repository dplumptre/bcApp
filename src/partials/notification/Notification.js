import React from 'react';
import {Link} from 'react-router-dom';

const Notification = props =>{

    return(
        
        <div className="col-12">
            <div className={['alert',props.alert].join(' ')} role="alert">
            <h4 className="alert-heading">{props.title}</h4>
            <p>  {props.message}
            </p>
            <hr />
            <Link to={props.buttonLink} className={['btn','mt-3','mb-3',props.buttonColor].join(' ')}>{props.buttonText}</Link>
            </div>
        </div>
)


}

export default Notification;