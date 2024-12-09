import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const Hospital = mongoose.model('Hospital', hospitalSchema);

export default Hospital;