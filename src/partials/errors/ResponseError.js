

import React from 'react';
import Aux from '../../Hoc/Aux/Aux';

const ResponseError = props =>{





    let ErrorContainer = null;

    if(props.error){
          if(props.error.loopError){
          // i need to check if its a object object response so I will know how to send
            ErrorContainer =  Object.keys(props.error.loopError).map(k=>(
              <li className="text-danger" key={k}>{props.error.loopError[k]}</li>
            ));

            console.log('looperr');
          }else{
            // i need to check if its a object object response so I will know how to send
            ErrorContainer =  <li className="text-danger">{props.error.toStringError.toString()} </li>

            console.log('normalerr');
          }   
    }





    return(
        <Aux>
            {ErrorContainer}
        </Aux>
    )

}

export default ResponseError;