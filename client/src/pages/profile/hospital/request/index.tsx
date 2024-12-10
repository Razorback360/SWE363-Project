import { ArrowLeftIcon } from '@heroicons/react/24/outline';
import React, { useEffect, useState } from 'react';

import Alert from '../../../../components/Alert';
import HospitalProfileSidebar from '../../../../components/HospitalProfileSidebar';
import './hospitalRequest.css';

interface HospitalRequestPageProps {
  hospitalId: string | null; // Allow for null to validate
}

const HospitalRequestPage: React.FC<HospitalRequestPageProps> = ({
  hospitalId,
}) => {
  const [formData, setFormData] = useState({
    bloodType: '',
    quantity: '',
    urgency: '',
  });
  const [alert, setAlert] = useState({ message: '', alertType: '' });

  useEffect(() => {
    if (!hospitalId) {
      setAlert({
        message: 'Hospital ID is required to make a request.',
        alertType: 'error',
      });
    }
  }, [hospitalId]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!hospitalId) {
      setAlert({
        message: 'Hospital ID is missing. Please provide a valid ID.',
        alertType: 'error',
      });
      return;
    }

    try {
      // Simulating API call response
      const response = true; // Replace with actual API logic

      if (response) {
        setAlert({
          message: 'Request submitted successfully!',
          alertType: 'success',
        });
        setFormData({ bloodType: '', quantity: '', urgency: '' });
      } else {
        setAlert({
          message: 'An error occurred. Please try again.',
          alertType: 'error',
        });
      }
    } catch (error) {
      console.error('Error submitting blood request:', error);
      setAlert({
        message: 'An error occurred. Please try again.',
        alertType: 'error',
      });
    }
  };

  const handleCloseAlert = () => {
    setAlert({ message: '', alertType: '' });
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      <aside className="w-1/5 bg-white p-5 shadow-md md:flex flex-col hidden">
        <div className="text-gray-600 mb-5">
          <h1 className="text-xl font-bold">Hospital Request</h1>
        </div>
        <HospitalProfileSidebar />
      </aside>
      <main className="flex-1 p-8 bg-white m-8 rounded-lg overflow-hidden">
        <header className="flex justify-between items-center border-b pb-4 mb-8">
          <h2 className="text-3xl font-bold md:flex hidden">Request Blood</h2>
          <h2 className="text-3xl font-bold md:hidden flex text-center items-center justify-center">
            <a href="/dashboard">
              <ArrowLeftIcon width={24} height={24} className="mr-5" />
            </a>
            Request Blood
          </h2>
        </header>

        {alert.message && (
          <Alert message={alert.message} onClose={handleCloseAlert} />
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="flex flex-col space-y-2">
            <label htmlFor="bloodType" className="font-semibold">
              Blood Type
            </label>
            <select
              id="bloodType"
              className="hospital-request-input"
              value={formData.bloodType}
              onChange={(e) =>
                setFormData({ ...formData, bloodType: e.target.value })
              }
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
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="quantity" className="font-semibold">
              Quantity (units)
            </label>
            <input
              id="quantity"
              className="hospital-request-input"
              type="number"
              placeholder="Enter quantity"
              value={formData.quantity}
              onChange={(e) =>
                setFormData({ ...formData, quantity: e.target.value })
              }
              min="1"
              required
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="urgency" className="font-semibold">
              Urgency Level
            </label>
            <select
              id="urgency"
              className="hospital-request-input"
              value={formData.urgency}
              onChange={(e) =>
                setFormData({ ...formData, urgency: e.target.value })
              }
              required
            >
              <option value="">Select Urgency</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>
          </div>

          <button
            type="submit"
            className="hospital-request-button bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
          >
            Submit Request
          </button>
        </form>
      </main>
    </div>
  );
};

export default HospitalRequestPage;
