import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import userRouter from './routes/user.js';
import hospitalRouter from './routes/hospital.js';
import appointmentRouter from './routes/appointment.js'; // Import the appointment router
import bloodRequestRouter from './routes/bloodRequest.js';



dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/notes';

app.use(cors());
app.use(express.json());

// Register the routers with appropriate base paths
app.use('/user', userRouter);
app.use('/api/hospital', hospitalRouter);
app.use('/api/appointment', appointmentRouter);
app.use('/api/blood-request', bloodRequestRouter);
// Start Block for Server & Database Connection
const start = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    const db = mongoose.connection;

    db.on('error', (error) => {
      console.log(error);
    });

    db.once('connected', () => {
      console.log('Database Connected');
    });

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();