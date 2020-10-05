import React from 'react';
import Spinners from '../../partials/Spinner/Spinner';

const Classes = props =>{

    let cz = props.classes.map(claz =>(
            <button key={claz.id} type="button" onClick={props.getLecture.bind(this,claz.id)} className="btn btn-light btn-block">{claz.class}</button>
        ));
       
    
    if(props.loading){
        cz = <Spinners/>;
    }

    return(
<div className="col-4">
{props.error? props.error.toString():null}
{cz}
</div>
    )
}

export default Classes;