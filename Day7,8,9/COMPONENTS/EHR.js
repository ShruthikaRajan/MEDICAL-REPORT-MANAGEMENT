import React, { useState, useEffect } from 'react';
import './EHR.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

function EHR() {
  const [ehrData, setEhrData] = useState([]);

  useEffect(() => {
    
    axios.get('/get')
      .then(response => {
        setEhrData(response.data);
      })
      .catch(error => {
        console.error('Error fetching EHR data:', error);
      });
  }, []);

  return (
    <div>
      <div className="nav-links">
        <Link to="/home">HOME</Link>
      </div>
      <div className="aboutcard">
        {/* Your existing JSX for the EHR component */}
        {/* ... */}
        <p className="aboutp">HISTORY:</p>
        <ul>
          {ehrData.map(ehr => (
            <li key={ehr.history}>{ehr.history}</li>
          ))}
        </ul>
        <p className="aboutp">RESULTS:</p>
        <ul>
          {ehrData.map(ehr => (
            <li key={ehr.history}>{ehr.report}</li>
          ))}
        </ul>
        <p className="aboutp">PLANS:</p>
        <ul>
          {ehrData.map(ehr => (
            <li key={ehr.history}>{ehr.plans}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default EHR;