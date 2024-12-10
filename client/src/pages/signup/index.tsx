import { redirect } from 'react-router-dom';
import './signup.css';
import { useState } from 'react';
import { register } from '../../utils/authAPI';

const Signup = () => {
  const [isHospital, setIsHospital] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    name: '',
    contact: '',
    location: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isHospital) {
      if (!formData.email || !formData.password || !formData.confirmPassword || !formData.firstName || !formData.lastName) {
        alert({ message: 'Missing Credentials', alertType: 'error' });
        return;
      }
    } else {
      if (!formData.email || !formData.password || !formData.confirmPassword || !formData.name || !formData.location || !formData.contact) {
        alert({ message: 'Missing Credentials', alertType: 'error' });
        return;
      }
    }

    try {
      // Use the imported requestBlood function
      const response = await register({ ...formData, isHospital });

      if (response) {
        alert({
          message: 'Request submitted successfully!',
          alertType: 'success',
        });
        redirect('/');
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
    <div className="sign-up-page-container signup h-auto">
      <div className="sign-up-container my-10">
        <h1>Welcome!</h1>
        <p>Please sign up to continue</p>
        <form onSubmit={handleSubmit}>
          <label>Email Address</label>
          <input type="email" placeholder="Placeholder" onChange={(e) => {
            setFormData({ ...formData, email: e.target.value });
          }} />
          <label>{isHospital ? "Name" : "First Name"}</label>
          <input type="text" placeholder="Placeholder" onChange={(e) => {
            setFormData({ ...formData, firstName: e.target.value });
          }} />
          <label>{isHospital ? "Location" : "Last Name"}</label>
          <input type="text" placeholder="Placeholder" onChange={(e) => {
            setFormData({ ...formData, lastName: e.target.value });
          }} />
          <label className={isHospital ? "flex" : "hidden"}>Contact Number</label>
          <input className={isHospital ? "flex" : "hidden"} type="text" placeholder="Placeholder" onChange={(e) => {
            setFormData({ ...formData, contact: e.target.value });
          }} />
          <label>Password</label>
          <input type="password" placeholder="Placeholder" onChange={(e) => {
            setFormData({ ...formData, password: e.target.value });
          }} />
          <label>Confirm Password</label>
          <input type="password" placeholder="Placeholder" onChange={(e) => {
            setFormData({ ...formData, confirmPassword: e.target.value });
          }} />
          {/* <p className="password-note">
            It must be a combination of minimum 8 letters, numbers, and symbols.
          </p> */}

          <div className="sign-up-checkbox-container">
            <div className="checkbox-label">
              <input type="checkbox" onChange={(e) => { if (e.target.checked) { setIsHospital(true); } else { setIsHospital(false); } }} />
              <label>I am a hospital.</label>
            </div>
          </div>

          <button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              location.href = '/profile';
            }}
          >
            Sign Up
          </button>
          <p>
            Have an account? <a href="/login">Sign in</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
