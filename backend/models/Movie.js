const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  name: { type: String, required: true },
  releaseDate: { type: Date, required: true },
  rating: { type: Number, required: false }
});

module.exports = mongoose.model('Movie', movieSchema);