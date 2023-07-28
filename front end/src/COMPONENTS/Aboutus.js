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
            <h2 className="abouth2">About us</h2>
          <p className="aboutp">Our Vision:
Enable healthcare businesses to provide superior healthcare delivery and patient care with technology – globally.


</p>
<br></br>


<p className="aboutp">Our Mission:
Provide a scalable, secure platform to clinics and hospitals that provide great value at reasonable cost</p>
<br></br>
<p className="aboutp">value:
  Our value system defines us, and acts as an anchor when we are faced with challenges. We have a culture of customer focus, continuous improvement and customer service.</p>
<br></br>
{/* <p className="aboutp">PLANS:</p>
<br></br> */}



        </div>
        
       </div>
    );
}
export default Aboutus;