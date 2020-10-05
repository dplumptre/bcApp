import React from 'react';
import Colors from '../../Helpers/Constants/Colors';
import Spinner from '../../partials/Spinner/Spinner';

const Lecture = props =>{


 


  let  lec = <div className="alert alert-warning">select a class!</div>


  if(props.lectureLoading){
    lec = <Spinner/>
  }else if(props.lectureErrors){
    lec = props.lectureErrors.toString();
  }else if ( props.lectures.length) {
    lec = 
    
    <div className="card" >
        <div className="card-body">
            
               <h5 className="card-title text-uppercase text-danger">{props.classInfo.class}</h5>
                    <h5 className="card-title text-uppercase">{props.classInfo.class_title}</h5>    
    
                           { props.lectures.map(lecture=>(
                              <div key={lecture.id}>
                                  <h6 className="card-subtitle mb-2 " style={{color:Colors.secondary}}>{lecture.topic}</h6>
                                  <p className="card-text"   dangerouslySetInnerHTML={{__html: lecture.lecture}}></p>
                              </div>
                            ))} 
                              
                              {/* Removed a button on the Lectures.js from class 6c because there is no question */}
                              {props.classInfo.class === "class 7c"? null : <button  onClick={props.goToQuestion.bind(this,props.classInfo)} className="btn btn-warning">Go to Questions for {props.classInfo.class} >> </button>}
                             


    </div>
        </div>
  }





    return(
            <div className="col-8">
                                    {lec} 

            </div>
    )
}

export default Lecture;