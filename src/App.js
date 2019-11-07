import React from 'react';
import logo from './logo.svg';
import './App.css';
import QuestionBoard from './components/QuestionBoard';
import Result from './components/Result';
import CharactersHouses from './components/CharactersHouses';

import 'bootstrap/dist/css/bootstrap.min.css';


const questions = [
  {
    prompt: 'Do you make friends easily?',
    yes: 'friendly',
    no: 'nonfriendly'
  },
  {
    prompt: 'Do you complete tasks successfully by yourself?',
    yes: 'independent',
    no: ''
  },
  {
    prompt: 'Do you manipulate others to get your own way?',
    yes: 'manipulative',
    no: ''
  },
  {
    prompt: 'Do you love to help others?',
    yes: 'friendly',
    no: 'nonfriendly'
  },
  {
    prompt: 'Are you daring and/or like to break the rules?',
    yes: 'reckless',
    no: ''
  },
  {
    prompt: 'Do you care about what others think of you?',
    yes: 'status',
    no: 'nonstatus'
  },
  {
    prompt: 'Are you very competitive?',
    yes: 'status',
    no: 'nonstatus'
  },
  {
    prompt: 'Do you think you are smarter than others?',
    yes: 'betterThanOthers',
    no: ''
  }
]

function App() {
  const [currentQuestion, setCurrentQuestion] = React.useState('');
  const [userTraits, setUserTraits] = React.useState([]);
  const [counter, setCounter] = React.useState(0);
  const [quizFinished, setQuizFinished] = React.useState(false);
  const [quizStarted, setQuizStarted] = React.useState(false);

  //when userTraits is updated, update the current question to the next question
  React.useEffect(() => {
    console.log(userTraits);
    if (counter < questions.length) {
      setCounter(counter + 1);
      setCurrentQuestion(questions[counter]);
    } else {
      setQuizFinished(true);
    }
  }, [userTraits])
  
  return (
    <div class="generalText text-center">
      <h1>Hogwarts House Sorting</h1>
      <div>
        {
          (quizStarted)
            ? <QuestionBoard {...{ currentQuestion, setUserTraits, userTraits, quizFinished }} />
            : <button onClick={() => setQuizStarted(true)} class="buttonStyling">Sort</button>
        }
      </div>

      <div>
        {
          (quizFinished)
          ? <Result userTraits={userTraits} setUserTraits={setUserTraits}/>
          : <p></p>
        }
      </div>

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    
      <CharactersHouses />
    
    </div>
  );
}

export default App;
