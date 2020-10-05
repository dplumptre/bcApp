import React from 'react';
import MaterialTable from 'material-table';
import ChevronLeft from '@material-ui/icons/ChevronLeft';


const Notification = props => {
    return (  
        <div style={{ maxWidth: '100%' }}>
        <MaterialTable
        columns={[
            { title: 'Date', field: 'created_at',type: 'date' },
            { title: 'Class', field: 'class_id', 
           render: rowData =>{
             const cz =  rowData.classes.class
             return cz;
           }, 
            },
            { title: 'Status', field: 'status' },
         ]}
        data = {props.data}
        title="Notifications"
        options={{
          actionsColumnIndex: -1,
        }}
       


        detailPanel={rowData => {
             return (
                <div>
                <h5 className="pl-3 text-danger mt-3">Message</h5>  
                <p className="px-5">{rowData.message}</p>
               </div>
             );
        }}

        />
      </div>
    );
}
 
export default Notification;