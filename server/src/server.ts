import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import mongoose from 'mongoose';

import User from './models/user.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/notes';

app.use(cors());
app.use(express.json());

// Sample routes, not to be used in deployment, only for reference.
app.get('/users', async (req, res) => {
  const allUsers = await User.find();
  res.sendStatus(200).json(allUsers);
});

app.get('/user/:id', async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.sendStatus(200).json(user);
});

// Start Block for Server & Database Connection
const start = async () => {
  try {
    await mongoose.connect(MONGO_URI);

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
