export const scheduleAppointment = async (appointmentData: any) => {
  try {
    const response = await fetch('http://localhost:5000/schedule-appointment', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(appointmentData),
    });

    if (!response.ok) {
      // Log and throw an error if the response status is not OK
      console.error(`HTTP error! Status: ${response.status}`);
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    // Parse and return the response JSON
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error scheduling appointment:', error);
    throw error; // Rethrow to propagate the error to the caller
  }
};
