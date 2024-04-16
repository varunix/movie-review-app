import React, { useEffect, useContext } from 'react';
import './header.scss';
import { getMovies } from '../api/api';
import { movieStoreContext } from '../../context/movies';

const Header = ({ setOpenMovieModal, setOpenReviewModal }) => {
  const movieListState = useContext(movieStoreContext);
  useEffect(() => {
    getMovies().then(res => movieListState.setMovieList(res.data));
  }, [movieListState.movieList]);

  return (
      <div className="header">
      <span className="header-label">MOVIECRITIC</span>
      <div className="header-button-container">
        <button className="header-add-button" onClick={() => setOpenMovieModal(true)}>Add new movie</button>
        <button className="header-review-button" onClick={() => setOpenReviewModal(true)}>Add new review</button>
      </div>
      </div>
  );
}

export default Header;