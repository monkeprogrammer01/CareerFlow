import React from 'react';
import { useNavigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './features/Login/login.js'
import Registration from './features/Registration/registration.js'

const JobSearch = () => {
  const navigate = useNavigate();
  const handleLoginClick = () => {
    navigate('/user/login'); // Redirects to the login page
  };
  const handleRegistrationClick = () => {
    navigate('/user/registration'); // Redirects to the login page
  };
  return <>

    <div style={{ fontFamily: 'Arial, sans-serif', padding: '20px', maxWidth: '1300px', margin: 'auto' }}>
      {/* Navbar */}
      <header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '50px',
          borderBottom: '1px solid #ddd',
          paddingBottom: '10px',
        }}
      >
        {/* Navbar Menu */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '20px', fontSize: '1rem', fontWeight: 'bold' }}>
          <h1 style={{ color: '#000', fontWeight: 'bold', marginRight: '20px' }}>CareerFlow</h1>
          <a href="/" style={{ color: '#f50057', textDecoration: 'none' }}>
            Home
          </a>
          <a href="/find-job" style={{ color: '#333', textDecoration: 'none' }}>
            Find a Job
          </a>
          <a href="/post-job" style={{ color: '#333', textDecoration: 'none' }}>
            Post a Job
          </a>
          <a href="/testimonials" style={{ color: '#333', textDecoration: 'none' }}>
            Testimonials
          </a>
        </nav>

        {/* Buttons and Image */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <button
            onClick={handleLoginClick}
            style={{
              padding: '10px 20px',
              background: '#fff',
              border: '1px solid #ccc',
              color: '#333',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Log in
          </button>
          <button
            onClick={handleRegistrationClick}
            style={{
              padding: '10px 20px',
              background: '#f50057',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Sign Up
          </button>
          <img
            src="https://images.pexels.com/photos/4050216/pexels-photo-4050216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Person using laptop"
            style={{ width: '50px', height: '50px', borderRadius: '50%', objectFit: 'cover' }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = 'https://via.placeholder.com/50'; // Fallback image
            }}
          />
        </div>
      </header>

      {/* Hero Section */}
      <main style={{ textAlign: 'left', marginBottom: '20px' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '10px' }}>
          Find your <span style={{ color: '#f50057' }}>dream job</span>
        </h2>
        <p style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px' }}>better and faster</p>
        <p style={{ color: '#555', marginBottom: '20px', fontSize: '1rem' }}>0 jobs posted <strong>today</strong></p>

        {/* Search Form */}
        <form
          style={{
            display: 'flex',
            gap: '10px',
            marginBottom: '20px',
            maxWidth: '800px',
          }}
        >
          <input
            type="text"
            placeholder="Job title, skills or company"
            style={{
              flex: '1',
              padding: '12px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '1rem',
            }}
          />
          <button
            style={{
              padding: '12px 20px',
              background: '#f50057',
              color: '#fff',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '4px',
              fontSize: '1rem',
            }}
          >
            Find Job
          </button>
        </form>
      </main>
    </div>
  </>;
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<JobSearch />} />
        <Route path="/user/login" element={<Login />} />
        <Route path="/user/registration" element={<Registration />} />
      </Routes>
    </Router>
  );
};

export default App;

