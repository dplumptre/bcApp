import React, { Component } from 'react';
import Aux from '../../Hoc/Aux/Aux';
import Classes from '../../components/classes/Classes';
import Lecture from '../../components/lectures/Lecture';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';


class ClassPage extends Component {

 

  componentDidMount(){
    this.props.nullifySuccess();

    console.log(this.props.token);
      this.props.initClasses(this.props.token);
  }


  ongetLectureHandler =id=>{
   //   console.log(id);
      this.props.lectureInit(id,this.props.token);
  }

  onGoToQstHandler = classinfo =>{

    //console.log(classinfo);
    this.props.history.push({
      pathname:'/questions',
      classinfo:classinfo,
  });

  }


    render() {

        return (
            <Aux>
            <Classes getLecture={this.ongetLectureHandler} {...this.props.allClassesState} />
            <Lecture goToQuestion={this.onGoToQstHandler} {...this.props.allClassesState} />
            </Aux>
        )
    }



}


const mapStateToProps = state =>{
    return{
      allClassesState:state.classesReducer,
      token:state.authReducer.token

    }
}

const mapDispatchToProps = dispatch =>{
  return{
    initClasses : (token)=>dispatch(actions.initClasses(token)),
    lectureInit : (id,token)=> dispatch(actions.lectureInit(id,token)),
    nullifySuccess: ()=> dispatch(actions.nullifySuccess()),
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(ClassPage);