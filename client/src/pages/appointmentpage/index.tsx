import React, { useEffect, useState } from 'react';
import './HospitalAppointmentsPage.css';
import AppointmentCard from '../../components/AppointmentCard';

interface Appointment {
  id: string;
  date: string;
  time: string;
  userId: string | null;
}

const HospitalAppointmentsPage: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const response = await fetch(`/api/appointment/60c72b2f9f1b2c001c8e7e23`);
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
