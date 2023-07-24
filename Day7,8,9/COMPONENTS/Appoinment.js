import react from 'react';
import './Appoinment.css';
import {Link} from 'react-router-dom';
function Appoinment(){
    return(
       <div>
        <div className="nav-links">
          <Link to="/home">HOME</Link>
          </div>
        <div className="aboutcard">
            <br></br>
            <br></br>
            <br></br>
            <h2 className="abouth2">APPOINMENT SCHEDULING</h2>
          <p className="aboutp">The application may include a feature for 
scheduling patient appointments. Healthcare providers can view and manage 
appointment calendars, schedule follow-ups, send appointment reminders to 
patients, and track appointment history.
</p>
<br></br>

<p className="aboutp">TRACK HISTROY:</p>
<br></br>
<p className="aboutp">SCHEDULING:</p>
<br></br>
<p className="aboutp">DOCTOR NAME:</p>
<br></br>
<p className="aboutp"> FEES:</p>
<br></br>
<p className="aboutp">PATIENT NAME:</p>
<br></br>

        </div>
        
       </div>
    );
}
export default Appoinment;