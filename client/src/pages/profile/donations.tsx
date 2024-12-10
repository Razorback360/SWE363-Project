import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

import Badge from '../../components/Badge';
import ProfileSidebar from '../../components/ProfileSidebar';
import { checkLogin } from '../../utils/checkLogin';
import './donation.css';

export default function Donations() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [appointments, setAppointments] = useState<any[]>([]);

  useEffect(() => {
    const fetchAppointments = async () => {
      const { user } = checkLogin();
      if (user) {
        try {
          const response = await fetch(
            `http://127.0.0.1:5000/api/appointment/user/${user}`,
          );
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
          const data = await response.json();
          setAppointments(data);
        } catch (error) {
          console.error('Error fetching user appointments:', error);
        }
      }
    };

    fetchAppointments();
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-1/5 bg-white p-5 shadow-md md:flex flex-col hidden">
        <div className="text-gray-600 mb-5">
          <h1 className="text-xl font-bold">Previous Donations</h1>
        </div>
        <ProfileSidebar />
      </aside>
      <main className="flex-1 p-8 bg-white m-8 rounded-lg overflow-hidden">
        <header className="flex justify-between items-center border-b pb-4 mb-8">
          <h2 className="text-3xl font-bold md:flex hidden">
            Previous Donations
          </h2>
          <h2 className="text-3xl font-bold md:hidden flex text-center items-center justify-center">
            <a href="/profile/mobile">
              <ArrowLeftIcon width={24} height={24} className="mr-5" />
            </a>
            Previous Donations
          </h2>
        </header>
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th>Recipients</th>
              <th>Request Date</th>
              <th>Request Blood</th>
              <th>Requested Amount</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appointment) => (
              <tr key={appointment._id}>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>{appointment.hospitalId.name}</td>
                <td>
                  <Badge badgeType="high">High</Badge>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
