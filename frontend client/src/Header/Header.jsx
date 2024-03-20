import React, { useContext } from "react";
import logo from "../assets/FALCON.png";
import "./header.css";
import { IoMdArrowDropdown } from "react-icons/io";
import { FaUserAlt } from "react-icons/fa";
import { IoIosNotifications } from "react-icons/io";
import { AuthContext } from "../context/Authocon";
import { useNavigate } from "react-router-dom"; // Assuming you are using react-router-dom for navigation

const Header = () => {
  const { user, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch({ type: "LOGOUT" });
    navigate('/login');
  };

  const onSearch = (value) => {
    // Implement your search logic here
    console.log("Searching for:", value);
  };

  return (
    <div className="topnav" id="myTopnav">
      <div className="logodiv">
        <img src={logo} className="logo" alt="Logo" />
      </div>
      <div className="logodiv">
        <h5 className="logo1">
          {user ? (
            <>
             <IoIosNotifications className="usericon1" />
              <FaUserAlt className="usericon" />
              Hi {user.username}
              <button className="logout" onClick={handleClick}>Logout</button>
             
            
            </>
          ) : (
            <FaUserAlt className="usericon" />
          )}
        </h5>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => onSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="downbar">
        <div className="dropdown">
          <button className="dropbtn">
            Home
            <IoMdArrowDropdown />
          </button>

          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">
            Map
            <IoMdArrowDropdown />
          </button>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">
            Commiunity
            <IoMdArrowDropdown />
          </button>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">
            My Plan
            <IoMdArrowDropdown />
          </button>
          <div className="dropdown-content">
            <a href="">Plan Your Trip</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>

        <div className="dropdown">
          <button className="dropbtn">
            About us
            <IoMdArrowDropdown />
          </button>
          <div className="dropdown-content">
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
