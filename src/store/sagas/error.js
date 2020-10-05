import  axios from 'axios';

export const showErrors = (error)=>{

    let  finalError ={
        loopError : null,
        toStringError: null
    }

    if(error.response.data.error){
        finalError.loopError = error.response.data.error;
        console.log(error.response.data.error+" response error");
    }else if (axios.isCancel(error)) {
        finalError.toStringError = error;
        console.log(error+" axios error");
    }else{
        finalError.toStringError = error;
        console.log(error+" general error");
    }
    return finalError;
}