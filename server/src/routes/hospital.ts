import { Request, Response, Router } from 'express';

import Hospital from '../models/hospital.js';

const router = Router();

// Route to get all hospitals
router.get('/', async (_req, res) => {
  try {
    const hospitals = await Hospital.find();
    res.status(200).json(hospitals);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
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
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to add a new hospital
router.post('/', async (req, res) => {
  try {
    const { name, location, contactNumber } = req.body;

    if (!name || !location || !contactNumber) {
      res.sendStatus(400).json({ error: 'All fields are required' });
      return;
    }

    const newHospital = new Hospital({ name, location, contactNumber });
    const savedHospital = await newHospital.save();

    res.sendStatus(201).json(savedHospital);
    return;
  } catch (error) {
    console.error('Error creating hospital:', error);
    res.sendStatus(500).json({ error: 'Internal Server Error' });
    return;
  }
});

export default router;
