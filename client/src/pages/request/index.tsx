import React, { useState } from 'react';
import './hospitalRequest.css';
import Alert from '../../components/Alert';

interface HospitalRequestPageProps {
  hospitalId: string;
}

const HospitalRequestPage: React.FC<HospitalRequestPageProps> = ({ hospitalId }) => {
  const [formData, setFormData] = useState({
    bloodType: '',
    quantity: '',
    urgency: '',
  });
  const [alert, setAlert] = useState({ message: '', alertType: '' }); // Updated state for managing alerts

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/blood-request', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ hospitalId, ...formData }),
      });

      if (response.ok) {
        setAlert({ message: 'Request submitted successfully!', alertType: 'success' });
        setFormData({ bloodType: '', quantity: '', urgency: '' });
      } else {
        const errorData = await response.json();
        setAlert({ message: errorData.error || 'An error occurred. Please try again.', alertType: 'error' });
      }
    } catch (error) {
      console.error('Error submitting blood request:', error);
      setAlert({ message: 'An error occurred. Please try again.', alertType: 'error' });
    }
  };

  const handleCloseAlert = () => {
    setAlert({ message: '', alertType: '' }); // Clear the alert when closed
  };

  return (
    <div className="hospital-request-container">
      {alert.message && <Alert message={alert.message} onClose={handleCloseAlert} />}
      <form className="hospital-request-form" onSubmit={handleSubmit}>
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
