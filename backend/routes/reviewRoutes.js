const express = require('express');
const router = express.Router();
const Review = require('../models/Review');

// Get all reviews
router.get('/', async (req, res) => {
    try {
      const reviews = await Review.find();
      res.json(reviews);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});

// Get reviews for a movie
router.get('/movie/:movieId', async (req, res) => {
    try {
      const reviews = await Review.find({ movieId: req.params.movieId });
      res.json(reviews);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});

// Create a review
router.post('/', async (req, res) => {
    const review = new Review({
      movieId: req.body.movieId,
      reviewerName: req.body.reviewerName,
      rating: req.body.rating,
      reviewComments: req.body.reviewComments
    });
    try {
      const newReview = await review.save();
      res.status(201).json(newReview);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
});

// Update a review
router.patch('/:id', getReview, async (req, res) => {
    if (req.body.reviewerName != null) {
      res.review.reviewerName = req.body.reviewerName;
    }
    if (req.body.rating != null) {
      res.review.rating = req.body.rating;
    }
    if (req.body.reviewComments != null) {
      res.review.reviewComments = req.body.reviewComments;
    }
    try {
      const updatedReview = await res.review.save();
      res.json(updatedReview);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
});

// Delete a review
router.delete('/:id', getReview, async (req, res) => {
    try {
      await res.review.remove();
      res.json({ message: 'Review deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});

async function getReview(req, res, next) {
    let review;
    try {
      review = await Review.findById(req.params.id);
      if (review == null) {
        return res.status(404).json({ message: 'Review not found' });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  
    res.review = review;
    next();
};

module.exports = router;
