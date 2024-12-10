import mongoose from 'mongoose';

export enum BloodType {
  'A+',
  'A-',
  'B+',
  'B-',
  'O+',
  'O-',
  'AB+',
  'AB-',
}

enum Urgency {
  'Low',
  'Medium',
  'High',
}

const requestSchema = new mongoose.Schema({
  hospitalId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Hospital',
    required: true,
  },
  bloodType: {
    type: String,
    required: true,
    enum: BloodType,
  },
  quantity: {
    type: Number,
    required: true,
  },
  urgency: {
    type: String,
    required: true,
    enum: Urgency,
  },
  description: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const Request = mongoose.model('Request', requestSchema);

export default Request;
