import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Quiz() {
  const [data, setData] = useState([{category:''}]);
  
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
      
     {data.map(value => <p>{value.category}</p>)}
     
    </div>
  );
}

export default Quiz;