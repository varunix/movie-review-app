const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  movieId: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
  reviewerName: { type: String },
  rating: { type: Number, required: true },
  comments: { type: String, required: true },
});

module.exports = mongoose.model('Review', reviewSchema);