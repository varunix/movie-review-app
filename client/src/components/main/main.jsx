import React, { useEffect, useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './main.scss';
import { getMovies } from '../api/api';
import { movieStoreContext } from '../../context/movies';

const Main = () => {
    const movieListState = useContext(movieStoreContext);
    const navigate = useNavigate();
    
    useEffect(() => {
      getMovies().then(res => movieListState.setMovieList(res.data));
    }, []);

    const toReviewsPage = (movieId) => {
      navigate(`/review-page/${movieId}`, { state: movieListState.movieList});
    };

    const renderedList = movieListState.movieList.map(movie => (
      <div key={movie._id} className='card' onClick={() => toReviewsPage(movie._id)}>
        <div className='card-body'>
          <div className='movie-name'>{movie.name}</div>
          <div className='movie-release-date'>{'Released: ' + movie.releaseDate.substring(0,10)}</div>
          <div className='movie-rating'><b>{'Rating: ' + movie.averageRating + '/10'}</b></div>
        </div>
      </div>
    ));

    return (
      <div className='main'>
          <span className='title'>The best movie reviews site!</span>
          {/* SearchBar And MovieList*/}
          <div className='card-container'>
            {renderedList}
          </div>
      </div>
    )
}

export default Main;