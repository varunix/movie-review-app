import React, { useState } from 'react';
import Home from './components/home/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReviewPage from './components/review-page/review-page';
import Header from './components/header/header';
import MovieModal from './components/modals/movie-modal/movie-modal';
import ReviewModal from './components/modals/review-modal/review-modal';

const App = () => {
  const [openMovieModal, setOpenMovieModal] = useState(false);
  const [openReviewModal, setOpenReviewModal] = useState(false);

  return (
    <Router>
      <Header setOpenMovieModal={setOpenMovieModal} setOpenReviewModal={setOpenReviewModal} />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/review-page/:id' element={<ReviewPage />} />
      </Routes>
      <MovieModal open={openMovieModal} onClose={() => setOpenMovieModal(false)} />
      <ReviewModal open={openReviewModal} onClose={() => setOpenReviewModal(false)} />
    </Router>
  );
};

export default App;