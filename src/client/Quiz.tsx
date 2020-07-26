import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { cleanString } from '../util';

function Quiz() {
  const [data, setData] = useState([{category:'', 
    question: '', 
    correct_answer: '',
    difficulty: '',
    incorrect_answers: [],
    type: ''}]);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:4000/api/questions`);
      setData(response.data.results);
      console.log(response.data.results)
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
            <p>incorrect answers:</p>
            {Array(value.incorrect_answers).map((answer, i) => { return (<p key={i}>{answer}</p>)})}
            {/*value && value.incorrect_answers.map((answer, i) => {
              return (<p key={i}>{answer}</p>)
            })*/}
          </div>
        )
      })}
    </div>
  );
}

export default Quiz;