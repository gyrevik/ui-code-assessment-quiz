import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Quiz() {
  const [data, setData] = useState([{category:'', question: ''}]);
  
  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:4000/api/questions`);
      setData(response.data.results);
      console.log(response.data.results)
    }
    
    fetchData();
  }, []);

  const MIDDLE_DOT    = '\u0057';
  const DOUBLE_QUOTE  = '\u0022';

  return (
    <div className="App">
      {data.map((value, index) => {
        return (
          <div key={index}>
            question: {`"${value.question.replace(/&quot;/gi, DOUBLE_QUOTE)}"`}
            <p>category: {value.category}</p>
          </div>
        )
      })}
    </div>
  );
}

export default Quiz;