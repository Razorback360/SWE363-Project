import React, { useState } from 'react';
import { requestBlood } from '../../utils/requestAPI'; // Import the requestBlood API function
import './hospitalRequest.css'; // Create this file for styles

const HospitalRequestPage = () => {
  const [formData, setFormData] = useState({
    bloodType: '',
    quantity: '',
    urgency: '',
    hospitalName: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await requestBlood(formData); // Use the API function here

      if (response.message) {
        alert('Request submitted successfully!');
        setFormData({ bloodType: '', quantity: '', urgency: '', hospitalName: '' });
      }
    } catch (error: any) {
      console.error('Error submitting request:', error);
      alert(error.message || 'An error occurred. Please try again later.');
    }
  };

  return (
    <div className="hospital-request-container">
      <form className="hospital-request-form" onSubmit={handleSubmit}>
        <input
          className="hospital-request-input"
          type="text"
          placeholder="Hospital Name"
          value={formData.hospitalName}
          onChange={(e) => setFormData({ ...formData, hospitalName: e.target.value })}
          required
        />
        <select
          className="hospital-request-input"
          value={formData.bloodType}
          onChange={(e) => setFormData({ ...formData, bloodType: e.target.value })}
          required
        >
          <option value="">Select Blood Type</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
          <option value="O+">O+</option>
          <option value="O-">O-</option>
        </select>
        <input
          className="hospital-request-input"
          type="number"
          placeholder="Quantity (units)"
          value={formData.quantity}
          onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
          min="1"
          required
        />
        <select
          className="hospital-request-input"
          value={formData.urgency}
          onChange={(e) => setFormData({ ...formData, urgency: e.target.value })}
          required
        >
          <option value="">Select Urgency</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
        <button className="hospital-request-button" type="submit">
          Submit Request
        </button>
      </form>
    </div>
  );
};

export default HospitalRequestPage;
