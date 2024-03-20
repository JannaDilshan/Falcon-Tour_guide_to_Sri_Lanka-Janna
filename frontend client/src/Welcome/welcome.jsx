import React from 'react';
import './welcome.css';
import { useNavigate } from 'react-router-dom';
0


function Welcome() {
  const navigate = useNavigate();

  return (
    <div>
      <div className="header">
        <div className="text">
          <h1 className="welcome">WELCOME to <br />Falcon</h1>
          <div className="p">
            <p>Let's start your amazing travel with Falcon</p>
          </div>
          <button className="button" onClick={() => navigate('/login')}>
            LET'S START
          </button>
        </div>
        <div className="image">
          <img src="/src/assets/welcom.jpeg" alt="" className="image" />
        </div>
      </div>
      
    </div >
  );
}

export default Welcome;
