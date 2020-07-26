import React, { useState, useEffect } from 'react';
import axios from 'axios';
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
    return res as Questions[]
  })
}

function Quiz() {
  const [data, setData] = useState([{
    category:'', 
    question: '', 
    correct_answer: '',
    difficulty: '',
    incorrect_answers: [],
    type: ''}]);

  
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:4000/api/questions`);
      console.log(response.data.results)
      //const pd = JSON.parse(response.data.results);
      //setData(response.data.results);
      setData(response.data.results);
    }
    
    fetchData();
  }, []);

  return (
    <div className="App">
      {data && data.map((value, index) => {
        return (
          <div key={index}>
            question: {`${cleanString(value.question)}`}
            <p>category: {value.category}</p>
            <p>correct answer: {value.correct_answer}</p>
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