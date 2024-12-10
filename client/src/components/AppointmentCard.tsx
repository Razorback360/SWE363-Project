import React from 'react';
import './AppointmentCard.css'; // Your CSS file for card styling

// In AppointmentCard.tsx

interface Appointment {
    id: string; // Use _id as the unique identifier
    date: string;
    time: string;
    userId: string | null; // userId can be null
  }
interface AppointmentCardProps {
    appointment: Appointment; // Use the same Appointment type as in the parent component
  }
  
  const AppointmentCard: React.FC<{ appointment: Appointment }> = ({ appointment }) => {
    return (
      <div className="appointment-card">
        <h3>Appointment for {appointment.userId ? appointment.userId : "Unknown Patient"}</h3>
        <p>Date: {new Date(appointment.date).toLocaleDateString()}</p>
        <p>Time: {appointment.time}</p>
      </div>
    );
  };
  
  
  export default AppointmentCard;
  
