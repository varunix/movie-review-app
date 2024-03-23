const express = require('express');
const router = express.Router();

// Create a new movie
router.post('/', async (req, res) => {
  try {
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get a single movie
router.get('/:id', getMovie, (req, res) => {
    res.json(res.movie);
});

// Get all movies
router.get('/', async (req, res) => {
    try {
      const movies = await Movie.find();
      res.json(movies);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});

// Update a movie
router.patch('/:id', getMovie, async (req, res) => {
    if (req.body.name != null) {
      res.movie.name = req.body.name;
    }
    if (req.body.releaseDate != null) {
      res.movie.releaseDate = req.body.releaseDate;
    }
    if (req.body.averageRating != null) {
      res.movie.averageRating = req.body.averageRating;
    }
    try {
      const updatedMovie = await res.movie.save();
      res.json(updatedMovie);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
});

// Delete a movie
router.delete('/:id', getMovie, async (req, res) => {
    try {
      await res.movie.remove();
      res.json({ message: 'Movie deleted' });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
});

async function getMovie(req, res, next) {
    let movie;
    try {
      movie = await Movie.findById(req.params.id);
      if (movie == null) {
        return res.status(404).json({ message: 'Movie not found' });
      }
    } catch (err) {
      return res.status(500).json({ message: err.message });
    }
  
    res.movie = movie;
    next();
};

module.exports = router;
