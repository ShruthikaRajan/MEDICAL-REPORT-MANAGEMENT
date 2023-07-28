import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './EHR.css';
import { Link } from 'react-router-dom';

function EHR() {
  const [ehrData, setEhrData] = useState([]);

  useEffect(() => {
    const fetchTaskData = async () => {
      const token = localStorage.getItem('token');
      console.log(token); 
        try {
          const response = await axios.get('http://localhost:8181/api/v1/auth/demo/getehr'
          ,{
            headers: {
              "cache-control": 'no-cache',
              "Authorization": `Bearer ${token}`
            },
          }); 

          // console.log(response.data);
          setEhrData(response.data);
          console.log("response.data",response)
        } catch (error) {
          console.log(error);
    }
  };
  fetchTaskData();
}, []);

  return (
    <div>
      <div className="nav-links">
        <Link to="/home">HOME</Link>
      </div>
      <div className="aboutcard">
        {/* Display EHR data */}
        <h2 className="abouth2">EHR</h2>
        <p className="aboutehr">The application stores and manages patient electronic health records...</p>

        <br></br>
        <p className="aboutehr">HISTORY:</p>
        <ul>
          {/* Display history data */}
          {ehrData.map((ehrItem, index) => (
            <li key={index}>{ehrItem.history}</li>
          ))}
        </ul>

        <br></br>
        <p className="aboutehr">RESULTS:</p>
        <ul>
          {/* Display results data */}
          {ehrData.map((ehrItem, index) => (
            <li key={index}>{ehrItem.report}</li>
          ))}
        </ul>

        <br></br>
        <p className="aboutehr">PLANS:</p>
        <ul>
          {/* Display plans data */}
          {ehrData.map((ehrItem, index) => (
            <li key={index}>{ehrItem.plans}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EHR;