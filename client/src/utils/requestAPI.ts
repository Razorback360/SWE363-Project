export const requestBlood = async (requestData: any) => {
    try {
      const response = await fetch('http://localhost:5000/request-blood', {
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
  