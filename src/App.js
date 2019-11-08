import React from 'react';
import logo from './logo.svg';
import './App.css';
import QuestionBoard from './components/QuestionBoard';
import Result from './components/Result';
import CharactersHouses from './components/CharactersHouses';
import NavBar from './components/NavBar';
import Character from './components/Character';

import 'bootstrap/dist/css/bootstrap.min.css';
import { InputGroup, FormControl } from 'react-bootstrap/';
import Button from 'react-bootstrap/Button';

import {
  BrowserRouter as Router,
  Switch,
  Route
  // Link,
  // useHistory
} from "react-router-dom";

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
  const [usersHouse, setUsersHouse] = React.useState('noHouse');

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
      <h1 id="mainTitle">Hogwarts House Sorting</h1>

      <Router>
        <NavBar />
        <Switch>
          <Route path="/characters-houses">
            <CharactersHouses usersHouse={usersHouse} />
          </Route>
          <Route path="/character/:id">
            <Character />
          </Route>
          <Route path="/">
            <div>
              {
                (quizStarted)
                  ? <QuestionBoard {...{ currentQuestion, setUserTraits, userTraits, quizFinished }} />
                  : <div>
                      <InputGroup
                        className="mb-3"
                        placeholder="e.g Ron Weasley"
                        onChange={(event) => {
                          sessionStorage.setItem('username', event.target.value);
                        }}
                      >
                        <InputGroup.Prepend>
                        <InputGroup.Text id="inputGroup-sizing-default" >name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl
                        aria-label="Default"
                        aria-describedby="inputGroup-sizing-default"
                        />
                      </InputGroup>
                      <Button variant="outline-warning" onClick={() => setQuizStarted(true)}>Sort</Button>
                    </div>
              }
            </div>
            <div>
              {
                (quizFinished) && <Result {...{userTraits, setUserTraits, usersHouse, setUsersHouse }} />
              }
            </div>
          </Route>
        </Switch>
      </Router>
    
    </div>
  );
}

export default App;
