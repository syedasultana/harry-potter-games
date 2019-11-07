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
            <h3 class="question">Q. {currentQuestion.prompt}</h3>
            <button
                onClick={handleResponse('yes')}
                class="buttonStyling"
            >
                yes
            </button>
            <button
                onClick={handleResponse('no')}
                class="buttonStyling"
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