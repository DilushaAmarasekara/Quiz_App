import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Questionaire from './Components';

const API_URL='https://opentdb.com/api.php?amount=5&category=21&difficulty=easy&type=multiple';

function App() {

    const[questions, setQuestions]=useState([]);
    const[currentIndex,setCurrentIndex]=useState(0);
    const[score,setScore]=useState(0);
    const[showAnswers,setShowAnswers]=useState(false);

    useEffect(()=>{
        fetch(API_URL)
            .then((res)=>res.json())
            .then((data)=>{

                const questions = data.results.map((question)=>
                    ({
                        ...question,
                        answers:[
                            question.correct_answer,
                            ...question.incorrect_answers
                        ].sort(()=>Math.random())
                    }));
                setQuestions(questions);
            });
    },[]);

    const handleAnswer = (answer) =>{
      if(!showAnswers){
          if(answer === questions[currentIndex].correct_answer){
              setScore(score+1);
          }
      }

            setShowAnswers(true);
    };

    const handleNewQuestion = ()=>{
        setShowAnswers(false);
        setCurrentIndex(currentIndex+1);
    }


  return  questions.length >0 ? (
      <div className="container">
          {currentIndex >= questions.length ? (
              <h1 className={'text-3xl text-white font-bold'}>Great ! Your score was {score} .</h1>
          ):(
              <Questionaire data={questions[currentIndex]}
                            showAnswers={showAnswers}
                            handleAnswer={handleAnswer}
                            handleNewQuestion={handleNewQuestion}
              />
          )}

      </div>

      ) : (<h1 className={'text-2xl text-white font-bold'}>Loading... </h1>

  );
}

export default App;
