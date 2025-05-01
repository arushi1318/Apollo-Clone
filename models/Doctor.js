import mongoose from 'mongoose';

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  speciality: {
    type: String,
    required: true,
  },
  experience: {
    type: String,
    required: true,
  },
  qualification: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  clinic: {
    type: String,
    required: true,
  },
  fee: {
    type: Number,
    required: true,
  },
  cashback: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    default: 0,
  },
  patientCount: {
    type: Number,
    default: 0,
  },
  languages: {
    type: [String],
    default: ['English'],
  },
  availableForOnline: {
    type: Boolean,
    default: true,
  },
  availableForHospitalVisit: {
    type: Boolean,
    default: true,
  },
  averageResponseTime: {
    type: Number, // in minutes
    default: 5,
  }
});

const Doctor = mongoose.models.Doctor || mongoose.model('Doctor', doctorSchema);

export default Doctor; 