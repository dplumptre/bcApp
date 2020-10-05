import React ,{Component} from 'react';
import Anwser from '../../components/answer/Answer';
import Aux from '../../Hoc/Aux/Aux';
import Logo from '../../partials/logo/Logo';
import Spinner from '../../partials/Spinner/Spinner';
import {connect} from 'react-redux';
import * as actions from '../../store/actions/index';


class Answers extends Component {


 componentDidMount(){
     console.log(this.props.answers,this.props.success);
     this.props.initAnswers(this.props.token);
 }


    render(){

                    let myAnswers = <Spinner/>  
                    if(!this.props.loading){
                        myAnswers =  <Anwser  answers={this.props.answers}/>;
                    }




        return (
                <Aux>
                    <Logo styles={['col-md-12',"mt-3",'mb-3','d-flex','justify-content-center'].join(' ')} />
                    <div className="col-md-12">
                        <div className="shadow p-3 mb-5 bg-white rounded card text-dark border-light  mb-3" >
                            <div className="card-body">

                                {myAnswers}
                            
                            </div>
                        </div>
                    </div>
                </Aux>
        )
    }

}


const mapStateToProps = state =>{
    return{
        loading: state.answerReducer.loading,
        error:state.answerReducer.error,
        success: state.answerReducer.success,
        answers: state.answerReducer.answers,
        token:state.authReducer.token,
        user:state.authReducer.user

    }
}

const mapDispatchToProps = dispatch =>{
  return{
    initAnswers : (token)=>dispatch(actions.answer(token)),
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(Answers);