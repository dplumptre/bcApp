import * as actionTypes from './actionTypes';

export const reportLoading =()=>{
    return {
        type: actionTypes.REPORT_LOADING
    }
}

export const  reportSuccess =(data)=>{
    return {
        type: actionTypes.REPORT_SUCCESS,
        data:data
    }
}

export const  reportError =(error)=>{
    return {
        type: actionTypes.REPORT_ERROR,
        error: error
    }
}

export const report =(token)=>{
    return {
        type: actionTypes.REPORT,
        token:token
    }
}

// download report





export const downloadReportLoading =()=>{
    return {
        type: actionTypes.DOWNLOAD_REPORT_LOADING
    }
}

export const  downloadReportSuccess =(data)=>{
    return {
        type: actionTypes.DOWNLOAD_REPORT_SUCCESS,
        data:data
    }
}

export const  falsifyDownloadSuccess =()=>{
    return {
        type: actionTypes.FALSIFY_DOWNLOAD_SUCCESS,
    }
}


export const  downloadReportError =(error)=>{
    return {
        type: actionTypes.DOWNLOAD_REPORT_ERROR,
        error: error
    }
}

export const downloadReport =(token,info)=>{
    return {
        type: actionTypes.DOWNLOAD_REPORT,
        token:token,
        info:info
    }
}
