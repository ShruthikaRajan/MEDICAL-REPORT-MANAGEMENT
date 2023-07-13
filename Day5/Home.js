import react from 'react';
import './home.css';
import {Link} from 'react-router-dom';
function Home(){
    return(
      <div>
        <nav className="navbar navbar-expand-lg navbar-red navbar-dark">
        <div className="wrapper">
          
        </div>
        <div className="container-fluid all-show">
      
        
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">About us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Support</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Services</a>
              </li>
             
              <li className="nav-item">
                <a className="nav-link" href="#">contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"></a>
                <Link to="/">LOGOUT</Link>
              </li>
              

              <li className="nav-item">
                <a className="nav-link" href="#"><i className="fa fa-search" /></a>
              </li>
              
            </ul>
          </div>
          <div>
        <link href="https://fonts.googleapis.com/css2?family=Oswald&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet" />
        <input type="checkbox" id="active" />
        <label htmlFor="active" className="menu-btn"><span /></label>
        <label htmlFor="active" className="close" />
        <div className="wrapper">
          <ul>
            <li><a href="#"><Link to="/report">REPORT</Link> </a></li>
            <li><a href="#">  </a></li>
            <li><a href="#"><Link to="/EHR">EHR</Link></a></li>
            <li><a href="#"> </a></li>
           
            <li><a href="#"><Link to="/Appoinment">Appoinment</Link></a></li>

            
          </ul>
        </div>
        
      </div>
  
        </div>
      </nav>
      <div>
        <h1 className="homeh1">WELCOME TO THIS SITE</h1>
        <p className='p'>
        Patient records and information maintenance is crucial for any healthcare organization. 
        Medical records help in interest of both the patient and the medical service provider.
         Providing the best health care services for the patient from the reception to diagnosis and treatment is the primary motive of any healthcare provider.
          However, documenting the entire information and events pertaining to each patient and maintaining the same for records and future reference is very critical. 
          Record maintenance is the sole evidence for the doctors to prove their treatments to the patient.
           It shows the diligence and quality of care delivered by the healthcare provider.
            It also plays a key role in the entire revenue cycle management process of the organization.
        </p>
        </div>
        </div>
    );
}
export default Home;