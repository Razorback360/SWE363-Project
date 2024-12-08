import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import user from './routes/user.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/notes';

app.use(cors());
app.use(express.json());

app.use('/user', user);

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
