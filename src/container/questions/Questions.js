import React, { PureComponent} from 'react';
import * as actions from '../../store/actions/index';
import {connect} from 'react-redux';
import Spinner from '../../partials/Spinner/Spinner';
import {Redirect}  from 'react-router-dom';

class Questions extends PureComponent {

  state={
    classInfo :{},
    myForm:null,
  formLoading:false,

}



changeHandler = (event) =>{
       
  const {name, value} = event.target;
  //console.log(name + ' '+ value);
  this.setState({
    ...this.state,
    myForm:{
      ...this.state.myForm,
      [name]:value,
    }});

  //console.log(this.state.myForm);


 
}


submitFormHandler=(event)=>{
  event.preventDefault();
  // create a default ans for all questions
  const info = this.state.myForm;
  const count =  this.props.questions.length;



  let newInfo = [];
  for(let i=1;i< count+1;i++){
      let q = 'question'+ (i);
      newInfo.push(q);
  } 
  console.log("new array",newInfo);
  console.log(this.state.myForm,count);



 if(this.state.myForm){
      const infoCount = Object.keys(this.state.myForm).length;
      // if user answers all
    if(count === infoCount && count > 3){
      console.log("same");
      // add class_name and userid
      info['class_name'] = this.state.classInfo.class;
      info['user_id'] = this.props.user.userId
      console.log(info);
      this.props.postForm(this.state.classInfo.id,info,this.props.token);
    }else{
        // user dont
    console.log("different");
    console.log("entered array",info);
    const arrayobj = Object.keys(info).map(arr =>{
      return arr
    });
    console.log(arrayobj);
    const arrDiff = newInfo.filter(ins => !arrayobj.includes(ins));
    console.log("array difference",arrDiff);

    for(let i=0; i< arrDiff.length  ; i++ ){
      info[arrDiff[i]] = ""
    }
        // add class_name and userid
    info['class_name'] = this.state.classInfo.class;
    info['user_id'] = this.props.user.userId
    console.log(info);
    this.props.postForm(this.state.classInfo.id,info,this.props.token);
    /*** */
    }

  

 }else{

  let arrayEmpty = {
    class_name: this.state.classInfo.class,
    user_id: this.props.user.userId,
  };
  for(let i=1;i< count+1;i++){
      let q = 'question'+ (i);
      arrayEmpty[q] = ""
  } 
  console.log(arrayEmpty);
       // if there is no input and user just press submit
       this.props.postForm(this.state.classInfo.id,arrayEmpty,this.props.token);
 }


  

  


}

componentDidMount=()=>{

  console.log(this.props.location.classinfo);
  const {classinfo} = this.props.location;
  this.setState({classInfo:classinfo});

  this.props.getQuestions(classinfo.id,this.props.token);



}



componentDidUpdate(prevProps, prevState) {
 // if the previous error is different from the new one remove 
 // the previous answers from the state
  if (this.props.postError !== prevProps.postError) {
    this.setState({myForm:null});
    console.log("he removed the form contents")
  }
}


// shouldComponentUpdate =(nextProps, nextState) =>{
//   /*** I had to do this to stop rerendering  */
//   if (this.state.myForm === null)
//     return true;

//   if (this.state.myForm === nextState.myForm ) 
//     return false;

   
    
//   return true;
// }



    render(){

                let content = <Spinner/>

                

                if(!this.props.loading){
                  content = this.props.questions.map((question,index) => (
                    <div key={question.id} className="form-group">
                    <label >({index+1}) {question.question} ?</label>
                    <textarea className="form-control" placeholder={'Enter answer '+ (index+1)} name={'question'+ (index+1)} onChange={(event)=>this.changeHandler(event)} rows="3"></textarea>
                  </div>

                  ))
                  
                }


                let questionForm = (
                  <form>
                  {content} 
                
                     <button   type="submit" onClick={this.submitFormHandler} className="btn btn-warning" > Submit </button>
                  </form>
                );

                if(this.props.postLoading){
                  questionForm = <Spinner />
                }

                let postErrorContainer = null;

                if(this.props.postError && this.props.postError.loopError){
                 // i need to check if its a object object response so I will know how to send
                  postErrorContainer =  Object.keys(this.props.postError.loopError).map(k=>(
                    <li className="text-danger" key={k}>{this.props.postError.loopError[k]}</li>
                  ));

                 // console.log(postErrorContainer)
                }

                if(this.props.postError && this.props.postError.toStringError){
                  // i need to check if its a object object response so I will know how to send
                   postErrorContainer =  <li className="text-danger">{this.props.postError.toStringError.toString()} </li>
 
                  // console.log(postErrorContainer)
                 }               

                let goTo = null;
                if(this.props.postSuccess !== null){
                   goTo= <Redirect to='/submit-page' />
                }
                

        return (
          
         
        <div className="col-md-12">
            <h2 className="text-danger">Questions for {this.state.classInfo.class}</h2>
                  {goTo}
                  {this.props.error? this.props.error.toString(): null}
                  {postErrorContainer}
                  {questionForm}

        </div>

        )
    }

  } //class end

const mapStateToProps = state =>{
  return{
    questions: state.qnaReducer.questions,
    loading: state.qnaReducer.loading,
    error: state.qnaReducer.error,
    postLoading: state.qnaReducer.postLoading,
    postSuccess: state.qnaReducer.postSuccess,
    postError: state.qnaReducer.postError,
    user: state.authReducer.user,
    token:state.authReducer.token

  }

}

const mapDispatchToProps = dispatch=>{
  return{
    getQuestions : (id,token)=> dispatch(actions.questionsInit(id,token)),
    postForm: (id,info,token)=> dispatch(actions.postQuestionsInit(id,info,token)),
  }

}





export default connect(mapStateToProps,mapDispatchToProps )(Questions);