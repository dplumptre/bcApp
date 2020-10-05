import * as actionsType from '../actions/actionTypes';

const initialState = {
    loading:false,
    success:false,
    answers: null,
    error:null,
    update:false
}

const answerReducer = (state = initialState,action)=>{
    switch(action.type){
        case actionsType.ANSWER_LOADING:
        return{
            ...state,
            loading:true,
            success:false,
            update:false
        }
        case actionsType.ANSWER_ERROR:
        return{
            ...state,
            loading:false,
            success:false,
            error:action.error,
        }
        case actionsType.ANSWER_SUCCESS:
        return{
            ...state,
            loading:false,
            success:true,
            error:null,
            answers:action.info
        }
        case actionsType.ANSWER_UPDATE:
       // const newAnswer = [...state.answers];
      //  const Index = newAnswer.findIndex(i =>i.id === action.id);
      //  console.log('index is ',Index);
        return{
            ...state,
            answers:action.data,
            //    answers:{
            //        ...state.answers,
            //        [Index]: action.data  // both user and answers

            //         // [Index]: {
            //         //     ...state.answers[Index],
            //         //     answers: "happy"
            //         // }
            //    },
               loading:false,
               update:true
        }
        // case actionsType.ANSWER_UPDATE:
        // return{
        //     ...state,
        //        loading:false,
        //        answers: action.data
        // }
        default:
        return state;

    }


}

export default answerReducer;