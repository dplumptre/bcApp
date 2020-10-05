import React from 'react';
import StatusForm from '../../container/status-form/StatusForm';
import Aux from '../../Hoc/Aux/Aux';
import Logo from '../../partials/logo/Logo';

const ViewAnswer =()=>{
    return (

        <Aux>
        <Logo styles={['col-md-12',"mt-3",'mb-3','d-flex','justify-content-center'].join(' ')} />
        <div className="col-md-12">
            <div className="shadow p-3 mb-5 bg-white rounded card text-dark border-light  mb-3" >
                <div className="card-body">

                <div>Single Answer</div>
                 <StatusForm/>
                
                </div>
            </div>
        </div>
    </Aux>




  
    );
}


export default ViewAnswer;