import { Request, Response, Router } from 'express';

import Appointment from '../models/appointment.js';

const router = Router();

// Route to get all appointments for a specific hospital
router.get('/:hospitalId', async (req: Request, res: Response) => {
  try {
    const { hospitalId } = req.params;
    const appointments = await Appointment.find({ hospitalId }).populate(
      'userId',
      'email',
    );

    if (!appointments.length) {
      res
        .sendStatus(404)
        .json({ error: 'No appointments found for this hospital' });
      return;
    }

    res.sendStatus(200).json(appointments);
    return;
  } catch (error) {
    console.error(error);
    res.sendStatus(500).json({ error: 'Internal Server Error' });
    return;
  }
});

// Route to get all appointments (no filtering by hospitalId)
router.get('/', async (req: Request, res: Response) => {
  try {
    const appointments = await Appointment.find().populate('userId', 'email');

    if (!appointments.length) {
      res.sendStatus(404).json({ error: 'No appointments found' });
      return;
    }

    res.sendStatus(200).json(appointments);
    return;
  } catch (error) {
    console.error(error);
    res.sendStatus(500).json({ error: 'Internal Server Error' });
    return;
  }
});

// Route to create a new appointment
router.post('/', async (req: Request, res: Response) => {
  try {
    const { userId, hospitalId, date, time } = req.body;

    // Validation
    if (!userId || !hospitalId || !date || !time) {
      res.sendStatus(400).json({ error: 'All fields are required' });
      return;
    }

    const newAppointment = new Appointment({ userId, hospitalId, date, time });
    await newAppointment.save();

    res.sendStatus(201).json({ newAppointment });
    return;
  } catch (error) {
    console.error(error);
    res.sendStatus(500).json({ error: 'Internal Server Error' });
    return;
  }
});

export default router;
