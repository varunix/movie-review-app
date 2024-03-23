import React from 'react';
import Home from './components/home/home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ReviewPage from './components/review-page/review-page';
import Header from './components/header/header';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/review-page/:id' element={<ReviewPage />} />
      </Routes>
    </Router>
  );
};

export default App;