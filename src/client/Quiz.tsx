import React, { useState, useEffect } from 'react';
import { cleanString } from '../util';

interface Questions {
  category: string, 
  question: string, 
  correct_answer: string,
  difficulty: string,
  incorrect_answers: Array<string>,
  type: string
}

function getQuestions(): Promise<Questions[]> {
  // For now, consider the data is stored on a static `users.json` file
  return fetch('http://localhost:4000/api/questions')
  // the JSON body is taken from the response
  .then(res => res.json())
  .then(res => {
    console.log('res: ', res)
    return res.results as Questions[]
  })
}

function Quiz() {
  const [data, setData] = useState(Array<Questions>());
  
  useEffect(() => {
    getQuestions().then(questions => setData(questions));
  }, []);

  console.log(data)

  return (
    <div className="App">
      {data && data.map((value, index) => {
        return (
          <div key={index}>
            question: {`${cleanString(value.question)}`}
            <p>category: {value.category}</p>
            <p>correct answer: {value.correct_answer}</p>
            <p>incorrect answers: {value.incorrect_answers}</p>
            <p>incorrect answers: {Array(value.incorrect_answers).length}</p>
            
            {/*Array(String(value.incorrect_answers).split(',')).map((answer, i) => {
              return (<p key={i}>{answer + '--'}</p>)
            })*/}
          </div>
        )
      })}
    </div>
  );
}

export default Quiz;