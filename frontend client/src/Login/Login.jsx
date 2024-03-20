import React, { useState, useContext } from 'react';
import './Login.css';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from "../context/Authocon";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
  const {loading, dispatch, error } = useContext(AuthContext);
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e) => {
    setCredentials((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    dispatch({ type: 'LOGIN_START' });
    try {
      const res = await axios.post('http://localhost:8800/api/auth/login', credentials);
      dispatch({ type: 'LOGIN_SUCCESS', payload: res.data });
      navigate('/home');
    } catch (err) {
      dispatch({ type: 'LOGIN_FAILURE', payload: err.response.data });
      toast.error(err.response.data.message || 'An error occurred');
    }
  };
  

  return (
    <div>
      <ToastContainer />
      <div className="header1">
        <div className="text1">
          <h1>LOG IN</h1>
          <form>
            <div className="text-box1">
              <label htmlFor="username">Username</label>
              <input type="text" id="username" onChange={handleChange} placeholder="Username" className="box" />
            </div>
            <div className="text-box2">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" onChange={handleChange} placeholder="Password" className="box" />
            </div>
            <button type="submit" disabled={loading} className="button1" onClick={handleClick}>LOG IN</button>
          </form>
          {/* {error && <span>{error.message}</span>} */}
          <p className="link">
            Don't have an account? <Link to='/Register' className="a">Register here</Link>
          </p>
        </div>
        <img src="/src/assets/Login Img.png" alt="Login" className="image1" />
      </div>
    </div>
  );
}

export default Login;
