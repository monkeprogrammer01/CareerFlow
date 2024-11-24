import React from 'react';
import '/Users/arsensejtkaliev/PycharmProjects/HeadHunter2.0/careerflowfrontend/src/features/Profile/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">MyProfile</div>
      <ul className="navbar-links">
      <img
        src="https://userpic.codeforces.org/3565984/title/a7b35c21cd84f926.jpg"
        alt="Profile"
        className="profile-image-navbar"
      />
        <li><a href="#contact">John doe</a></li>
      </ul>
    </nav>
  );
}
