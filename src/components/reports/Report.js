import React from 'react';
import MaterialTable from 'material-table';
//import ChevronLeft from '@material-ui/icons/ChevronLeft';
import GetAppIcon from '@material-ui/icons/GetApp';

const Report = props => {
    return (  
        <div style={{ maxWidth: '100%' }}>
        <MaterialTable
        columns={[
            { title: 'Date', field: 'created_at',type: 'date' },
            { title: 'First Name', field: 'fname'},
            { title: 'Last Name', field: 'lname'},
            { title: 'Email', field: 'email' },
         ]}
        data = {props.data}
        title="Report"
        options={{
          actionsColumnIndex: -1,
        }}

        actions={[
          {
            icon: GetAppIcon,
            tooltip: 'Download',
            isFreeAction: true,
            onClick: () => { props.downloadReport()}
          },
        ]}
       


        detailPanel={rowData => {
             return (
                <div className="container">
                <h5 className="pl-3 text-danger mt-3">{rowData.fname}'s Details</h5>  
                <table className="table table-bordered table-warning table-responsive">
                  <tr>
                    <td>Registration Date:</td>
                    <td>{rowData.created_at}</td>
                  </tr>
                  <tr>
                    <td>Name:</td>
                    <td>{rowData.fname} {rowData.lname}</td>
                  </tr>
                  <tr>
                    <td>Marital Status:</td>
                    <td>{rowData.mstatus}</td>
                  </tr>
                  <tr>
                    <td>Gender:</td>
                    <td>{rowData.gender}</td>
                  </tr>
                  <tr>
                   <td>Completion Date:</td>
                   <td>{rowData.completed_date}</td>
                  </tr>
            
                </table>
               </div>
             );
        }}

        />
      </div>
    );
}
 
export default Report;