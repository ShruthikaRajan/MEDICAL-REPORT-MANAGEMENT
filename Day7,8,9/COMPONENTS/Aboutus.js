import react from 'react';
import './About.css';
import {Link} from 'react-router-dom';
function Aboutus(){
    return(
       <div>
        <div className="nav-links">
          
          </div>
        <div className="aboutcard">
            <br></br>
            <br></br>
            <br></br>
            <h2 className="abouth2">About</h2>
          <p className="aboutp">The application stores and manages patient 
electronic health records, which include a comprehensive collection of patient 
medical information, such as medical history, diagnoses, medications, allergies, 
test results, treatment plans, and progress notes. 
</p>
<br></br>

<p className="aboutp">HISTORY:</p>
<br></br>
<p className="aboutp">RESULTS:</p>
<br></br>
<p className="aboutp">PLANS:</p>
<br></br>



        </div>
        
       </div>
    );
}
export default Aboutus;