import React, { useState } from 'react';
import Home from './components/home/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReviewPage from './components/review-page/review-page';
import Header from './components/header/header';
import MovieModal from './components/modals/movie-modal';

const App = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Router>
      <Header setOpenModal={setOpenModal} />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/review-page/:id' element={<ReviewPage />} />
      </Routes>
      <MovieModal open={openModal} onClose={() => setOpenModal(false)} />
    </Router>
  );
};

export default App;