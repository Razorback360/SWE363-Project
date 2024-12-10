import React, { useState } from 'react';

import Alert from '../../components/Alert';
import { scheduleAppointment } from '../../utils/appointmentAPI';
import './ScheduleAppointment.css';

// Import the custom alert component

const ScheduleAppointment = () => {
  const [formData, setFormData] = useState({
    donorName: '',
    date: '',
    time: '',
  });
  const [showAlert, setShowAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  // Function to check if the provided date and time are in the past
  const isPastDate = (date: string, time: string) => {
    const now = new Date();
    const appointmentDate = new Date(`${date}T${time}`);
    return appointmentDate <= now;
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  // Check if the selected date and time are in the past
  if (isPastDate(formData.date, formData.time)) {
    setAlertMessage(
      'You cannot schedule an appointment in the past. Please choose a future date and time.',
    );
    setShowAlert(true);
    return;
  }

  // Retrieve user ID from session storage or another source
  const userId = sessionStorage.getItem('userId');
  if (!userId) {
    setAlertMessage('User ID is missing. Please log in and try again.');
    setShowAlert(true);
    return;
  }

  try {
    // Add userId to the form data
    const dataToSend = { ...formData, userId };
    const response = await scheduleAppointment(dataToSend);
    setAlertMessage(response.message || 'Appointment scheduled successfully');
    setShowAlert(true);
  } catch (error) {
    console.error('Error details:', error);
    setAlertMessage('Failed to schedule appointment');
    setShowAlert(true);
  }
};


  const closeAlert = () => {
    setShowAlert(false);
  };

  return (
    <div className="schedule-appointment-container">
      <form className="schedule-appointment-form" onSubmit={handleSubmit}>
        <input
          className="schedule-appointment-input"
          type="text"
          placeholder="Donor Name"
          value={formData.donorName}
          onChange={(e) =>
            setFormData({ ...formData, donorName: e.target.value })
          }
        />
        <input
          className="schedule-appointment-input"
          type="date"
          value={formData.date}
          onChange={(e) => setFormData({ ...formData, date: e.target.value })}
        />
        <input
          className="schedule-appointment-input"
          type="time"
          value={formData.time}
          onChange={(e) => setFormData({ ...formData, time: e.target.value })}
        />
        <button className="schedule-appointment-button" type="submit">
          Schedule Appointment
        </button>
      </form>

      {/* Display the alert if showAlert is true */}
      {showAlert && <Alert message={alertMessage} onClose={closeAlert} />}
    </div>
  );
};

export default ScheduleAppointment;
