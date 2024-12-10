import { Request, Response, Router } from 'express';
import BloodRequest from '../models/bloodRequest.js'; // Import the BloodRequest model

const router = Router();

// Route to create a blood request
router.post('/', async (req: Request, res: Response) => {
  try {
    // Extract data from request body
    const { hospitalId, bloodType, quantity, urgency } = req.body;

    // Validation
    if (!hospitalId || !bloodType || !quantity || !urgency) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Ensure quantity is a number and valid
    const parsedQuantity = parseInt(quantity, 10);
    if (isNaN(parsedQuantity) || parsedQuantity <= 0) {
      return res.status(400).json({ error: 'Quantity must be a positive number' });
    }

    // Create and save the blood request
    const newBloodRequest = new BloodRequest({ hospitalId, bloodType, quantity: parsedQuantity, urgency });
    const savedRequest = await newBloodRequest.save();

    // Respond with a success message and the saved request
    res.status(201).json({ savedRequest });
  } catch (error) {
    console.error('Error creating blood request:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to fetch all blood requests for a specific hospital
router.get('/:hospitalId', async (req: Request, res: Response) => {
  try {
    const { hospitalId } = req.params;
    const bloodRequests = await BloodRequest.find({ hospitalId });

    // Check if blood requests exist for the hospital
    if (!bloodRequests.length) {
      return res.status(404).json({ error: 'No blood requests found for this hospital' });
    }

    // Respond with the list of blood requests
    res.status(200).json(bloodRequests);
  } catch (error) {
    console.error('Error fetching blood requests:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
