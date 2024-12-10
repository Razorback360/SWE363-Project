import mongoose from 'mongoose';

const bloodRequestSchema = new mongoose.Schema({
  hospitalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hospital',
    required: true,
  },
  bloodType: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  urgency: {
    type: String,
    enum: ['Low', 'Medium', 'High'],
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const BloodRequest = mongoose.model('BloodRequest', bloodRequestSchema);

export default BloodRequest;
