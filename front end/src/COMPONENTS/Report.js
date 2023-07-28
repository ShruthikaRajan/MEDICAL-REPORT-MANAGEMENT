import react from 'react';
import './Report.css';
import {Link} from 'react-router-dom';
function Report(){
    return(
       <div>
        <div className="nav-links">
          <Link to="/home">HOME</Link>
          </div>
        <div className="aboutcard">
            <br></br>
            <br></br>
            <br></br>
            <h2 className="abouth2">Report</h2>
          <p className="aboutp">The application offers reporting and analytics 
capabilities, allowing healthcare providers to generate reports on patient 
demographics, diagnoses, treatments, and outcomes. These reports help with 
quality improvement initiatives, research, and decision-making.
</p>
<br></br>

<p className="aboutp">PRESCRIPTION:</p>
<br></br>
<p className="aboutp">PATIENT REPORT:</p>
<br></br>
<p className="aboutp">GUIDELINES:</p>
<br></br>


        </div>
        
       </div>
    );
}
export default Report;