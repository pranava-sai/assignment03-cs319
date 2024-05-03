import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

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
                userType: 'user' // Assuming 'userType' is required by your backend, set as needed
            });

            if (response.data.success) {
                navigate('/home', { state: { id: email } });
            } else {
                setError(response.data.message || 'Signup failed');
            }
        } catch (error) {
            setError('An error occurred during signup');
            console.error(error);
        }
    };

    return (
        <div className="signup">
            <h1>Signup</h1>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={submit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    required
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm Password"
                    required
                />
                <input type="submit" value="Sign Up" />
            </form>

            <br />
            <p>OR</p>
            <br />

            <Link to="/">Login Page</Link>
        </div>
    );
}

export default Signup;
