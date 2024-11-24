import React from 'react';
import '/Users/arsensejtkaliev/PycharmProjects/HeadHunter2.0/careerflowfrontend/src/features/MainPage/Navbar.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const handleChange = () => {
    navigate('/'); // Redirects to the login page
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
         <a onClick={handleChange} ><h1 >CareerFlow</h1></a> 
      </div>
      <div className="navbar-center">
        <input type="text" placeholder="Search for jobs..." className="search-bar" />
      </div>
        <div className="navbar-right">
            <img src="/assets/images/profile-pic.png" alt="Profile" className="profile-pic"/>
        </div>
    </nav>
);
};

export default Navbar;
