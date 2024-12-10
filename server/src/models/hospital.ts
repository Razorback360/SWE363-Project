import mongoose from 'mongoose';

const hospitalSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  name: {
    type: String,
    required: true,
    unique: true,
  },
  location: {
    type: String,
    required: true,
  },
  contactNumber: {
    type: String,
    required: true,
  },
});

const Hospital = mongoose.model('Hospital', hospitalSchema);

export default Hospital;
