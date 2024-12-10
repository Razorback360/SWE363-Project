// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const requestBlood = async (requestData: any) => {
  try {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000'; // For Vite

    const response = await fetch(`${apiUrl}/api/request`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestData),
    });

    if (!response.ok) {
      console.error(`HTTP error! Status: ${response.status}`);
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error requesting blood:', error);
    throw error;
  }
};
