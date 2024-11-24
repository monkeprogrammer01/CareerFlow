import React, { useState } from 'react';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

function PostAJob() {
  // State to hold input values
  const [jobName, setJobName] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [salary, setSalary] = useState('');
  const [location, setLocation] = useState('');
  const [requirements, setRequirements] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const token = localStorage.getItem("access_token");
  const employerId = token ? jwtDecode(token).user_id : null;
  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Preparing job data
      const jobData = {
        title: jobName,
        description: jobDescription,
        requirements: requirements,
        salary: salary,
        location: location,
        employer: employerId 
      };

      // Sending the data to API
      const response = await axios.post(
        'http://localhost:8000/vacancies/', // Your API endpoint
        jobData, // Send the job data
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`, // Use template literals for token
          },
        }
      );

      setShowSuccess(true);  // Show success message
      setTimeout(() => {
        setShowSuccess(false); // Hide success message after a delay
        // Optionally, you can navigate to another page here
      }, 1500);  // Adjust delay as desired
      console.log(response.data);  // Log the server response
    } catch (error) {
      console.error('Error posting job:', error.response?.data || error.message);
    }

    // Reset the form after submission
    setJobName('');
    setJobDescription('');
    setSalary('');
    setLocation('');
    setRequirements('');
  };

  return (
    <div className="app" style={{ width: '500%' }}>
      <header style={headerStyle}>
        <div style={headerContentStyle}>
          <h1 style={siteNameStyle}>CareerFlow</h1>
          <div style={profileStyle}>
            <img
              src="https://images.pexels.com/photos/4050216/pexels-photo-4050216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Profile"
              style={profileImageStyle}
            />
            <span style={profileNameStyle}>John Doe</span>
          </div>
        </div>
      </header>

      <main style={mainStyle}>
        <h2 style={formTitleStyle}>Post a Job</h2>
        <form onSubmit={handleSubmit} style={formStyle}>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Job Name:</label>
            <input
              type="text"
              value={jobName}
              onChange={(e) => setJobName(e.target.value)}
              placeholder="Enter job name"
              style={inputStyle}
            />
          </div>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Job Description:</label>
            <textarea
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Enter job description"
              rows="4"
              style={inputStyle}
            />
          </div>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Salary (USD):</label>
            <input
              type="number"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              placeholder="Enter salary"
              style={inputStyle}
            />
          </div>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Location:</label>
            <input
              type="text"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              placeholder="Enter job location"
              style={inputStyle}
            />
          </div>
          <div style={inputGroupStyle}>
            <label style={labelStyle}>Requirements:</label>
            <textarea
              value={requirements}
              onChange={(e) => setRequirements(e.target.value)}
              placeholder="Enter job requirements"
              rows="4"
              style={inputStyle}
            />
          </div>
          <button type="submit" style={submitButtonStyle}>
            Submit Job Post
          </button>
        </form>

        {showSuccess && (
          <div style={successMessageStyle}>
            Job posted successfully!
          </div>
        )}
      </main>
    </div>
  );
}

// Styles remain unchanged

const headerStyle = {
  background: '#f50057',
  width: "100%",
  color: 'white',
  padding: '10px 3%',
  marginLeft: "-20px",
  marginTop: "-20px",
  marginBottom: '30px',
};

const headerContentStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
};

const siteNameStyle = {
  fontSize: '2rem',
};

const profileStyle = {
  display: 'flex',
  alignItems: 'center',
};

const profileImageStyle = {
  width: '40px',
  height: '40px',
  borderRadius: '50%',
  objectFit: 'cover',
  marginRight: '10px',
};

const profileNameStyle = {
  fontSize: '1rem',
  color: 'white',
};

const mainStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
  backgroundColor: '#f9f9f9',
  borderRadius: '8px',
};

const formTitleStyle = {
  textAlign: 'center',
  marginBottom: '20px',
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '15px',
};

const inputGroupStyle = {
  display: 'flex',
  flexDirection: 'column',
};

const labelStyle = {
  fontSize: '1rem',
  marginBottom: '5px',
};

const inputStyle = {
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '1rem',
};

const submitButtonStyle = {
  background: '#f50057',
  color: 'white',
  border: 'none',
  padding: '10px 20px',
  borderRadius: '4px',
  cursor: 'pointer',
  fontSize: '1rem',
};

const successMessageStyle = {
  marginTop: '20px',
  padding: '10px',
  backgroundColor: '#4caf50',
  color: 'white',
  textAlign: 'center',
  borderRadius: '4px',
};

export default PostAJob;

