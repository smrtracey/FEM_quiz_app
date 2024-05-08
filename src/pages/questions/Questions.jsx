import { useQuizContext } from '../../contexts/QuizContext';
import { useNavigate } from 'react-router-dom';
import Button from '@/components/button/Button';

import correctIcon from '@/assets/images/icon-correct.svg';
import incorrectIcon from '@/assets/images/icon-incorrect.svg';
import './questions.scss';



const LETTER_INDEX= ['A','B', 'C', 'D'];

const Questions = () => {
  const navigate = useNavigate();


  const {state, dispatch} = useQuizContext();

  const {
    selectedQuiz,
    currentQuestion,
    selectedAnswer,
    submittedAnswer,
    showErrorMessage,
    isAnswerCorrect,
    score
  } = state;


  const progressPercentage = (currentQuestion / selectedQuiz.questions.length) * 100;
  //state, dispatch

  // show question
  // show answers
  // highlight users selection
  // submit users choice
  // check if the answer is correct
  // if yes, add one to score
  // update the button to show 'Next Question'
  // Move to the next question and partial state reset.


  const handleNextQuestionClick = ()=>{
    dispatch({type:'GO_TO_NEXT_QUESTION', payload: currentQuestion +1})
  }

  const handleCardClick = (answer)=>{
    if(!submittedAnswer){
      dispatch({type:'SET_SELECTED_ANSWER', payload: answer});
      dispatch({type: 'SET_SHOW_ERROR_MESSAGE', payload: false});
    }
  }

  const handleSubmit = ()=>{
    if(currentQuestion === selectedQuiz.questions.length -1 && submittedAnswer){
      navigate('/results');
    }else{
      if(submittedAnswer){
        handleNextQuestionClick();
      }
      else{
        if(!selectedAnswer){
          dispatch({type: 'SET_SHOW_ERROR_MESSAGE', payload:true})
        }else{
          const correctAnswer = selectedQuiz.questions[currentQuestion].answer;

          if(selectedAnswer === correctAnswer){
            dispatch({type: 'SET_IS_ANSWER_CORRECT', payload: true});
            dispatch({type: 'SET_SCORE', payload: score+1});
          }else{
            dispatch({type: 'SET_IS_ANSWER_CORRECT', payload: false});
          }
          dispatch({type:'SET_SUBMITTED_ANSWER', payload: true});
        }

        
      }
    }


  }

  return (
    <div className="questions-page-wrapper">
      <div className="question-count">
        <span>Question {currentQuestion+1} of {selectedQuiz.questions.length}</span>
      </div>
      <div className="question-text">
        <p>{selectedQuiz.questions[currentQuestion].question}</p>
      </div>

      <div className="progress-bar">
        <div className="inner-progress-bar" style ={{width: `${progressPercentage}%`}}>

        </div>
      </div>

      <div className="answers-grid">

        {selectedQuiz.questions[currentQuestion].options.map((answer, index)=>{
          return (
            <div key = {answer} className={`
            answer-card
            ${selectedAnswer === answer && 'selected-answer-card'}
            
            ${selectedAnswer === answer && 
            submittedAnswer &&
            isAnswerCorrect &&
            'chose-correct-answer'}

            ${selectedAnswer === answer && 
            submittedAnswer &&
            !isAnswerCorrect &&
            'chose-incorrect-answer'}

            ${submittedAnswer &&
            !isAnswerCorrect &&
            answer === selectedQuiz.questions[currentQuestion].answer &&
            'missed-correct-answer'}
            `} 
            
            
            onClick = {()=>handleCardClick(answer)}>
              <div className="answer-letter-index">{LETTER_INDEX[index]}</div>

              <div className="answer-card-text">{answer}</div>
            </div>
          )
        })}
      </div>

      {currentQuestion == selectedQuiz.questions.length -1 ?(
        <Button
        buttonText = {!submittedAnswer ? 'Submit Answer' : 'See Results'}
        onClick = {()=>handleSubmit()}
        />
      ) :(
        <Button
        buttonText = {!submittedAnswer ? 'Submit Answer' : 'Next Question'}
        onClick = {()=>handleSubmit()}/>
      )}
      {showErrorMessage && (
        <div className="error-message-wrapper">
          <img src = {incorrectIcon} alt= 'error'/>
          Please select and answer.
        </div>
      )}


    </div>
  )
}

export default Questions