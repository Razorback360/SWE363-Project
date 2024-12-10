import { Request, Response, Router } from 'express';

import Hospital from '../models/hospital.js';

const router = Router();

// Route to get all hospitals
router.get('/', async (_req, res) => {
  try {
    const hospitals = await Hospital.find();
    res.status(200).json(hospitals);
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
    return;
  }
});

// Route to get a specific hospital by ID
router.get('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const hospital = await Hospital.findById(id);

    if (!hospital) {
      res.status(404).json({ error: 'Hospital not found' });
      return;
    }

    res.status(200).json(hospital);
    return;
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
    return;
  }
});

// Route to add a new hospital
router.post('/', async (req, res) => {
  try {
    const { name, location, contactNumber } = req.body;

    if (!name || !location || !contactNumber) {
      res.status(400).json({ error: 'All fields are required' });
      return;
    }

    const newHospital = new Hospital({ name, location, contactNumber });
    const savedHospital = await newHospital.save();

    res.status(201).json(savedHospital);
    return;
  } catch (error) {
    console.error('Error creating hospital:', error);
    res.status(500).json({ error: 'Internal Server Error' });
    return;
  }
});

router.get('/search', async (req, res) => {
  try {
    const queryParam = req.query.query;

    if (!queryParam || typeof queryParam !== 'string') {
      res.status(400).json({ error: 'Search query must be a single string' });
      return;
    }

    const hospitals = await Hospital.find({
      $or: [
        { name: { $regex: new RegExp(queryParam, 'i') } },
        { location: { $regex: new RegExp(queryParam, 'i') } },
      ],
    });

    if (hospitals.length === 0) {
      res
        .status(404)
        .json({ error: 'No hospitals found matching the search criteria' });
      return;
    }

    res.status(200).json(hospitals);
    return;
  } catch (error) {
    console.error('Error searching hospitals:', error);
    res.status(500).json({ error: 'Internal Server Error' });
    return;
  }
});

export default router;
