import React, { useEffect, useState } from 'react';
import './Appoinment.css'
import { Link } from 'react-router-dom';
import axios from 'axios';

function Appoinment() {
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    const fetchTaskData = async () => {
      const token = localStorage.getItem('token');
      console.log(token); 
        try {
          const response = await axios.get('http://localhost:8181/api/v1/auth/demo/getApp'
          ,{
            headers: {
              "cache-control": 'no-cache',
              "Authorization": `Bearer ${token}`
            },
          }); 

          // console.log(response.data);
          setAppointments(response.data);
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
        {/* Render your appointment information here */}
        {appointments.map(appointment => (
          
          <div key={appointment.name}>
            <h2>APPOINMENT SHEDULING</h2>
            <p className="aboutp">The application stores and manages patient 
electronic health records, which include a comprehensive collection of patient 
medical information, such as medical history, diagnoses, medications, allergies, 
test results, treatment plans, and progress notes. </p>
            <p className="aboutp">Doctor Name:{appointment.doctorname}</p>
            <p className="aboutp">Date:  {appointment.date}</p>
            <p className="aboutp">Fees:{appointment.fees}</p>
            <p className="aboutp">History:{appointment.history}</p>
            <p className="aboutp">Time:{appointment.time}</p>
            {/* Render other appointment details as needed */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Appoinment;