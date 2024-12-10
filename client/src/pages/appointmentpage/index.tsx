import React, { useEffect, useState } from 'react';
import './HospitalAppointmentsPage.css';
import AppointmentCard from '../../components/AppointmentCard';
import { scheduleAppointment } from '../../utils/appointmentAPI'; // Import the scheduleAppointment function

interface Appointment {
  id: string;
  date: string;
  time: string;
  userId: string | null;
}

const HospitalAppointmentsPage: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [formData, setFormData] = useState({ donorName: '', date: '', time: '' });
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  // Define the base URL
  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';

  useEffect(() => {
    const fetchAppointments = async () => {
      const hospitalId = sessionStorage.getItem('hospitalId');
      if (!hospitalId) {
        setError('Hospital ID is missing. Please log in or select a hospital.');
        return;
      }
  
      try {
        const response = await fetch(`${apiUrl}/api/appointment/${hospitalId}`);
        if (!response.ok) {
          throw new Error(`Failed to fetch appointments, status: ${response.status}`);
        }
  
        const data = await response.json();
        console.log('Fetched data:', data);
  
        if (Array.isArray(data)) {
          const formattedAppointments: Appointment[] = data.map((appointment) => ({
            id: appointment._id,
            date: appointment.date,
            time: appointment.time,
            userId: appointment.userId,
          }));
          setAppointments(formattedAppointments);
        } else {
          console.error('Data is not an array:', data);
          setError('Failed to load appointments.');
        }
      } catch (error) {
        console.error('Error fetching appointments:', error);
        setError('An error occurred while fetching appointments.');
      }
    };
  
    fetchAppointments();
  }, []);
  

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Call the scheduleAppointment function with form data
      const response = await scheduleAppointment(formData);
      setAlertMessage(response.message || 'Appointment scheduled successfully');

      // Optionally, refetch appointments or add the new appointment to the state
      setAppointments((prev) => [
        ...prev,
        { id: response._id, date: formData.date, time: formData.time, userId: null },
      ]);

      // Reset form data
      setFormData({ donorName: '', date: '', time: '' });
    } catch (error) {
      console.error('Error scheduling appointment:', error);
      setAlertMessage('Failed to schedule appointment');
    }
  };

  return (
    <div className="appointments-container">
      <h1>Scheduled Appointments</h1>
      <div className="appointments-list">
        {appointments.map((appointment) => (
          <AppointmentCard key={appointment.id} appointment={appointment} />
        ))}
      </div>
    </div>
  );
};

export default HospitalAppointmentsPage;
