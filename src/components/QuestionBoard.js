import React from 'react';
import Button from 'react-bootstrap/Button';

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
            <Button
                onClick={handleResponse('yes')}
                class="buttonStyling"
                variant="outline-warning"
            >
                yes
            </Button>
            <Button
                onClick={handleResponse('no')}
                class="buttonStyling"
                variant="outline-warning"
            >
                no
            </Button>
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