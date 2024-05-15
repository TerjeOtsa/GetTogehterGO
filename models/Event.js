const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  sport: { type: String, required: true },
  name: { type: String, required: true },
  description: String,
  location: {
    type: { type: String, default: 'Point' },
    coordinates: [Number],
  },
  date: { type: Date, required: true },
  maxParticipants: { type: Number, required: true },
  participants: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

EventSchema.index({ location: '2dsphere' });

module.exports = mongoose.model('Event', EventSchema);
