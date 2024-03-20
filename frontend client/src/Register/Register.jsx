import React from 'react';
import './Register.css'
import { useNavigate } from 'react-router-dom'; 
function Register() {
 const navigate = useNavigate();
  return (
    <div>
      <div className="register">
        <div className="text">
            <h1>Register</h1>
        </div>
        <form action="">
            <div className="form">
        <div className="name">
        <div className="reg">
            <label>First Name</label>
            <input type="text" id="firstName" name="firstName" placeholder="First Name" className="box3"/>
          </div>
          <div className="reg">
            <label >Last Name</label>
            <input type="text" id="lastName" name="lastName" placeholder="Last Name" className="box3"/>
            </div>
        </div>
        <div className="reg">
            <label>Email</label>
            <input type="email" id="email" name="email" placeholder="Email" className="box3"/>
        </div>
        <div className="reg">
            <label>Contact Number</label>
            <input type="text" id="contactNumber" name="contactNumber" placeholder="Contact Number" className="box3"/>
    </div>
    <div className="reg">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" placeholder="Password" className="box3" />
          </div>
        
          <div className="reg">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" className="box3" />
          </div>
          <button type="submit" className="button" onClick={() => navigate('/login')} >
            Register
          </button>
          </div>
         </form>
      </div>
      <img src="/src/assets/register.jpeg" alt="Register" className="image4" />
    </div>
  );
}

export default Register;
