import React, { useState } from 'react';
import Home from './components/home/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReviewPage from './components/review-page/review-page';
import Header from './components/header/header';
import MovieModal from './components/modals/movie-modal/movie-modal';
import ReviewModal from './components/modals/review-modal/review-modal';
import UpdateReviewModal from './components/modals/update-review-modal/edit-review-modal';

const App = () => {
  const [openMovieModal, setOpenMovieModal] = useState(false);
  const [openReviewModal, setOpenReviewModal] = useState(false);
  const [reviewUpdateModal, setReviewUpdateModal] = useState(false);
  const [reviewData, setReviewData] = useState('');

  return (
    <Router>
      <Header setOpenMovieModal={setOpenMovieModal} setOpenReviewModal={setOpenReviewModal} />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/review-page/:id' element={<ReviewPage setReviewUpdateModal={setReviewUpdateModal} setReviewData={setReviewData} />} />
      </Routes>
      <MovieModal open={openMovieModal} onClose={() => setOpenMovieModal(false)} />
      <ReviewModal open={openReviewModal} onClose={() => setOpenReviewModal(false)} />
      <UpdateReviewModal open={reviewUpdateModal} reviewData={reviewData} onClose={() => setReviewUpdateModal(false)} />
    </Router>
  );
};

export default App;