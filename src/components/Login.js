import React, { useState } from "react";
import './Login.css'
import { useHistory } from 'react-router-dom';
import { login } from './services/LoginService'; // Adjust the path based on your project structure

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const token = await login(email, password);

      // Redirect to the admin dashboard or any other desired path
      history.push('/');
    } catch (error) {
      // Handle login failure
      console.error('Login failed');
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleLogin}>
        <h2>Login</h2>
        <p>Enter your email and password to enrich the Ashesi bus experience.</p>

        <hr />

        {/* Your logo goes here */}
        <div className="logo">
          <img src="your-logo.png" alt="Logo" />
        </div>

        <label htmlFor="email">Email address:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Login</button>

        <p>Don't have an account? Sign up</p>
      </form>
    </div>
  );
};

export default Login;






{/*import React from "react";
import './Login.css'
import { useHistory } from 'react-router-dom';

const Login = () => {
    return(
        <div className="login-container">
            <form className="login-form">
                <h2>Login</h2>
                <p>Enter your email and password to enrich the Ashesi bus experience.</p>

                <hr />

                 Your logo goes here 
                <div className="logo">
                <img src="your-logo.png" alt="Logo" />
                </div>

                <label htmlFor="email">Email address:</label>
                <input type="email" id="email" name="email" required />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" required />

                <button type="submit">Login</button>

                <p>Don't have an account? Sign up</p>
            </form>
        </div>
    )
}

export default Login;
*/}