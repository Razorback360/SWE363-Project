import { Router } from 'express';

import RequestModel from '../models/request.js';

const router = Router();

router.get('/', async (_req, res) => {
  const allUsers = await RequestModel.find();
  res.status(200).json(allUsers);
});

router.post('/', async (req, res) => {
  try {
    const { hospitalId, bloodType, quantity, urgency, description, date } =
      req.body;

    const newRequest = new RequestModel({
      hospitalId,
      bloodType,
      quantity,
      urgency,
      description,
      date,
    });

    await newRequest.save();
    res.status(201).json({
      message: 'Blood request added successfully',
      request: newRequest,
    });
    return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res
      .status(500)
      .json({ error: 'Failed to add blood request', details: error.message });
  }
  return;
});

// Route to fetch all blood requests for a specific hospital
router.get('/:hospitalId', async (req, res) => {
  try {
    const { hospitalId } = req.params;

    // Find blood requests associated with the given hospital ID
    const bloodRequests = await RequestModel.find({ hospitalId });

    // Check if any blood requests were found
    if (!bloodRequests || bloodRequests.length === 0) {
      res
        .status(404)
        .json({ error: 'No blood requests found for this hospital' });
      return;
    }

    // Respond with the list of blood requests
    res.status(200).json({ success: true, bloodRequests });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error('Error fetching blood requests:', error);
    res
      .status(500)

      .json({ error: 'Internal Server Error', details: error.message });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const deletedRequest = await RequestModel.findByIdAndDelete(id);
    if (!deletedRequest) {
      res.status(404).json({ error: 'Blood request not found' });
      return;
    }

    res.status(200).json({
      message: 'Blood request removed successfully',
      request: deletedRequest,
    });
    return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({
      error: 'Failed to remove blood request',
      details: error.message,
    });
    return;
  }
});

router.patch('/:id/status', async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    const updatedRequest = await RequestModel.findByIdAndUpdate(
      id,
      { status },
      { new: true },
    );

    if (!updatedRequest) {
      res.status(404).json({ error: 'Blood request not found' });
      return;
    }

    res.status(200).json({
      message: 'Status updated successfully',
      request: updatedRequest,
    });
    return;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res
      .status(500)
      .json({ error: 'Failed to update status', details: error.message });
    return;
  }
});

export default router;
