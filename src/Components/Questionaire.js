import React from "react";

const Questionaire =({showAnswers,handleNewQuestion, handleAnswer,data:{question,correct_answer,answers}
       })=> {

    return (
        <div className={'flex flex-col'}>

            <div className="bg-white text-purple-800 p-10 rounded-lg shadow-md">
                <h2 className="text-2xl" dangerouslySetInnerHTML={{__html: question}}/>
            </div>
            <div className={"grid grid-cols-2 gap-6 mt-6"}>

                {answers.map((answer,idx) => {
                    const bgcolor = showAnswers ? answer === correct_answer ? 'bg-yellow-200':'bg-blue-200' : 'bg-white';
                    return (
                        <button key={idx} className={`${bgcolor} text-purple-800 p-4  font-bold rounded shadow`}
                                onClick={() => handleAnswer(answer)} dangerouslySetInnerHTML={{__html: answer}}/>
                                );
                })}
               </div>

                <button onClick={handleNewQuestion} className={`ml-auto bg-purple-700 text-white p-4  font-semibold rounded shadow mt-5`}>
                    Next Question
                </button>

        </div>
    );
};

export default Questionaire;
