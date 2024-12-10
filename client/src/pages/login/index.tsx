import { useState } from 'react';

import { login } from '../../utils/authAPI';
import './login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.email || !formData.password) {
      alert({ message: 'Missing Credentials', alertType: 'error' });
      return;
    }

    try {
      // Use the imported requestBlood function
      const response = await login(formData);

      if (response) {
        location.href = '/';
      } else {
        alert({
          message: 'An error occurred. Please try again.',
          alertType: 'error',
        });
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert({
        message: 'An error occurred. Please try again.',
        alertType: 'error',
      });
    }
  };

  return (
    <div className="log-in-page-container login">
      <div className="log-in-container">
        <h1>Welcome Back!</h1>
        <p>Please log in to continue</p>
        <form onSubmit={handleSubmit}>
          <label>Email Address</label>
          <input
            type="email"
            placeholder="Placeholder"
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
            }}
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Placeholder"
            onChange={(e) => {
              setFormData({ ...formData, password: e.target.value });
            }}
          />
          <p className="password-note">
            It must be a combination of minimum 8 letters, numbers, and symbols.
          </p>

          <div className="log-in-checkbox-container">
            <div className="checkbox-label">
              <input type="checkbox" />
              <label>Remember me</label>
            </div>
            <p className="forgot-password">
              <a href="#"> Forgot password? </a>
            </p>
          </div>

          <button type="submit">Log In</button>
          <p>
            No account yet? <a href="/signup">Sign Up</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
