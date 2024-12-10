import React, { useEffect, useState } from 'react';

import AppointmentCard from '../../components/AppointmentCard';
import { scheduleAppointment } from '../../utils/appointmentAPI';
import './HospitalAppointmentsPage.css';

interface Appointment {
  id: string;
  date: string;
  time: string;
  userId: string | null;
}

interface Hospital {
  id: string;
  name: string;
  location: string;
  contactNumber: string;
}

const HospitalAppointmentsPage: React.FC = () => {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [hospitals, setHospitals] = useState<Hospital[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [formData, setFormData] = useState({
    donorName: '',
    date: '',
    time: '',
  });
  const [error, setError] = useState<string | null>(null);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
          throw new Error(
            `Failed to fetch appointments, status: ${response.status}`,
          );
        }

        const data = await response.json();
        console.log('Fetched data:', data);

        if (Array.isArray(data)) {
          const formattedAppointments: Appointment[] = data.map(
            (appointment) => ({
              id: appointment._id,
              date: appointment.date,
              time: appointment.time,
              userId: appointment.userId,
            }),
          );
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

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${apiUrl}/api/hospitals/search?query=${searchQuery}`,
      );
      const data = await response.json();
      if (!response.ok) {
        throw new Error(
          `Failed to fetch hospitals, status: ${response.status}`,
        );
      }
      setHospitals(data);
    } catch (error) {
      console.error('Error fetching hospitals:', error);
      setError('Failed to load hospitals.');
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Call the scheduleAppointment function with form data
      const response = await scheduleAppointment(formData);
      setAlertMessage(response.message || 'Appointment scheduled successfully');

      // Optionally, refetch appointments or add the new appointment to the state
      setAppointments((prev) => [
        ...prev,
        {
          id: response._id,
          date: formData.date,
          time: formData.time,
          userId: null,
        },
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
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search hospitals..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
      {error && <p>{error}</p>}
      <div className="appointments-list">
        {hospitals.map((hospital) => (
          <div key={hospital.id}>
            {hospital.name} - {hospital.location}
          </div>
        ))}
        {appointments.map((appointment) => (
          <AppointmentCard key={appointment.id} appointment={appointment} />
        ))}
      </div>
    </div>
  );
};

export default HospitalAppointmentsPage;
