import React from 'react';

function QuestionBoard({ currentQuestion, setUserTraits, userTraits, quizFinished }) {

    const handleResponse = (yesOrNo) => {
        return () => {
            console.log(currentQuestion[yesOrNo])
            const updatedTraitHistory = [...userTraits, currentQuestion[yesOrNo]]
            setUserTraits(updatedTraitHistory);
        }
    }

    if (!quizFinished) {
       return (
        <>
            <h3>Q. {currentQuestion.prompt}</h3>
            <button
                onClick={handleResponse('yes')}
            >
                yes
            </button>
            <button
                onClick={handleResponse('no')}
            >
                no
            </button>
        </>
       ); 
    } else {
        return (
            <>
            </>
        )
    }
    
  }

export default QuestionBoard;