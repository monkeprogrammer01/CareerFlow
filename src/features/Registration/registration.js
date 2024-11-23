import React, { useState } from  'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './Register.css';
import SuccessMessage from '../messages/SuccessMessage';
import ErrorMessage from '../messages/ErrorMessage';

function Register() {
  // State variables for form fields and error messages
  const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState(null);
    const [showSuccess, setShowSuccess] = useState(false)
    const [showError, setShowError] = useState(false)    
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (password !== confirmPassword){
            setError("Password does not match")
            setTimeout(() => {
                setError("");
              }, 3000);
            return;
        }

        const userData = {
            "user": {
                email: email,
                password: password,
            }
        }

        try{
            await axios.post("http://localhost:8000/user/registration/", userData , {
                headers: {
                    'Content-Type': 'application/json',
                    
                }
            })
            setShowSuccess(true);  // Show success message
            setTimeout(() => {
            setShowSuccess(false); // Hide success message after a delay
              navigate('/user/login');      // Redirect to user profile
            }, 1500);
        }catch(error){       
            setShowError(true);  // Show error message
            setTimeout(() => {
            setShowError(false); // Hide error message after a delay

            }, 1500);}
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm your password"
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
      {error && <h5 style={{textAlign: "center", color: "red"}} >Password does not match</h5> }
      {showError && <ErrorMessage onClose={() => setShowError(false)} message="Something went wrong. Try again!" />}
        {showSuccess && <SuccessMessage onClose={() => setShowSuccess(false)} message={"Registered successfully!"} />}
    </div>
  );
}

export default Register;