import React, { useContext } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Welcome from './Welcome/welcome.jsx';
import Home from './Home/Home.jsx';
import Login from './Login/Login.jsx';
import Register from './Register/Register.jsx';
import Booking from './Booking/booking.jsx';
import Hotel from './Hotels/hotel.jsx';
import List from './List/List.jsx';
import Myplan from './MyPlan/MyPlan/Myplan';
import { AuthContext } from './context/Authocon.js';

function App() {
  const { user } = useContext(AuthContext);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/booking" element={user ? <Booking /> : <Navigate to="/login" />} />
        <Route path="/hotels/:id" element={user ?<Hotel />: <Navigate to="/login" />} />
        <Route path="/hotels" element={user ? <List />: <Navigate to="/login" />} />
        <Route path="/myplan" element={user ? <Myplan /> : <Navigate to="/login" />} />
        <Route path="/home" element={user ? <Home /> : <Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
