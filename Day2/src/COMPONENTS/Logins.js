import React,{Component} from "react";
import './login.css';
import { Link } from "react-router-dom";
  function Login() {
    return (
      <div>
        <title style={{color: 'brown'}}>Responsive Login and Signup Form</title>

        {/* <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" /> */}
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

                    <input type="email" className="input" placeholder="Enter your email" required />
                  </div>
                </div>
                <div className="input-groups">
                  <div className="input-box">

                    <input type="password" className="input" placeholder="Enter your password" required />
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
                 
                
                    <input type="number" className="input" placeholder="Enter your phone number" required />
               
                  <input type="number" className="input" placeholder="Enter your Age" required />
                  <input type="text" className="input" placeholder="Enter your gender" required />
                  <input type="text" className="input" placeholder="Insurance" required />

                    <input type="password" className="input" placeholder="Enter your password" required />
                  
                  </div>
                <div className="form-link signup-text">
                  <span>Already have an account? <label className="link login-link" htmlFor="flip">LOGIN</label></span>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
export default Login;