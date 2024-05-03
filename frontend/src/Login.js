import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [userName, setUserName] = useState(''); // State to store the user's name

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://127.0.0.1:8081/login', {
                email,
                password
            });

            if (response.data.success) {
                setUserName(response.data.name); // Store the user's name from the response
                // Delay navigation to allow the user to see the welcome message
                setTimeout(() => {
                    navigate('/home'); // Adjust this as needed for your routes
                }, 2000); // Delay for 2 seconds before navigating
            } else {
                setError(response.data.message);
            }
        } catch (error) {
            setError('Failed to login. Please try again later.');
            console.error('Login error:', error);
        }
    };

    return (
        <div className="container mt-5">
            <h2>Login</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            {userName && <div className="alert alert-success" style={{ color: "#FF0000" }}>
                Welcome, {userName}
            </div>}
            <form onSubmit={handleSubmit} className="w-50 mx-auto">
                <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
}

export default Login;
