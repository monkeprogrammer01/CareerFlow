import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '/Users/arsensejtkaliev/PycharmProjects/HeadHunter2.0/careerflowfrontend/src/App.css'
import SuccessMessage from '../messages/SuccessMessage';

function LoginForm() {
  const [user, setUser] = useState({
    email: '',
    password: '',
  });
  const [accessToken, setAccessToken] = useState()
  const [refreshToken, setRefreshToken] = useState()
  const [error, setError] = useState()
  const [showSuccess, setShowSuccess] = useState(false)
  const navigate = useNavigate();
  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Формирование запроса к API с данными пользователя
      const response = await axios.post(
        'http://localhost:8000/user/login/',
        { user } ,  // передаем данные пользователя как объект `user`
        {
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const { access, refresh } = response.data;
      setAccessToken(access);
      setRefreshToken(refresh);
      localStorage.setItem('access_token', access);
      setShowSuccess(true);  // Show success message
      setTimeout(() => {
      setShowSuccess(false); // Hide success message after a delay
        navigate('/');      // Redirect to user profile
      }, 1500);  // Adjust delay as desired
      console.log(response.data, access);  // Ответ от сервера
    } catch (error) {
      console.error('Ошибка при входе:', error.response?.data || error.message);
    }
  };

  return (
    <div className="register-container">
      <h2>Login</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      {error && <h5 style={{textAlign: "center", color: "red"}} >Password does not match</h5> }
        {showSuccess && <SuccessMessage onClose={() => setShowSuccess(false)} message={"Registered successfully!"} />}
    </div>
  );
}

export default LoginForm;
