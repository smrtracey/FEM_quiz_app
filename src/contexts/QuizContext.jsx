import {createContext, useReducer, useContext, useEffect} from 'react';
import {useNavigate} from 'react-router-dom'


const initialState = {
    selectedQuiz: null,
    currentQuestion: 0,
    selectedAnswer: null,
    submittedAnswer: false,
    showErrorMessage: false,
    score: 0,
    isAnswerCorrect: null
}


const quizReducer = (state, action)=>{
    switch(action.type){
        case 'SET_SELECTED_QUIZ':
            return {
                ...state,
                selectedQuiz: action.payload,
            };

        case 'SET_CURRENT_QUESTION':
            return {
                ...state,
                currentQuestion: action.payload,
            }
        
        case 'SET_SELECTED_ANSWER':
            return {
                ...state,
                selectedAnswer: action.payload
            }

        case 'SET_SUBMITTED_ANSWER':
            return {
                ...state,
                submittedAnswer: action.payload
            }

        case 'SET_SCORE':
            return {
                ...state,
                score: action.payload
            }

        case 'SET_SHOW_ERROR_MESSAGE':
            return {
                ...state,
                showErrorMessage:action.payload
            }

        case 'SET_IS_ANSWER_CORRECT':
            return {
                ...state,
                isAnswerCorrect: action.payload
            }

        case 'GO_TO_NEXT_QUESTION':
            return {
                ...state,
                currentQuestion: action.payload,
                selectedAnswer:null,
                submittedAnswer:false,
                isAnswerCorrect: null
            }

        default: return state
    }
}

const QuizContext = createContext();

export const QuizProvider = ({children})=>{
    const navigate = useNavigate();

    const [state, dispatch] = useReducer(quizReducer, initialState);

    useEffect(()=>{
        if(state.selectedQuiz){
            navigate('/questions');
        }
    },state.selectedQuiz)


    return (<QuizContext.Provider value = {{state, dispatch}}>{children}</QuizContext.Provider>)
}


export const useQuizContext = ()=>{
    const context = useContext(QuizContext);

    if(!context){
        throw new Error("Quiz Context must be used inside a provider");
    }

    return context
}

