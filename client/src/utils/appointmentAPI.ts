// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const scheduleAppointment = async (appointmentData: any) => {
  try {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000'; // For Vite

    const response = await fetch(`${apiUrl}/api/appointment`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(appointmentData),
    });

    if (!response.ok) {
      console.error(`HTTP error! Status: ${response.status}`);
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error scheduling appointment:', error);
    throw error;
  }
};
