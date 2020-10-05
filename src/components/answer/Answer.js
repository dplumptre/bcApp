import React from 'react';
import MaterialTable from 'material-table';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import StatusForm from '../../container/status-form/StatusForm';

const Answer =props=>{


    return (
        <div style={{ maxWidth: '100%' }}>
        <MaterialTable

        
          columns={[
            { title: 'Date', field: 'created_at',type: 'date' },
            { title: 'Name', field: 'fname',
            // searchable:true,
            // filtering:false,
            // render: rowData =>{
            //   const name =  rowData.fname;
              
            //   return name;
            // }, 

            
           },
  
           { title: 'Email', field: 'email',
          //  render: rowData =>{
          //    const email =  rowData.email
          //    return email;
          //  }, 
          },

            // { title: 'Class', field: 'dclass'},
            // { title: 'Status', field: 'birthCity'}
          ]}
         // data={[{ name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }]}
         data = {props.answers}

        detailPanel={rowData => {

          const answers = rowData.answers.map(answer => {



           return (
             <div>
             
             <h5 className="pl-3 text-danger mt-3">{answer.dclass}</h5>  
             <p style={{padding:15}} dangerouslySetInnerHTML={{__html: answer.answer}} ></p>
             
             <StatusForm  mystatus={answer.status} email={rowData.email} dclass={answer.dclass} answerId={answer.id} name={rowData.fname}/>
             
             <hr/>
            </div>
            )

          })
          return (
            <div>
              {answers}
            {/* <p style={{padding:15}} dangerouslySetInnerHTML={{__html: rowData.answer}} ></p> */}

            </div>
            
          )
          
        }}
        

          title="Answers"
          options={{
            actionsColumnIndex: -1,
          }}
          actions={[
            {
              icon: ChevronLeft,
              tooltip: 'Go Back',
              isFreeAction: true,
              onClick: () => {}
            },

         
          ]}
        />
      </div>
    );
}


export default Answer;