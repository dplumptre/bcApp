import React, { Component } from 'react';
import * as actions from '../../store/actions/index';
import {connect}  from 'react-redux';
import Spinner from '../../partials/Spinner/Spinner';
import Report from '../../components/reports/Report';
import Aux from '../../Hoc/Aux/Aux';
import Logo from '../../partials/logo/Logo';
import ReportForm from './ReportForm';
import { saveAs } from 'file-saver';


class Reports extends Component {

    state ={
        reportForm: false,
        myForm:{
          dateOne:    "", //new Date(),
          dateTwo:    "", //new Date(),
        },
    }


    componentDidMount(){
        this.props.getReports(this.props.token); 
    }
   


    downloadReport =()=>{
        
        this.setState( (prevState)=> {
            return {reportForm: !prevState.reportForm}
        })
    }





    changeDateOne = date => {
        let  updateForm = {...this.state.myForm};
         updateForm.dateOne = date ;
         this.setState({myForm:updateForm});
      }

      changeDateTwo = date => {
        let  updateForm = {...this.state.myForm};
         updateForm.dateTwo = date ;
         this.setState({myForm:updateForm});
      }

      getMyDate = (currentDate) =>{
        if(currentDate == ""){
            return "";
        }  
        const date = currentDate.getDate();
        const month = currentDate.getMonth(); //Be careful! January is 0 not 1
        const year = currentDate.getFullYear();
      return  year + "-" +('0' + (month + 1)).slice(-2) + "-" +('0' + date).slice(-2);
      }
      



      submitFormHandler =(event) =>{
          event.preventDefault();
          const {myForm} = this.state;
          const info = {
            from:this.getMyDate(myForm.dateOne),
            to: this.getMyDate(myForm.dateTwo),
         }
         console.log(info);
        this.props.downlaodReports(this.props.token,info);
      }












    render(){

         
        let  reportcmp = <Report  downloadReport={this.downloadReport} data={this.props.reports} />;

        if(this.props.loading){
            reportcmp = <Spinner />;
        }

        let reportForm = null
        if(this.state.reportForm){

            reportForm = (
                <Aux>
                           <hr/>
                           <ReportForm  
                           {...this.state}
                            changeDateOne={this.changeDateOne}
                            changeDateTwo={this.changeDateTwo}
                            submit={this.submitFormHandler}
                           />
                </Aux> 
            );

            if(this.props.downloadLoading){
                reportForm = <Spinner/>
            }

            if(this.props.downloadSuccess){
                const blob = new Blob([this.props.downloadedReport], {type: "application/pdf;charset=utf-8"});
                saveAs(blob,'report.pdf');
                console.log('here');

                setTimeout(()=> this.props.falsifyDownloadSuccess(), 3000);
           }


        }






        return  (

<Aux>
<Logo styles={['col-md-12',"mt-3",'mb-3','d-flex','justify-content-center'].join(' ')} />
<div className="col-md-12">
    <div className="shadow p-3 mb-5 bg-white rounded card text-dark border-light  mb-3" >
        <div className="card-body">

       {reportcmp}

        {reportForm}
        
        </div>
    </div>
</div>
</Aux>




        )
        
    }

}




const mapStateToProps = state =>{
    return{
      reports: state.reportReducer.reports,
      success: state.reportReducer.success,
      loading: state.reportReducer.loading,
      error:   state.reportReducer.error,
      downloadSuccess: state.reportReducer.downloadSuccess,
      downloadLoading: state.reportReducer.downloadLoading,
      downloadError:   state.reportReducer.downloadError,
      downloadedReport:state.reportReducer.downloadedReport,
      
      token:   state.authReducer.token,
      user:state.authReducer.user
    }
  }
  
  const mapDispatchToProps = dispatch=>{
    return{
      getReports : (token)=> dispatch(actions.report(token)),
      downlaodReports : (token,info) => dispatch(actions.downloadReport(token,info)),
      falsifyDownloadSuccess: ()=> dispatch(actions.falsifyDownloadSuccess()),
    }
  
  }
  
export default connect(mapStateToProps,mapDispatchToProps)(Reports);