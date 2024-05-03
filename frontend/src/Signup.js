import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom'; // Import Link here
import './signup.css';

function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const submit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8081/signup', {
        name,
        email,
        password,
        userType: 'user',
      });

      if (response.data.success) {
        localStorage.setItem('user', JSON.stringify({ email, name }));
        navigate('/login');
      } else {
        setError(response.data.message || 'Signup failed');
      }
    } catch (error) {
      setError('An error occurred during signup');
      console.error(error);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const goToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="signup">
      <img src="/cinematic_login.jpg" alt="Background" className="signup__img" />
      <form className="signup__form" onSubmit={submit}>
        <h1 className="signup__title">Sign Up</h1>
        {error && <div className="alert alert-danger">{error}</div>}
        <div className="signup__content">
          <div className="signup__box">
            <i className="ri-user-line signup__icon"></i>
            <div className="signup__box-input">
              <input
                type="text"
                required
                className="signup__input"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <label className="signup__label">Name</label>
            </div>
          </div>
          <div className="signup__box">
            <i className="ri-mail-line signup__icon"></i>
            <div className="signup__box-input">
              <input
                type="email"
                required
                className="signup__input"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="signup__label">Email</label>
            </div>
          </div>
          <div className="signup__box">
            <i className="ri-lock-line signup__icon"></i>
            <div className="signup__box-input">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                className="signup__input"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="signup__label">Password</label>
              <i
                className={`signup__eye ${showPassword ? 'ri-eye-line' : 'ri-eye-off-line'}`}
                onClick={togglePasswordVisibility}
              ></i>
            </div>
          </div>
          <div className="signup__box">
            <i className="ri-lock-line signup__icon"></i>
            <div className="signup__box-input">
              <input
                type={showPassword ? 'text' : 'password'}
                required
                className="signup__input"
                placeholder="Confirm Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <label className="signup__label">Confirm Password</label>
              <i
                className={`signup__eye ${showPassword ? 'ri-eye-line' : 'ri-eye-off-line'}`}
                onClick={togglePasswordVisibility}
              ></i>
            </div>
          </div>
        </div>
        <button type="submit" className="signup__button">
          Sign Up
        </button>
        <p className="signup__login">
          Already have an account? <a href="/">Login</a>
        </p>
      </form>
    </div>
  );
}

export default Signup;
