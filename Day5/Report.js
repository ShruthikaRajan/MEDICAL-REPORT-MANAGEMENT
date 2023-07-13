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
          <p className="aboutp">: The application offers reporting and analytics 
capabilities, allowing healthcare providers to generate reports on patient 
demographics, diagnoses, treatments, and outcomes. These reports help with 
quality improvement initiatives, research, and decision-making.
</p>
<br></br>

<p className="aboutp">-- Compare pricing for top software side-by-side without endless internet searches.</p>
<br></br>
<p className="aboutp">-- Get detailed product insights tailored to your records, backed by data and strategy.</p>
<br></br>
<p className="aboutp">-- Check out our Category Leaders to find the best of the best doctors and consultants.</p>
<br></br>
<p className="aboutp">-- Read and watch over 1M+ verified reviews from our patients and doctors.</p>
<br></br>
<p className="aboutp">-- Explore resources with advice on finding and evaluating software in our extensive library of the patients.</p>
<br></br>
<p className="abouth2">MILESTONES</p>
<p>(2023)-- CREATED</p>
        </div>
        
       </div>
    );
}
export default Report;