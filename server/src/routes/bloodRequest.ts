import { Request, Response, Router } from 'express';
import BloodRequest from '../models/bloodRequest.js'; // Import the BloodRequest model

const router = Router();

// Route to create a blood request
router.post('/', async (req: Request, res: Response) => {
  try {
    // Extract data from the request body
    const { hospitalId, bloodType, quantity, urgency } = req.body;

    // Validation: Ensure all fields are provided
    if (!hospitalId || !bloodType || !quantity || !urgency) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Ensure quantity is a positive number
    const parsedQuantity = parseInt(quantity, 10);
    if (isNaN(parsedQuantity) || parsedQuantity <= 0) {
      return res.status(400).json({ error: 'Quantity must be a positive number' });
    }

    // Create a new blood request
    const newBloodRequest = new BloodRequest({
      hospitalId,
      bloodType,
      quantity: parsedQuantity,
      urgency,
    });

    // Save the request to the database
    const savedRequest = await newBloodRequest.save();

    // Respond with the success status and the created request
    res.status(201).json({ success: true, request: savedRequest });
  } catch (error) {
    console.error('Error creating blood request:', error);
    // Respond with a detailed error message (sensitive information should be avoided in production)
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

// Route to fetch all blood requests for a specific hospital
router.get('/:hospitalId', async (req: Request, res: Response) => {
  try {
    const { hospitalId } = req.params;

    // Find blood requests associated with the given hospital ID
    const bloodRequests = await BloodRequest.find({ hospitalId });

    // Check if any blood requests were found
    if (!bloodRequests || bloodRequests.length === 0) {
      return res.status(404).json({ error: 'No blood requests found for this hospital' });
    }

    // Respond with the list of blood requests
    res.status(200).json({ success: true, bloodRequests });
  } catch (error) {
    console.error('Error fetching blood requests:', error);
    res.status(500).json({ error: 'Internal Server Error', details: error.message });
  }
});

export default router;
