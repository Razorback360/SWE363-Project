import React from 'react';

import './AppointmentCard.css';

interface Appointment {
  id: string; // Use _id as the unique identifier
  date: string;
  time: string;
  userId: string | null; // userId can be null
}

const AppointmentCard: React.FC<{ appointment: Appointment }> = ({
  appointment,
}) => {
  return (
    <div className="appointment-card">
      <h3>
        Appointment for{' '}
        {appointment.userId ? appointment.userId : 'Unknown Patient'}
      </h3>
      <p>Date: {new Date(appointment.date).toLocaleDateString()}</p>
      <p>Time: {appointment.time}</p>
    </div>
  );
};

export default AppointmentCard;
