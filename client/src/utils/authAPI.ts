// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const login = async (authData: any) => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000'; // For Vite
  
      const response = await fetch(`${apiUrl}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(authData),
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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const register = async (authData: any) => {
    try {
      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000'; // For Vite
  
      const response = await fetch(`${apiUrl}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(authData),
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