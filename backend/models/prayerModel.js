const mongoose = require('mongoose')

const Schema = mongoose.Schema
const prayerSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  },
  times: {
    type: Number,
    default: 1
  },
  status: {
    type: String,
    default: 'Azkar'
  },
  date: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true })

module.exports = mongoose.model('prayer', prayerSchema)