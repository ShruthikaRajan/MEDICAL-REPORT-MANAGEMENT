import React, { useState } from 'react';
import { connect } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { setPass, setName } from './Action';


import './login.css';


function Login(
  {
  pass,
  
  name,
  setName,
  setPass,
 
  }
) {
  const check = (e) => {
    e.preventDefault();
   
  };
  const navigate = useNavigate() 
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = (e) => {
    e.preventDefault();
    if (email.trim() === '' || password.trim() === '') {
      alert('Please enter valid login credentials.');
      return;
    }
    navigate('/Home');
  };

  


  return (
   
    <div>
    <title style={{color: 'brown'}}>Responsive Login and Signup Form</title>

    
    <link rel="stylesheet" href="login.css" />
    <div className="container">
      <input type="checkbox" id="flip" />
      <div className="cover">
        <div className="front">
          <img src="stock-photo-cropped-image-of-a-young-man-working-on-his-laptop-in-a-coffee-shop-rear-view-of-business-man-258726044.jpg" alt="" />
          <div className="form-link">
          </div>
        </div>
        <div className="back">
          <img className="back-img" src="stock-photo-portrait-of-a-successful-business-man-sitting-at-the-cafe-in-front-of-a-laptop-1783984655.jpg" alt="" />
          <div className="form-link">
            <span className="img-text-1">Complete miles of journey <br /> with Zaur</span>
            <span className="img-text-2">Let's get started</span>
          </div>
        </div>
      </div>
      <form action="#">
        <div className="form-content">
          <div className="login-form">
            <div className="title">Login</div>
            <div className="input-groups">
              <div className="input-box">

                <input type="name" className="input" placeholder="Enter your name" value={name}
            onChange={(e) => setName(e.target.value)} required />
              </div>
            </div>
            <div className="input-groups">
              <div className="input-box">

                <input type="password" className="input" placeholder="Enter your password" value={pass}
            onChange={(e) => setPass(e.target.value)}required />
              </div>
            </div>
            <div className="form-link pass">
              <a href="#">Forget your password?</a>
            </div>
            <div className="input-groups">
              <div className="button input-box">
              <Link to="/log">
                <button>Login now</button>
                </Link>
              </div>
            </div>
            <div className="form-link login-text">
              <span>Don't have an account? <label className="link login-link" htmlFor="flip">Signup now</label></span>
            </div>
          </div>
          <div className="sign-form">
            <div className="title">Signup</div>
            <div className="input-groups">
              
               
                <input type="text" className="input" placeholder="Enter your name" required />
             
            
                <input type="number" className="input" placeholder="Enter your email" required />
           
              <input type="number" className="input" placeholder="Enter your Age" required />
              <input type="text" className="input" placeholder="Enter your gender" required />
              <input type="text" className="input" placeholder="Insurance" required />

                <input type="password" className="input" placeholder="Enter your password" required />
              
              </div>
            <div className="form-link signup-text">
              <button>LOGIN</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  </div>
  );
}
const mapStateToProps = (state) => {
  return {
    pass: state.pass,
    name:state.name,
    // checkpass: state.login.checkpass,
  };
};

const mapDispatchToProps = {
  setPass,
  setName,
  // setCheckPass,
  
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);


