import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './login.css';
// import './auth.css';


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [userName, setUserName] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://127.0.0.1:8081/login', {
        email,
        password,
      });

      if (response.data.success) {
        setUserName(response.data.name);
        localStorage.setItem('user', JSON.stringify({ email, name: response.data.name }));
        setTimeout(() => {
          navigate('/home', { state: { userName: response.data.name } });
        }, 2000);
      } else {
        setError(response.data.message);
      }
    } catch (error) {
      setError('Failed to login. Please try again later.');
      console.error('Login error:', error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="login">
      {/* Updated image src attribute */}
      <img src="/cinematic_login.jpg" alt="Background" className="login__img" />
      <form className="login__form" onSubmit={handleSubmit}>
      <h1 className="login__title" style={{ color: "#FFFFFF" }}>Login</h1>
        {error && <div className="alert alert-danger">{error}</div>}
        {userName && (
          <div className="alert alert-success" style={{ color: '#FF0000' }}>
            Welcome, {userName}
          </div>
        )}
        <div className="login__content">
          <div className="login__box">
            <i className="ri-user-line login__icon"></i>
            <div className="login__box-input">
              <input
                type="email"
                required
                className="login__input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="login__label">Email</label>
            </div>
          </div>
          <div className="login__box">
            <i className="ri-lock-line login__icon"></i>
            <div className="login__box-input">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                className="login__input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="login__label">Password</label>
              <i
                className={`login__eye ${showPassword ? 'ri-eye-line' : 'ri-eye-off-line'}`}
                onClick={togglePasswordVisibility}
              ></i>
            </div>
          </div>
        </div>
        <button type="submit" className="login__button">
          Login
        </button>
        <p className="login__register-2">
          Don't have an account? <a href="/signup">Register</a>
        </p>
      </form>
    </div>
  );
}

export default Login;
