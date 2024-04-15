import React, { useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './main.scss';
import { getMovies } from '../api/api';
import { movieStoreContext } from '../../context/movies';

const Main = () => {
    const movieListState = useContext(movieStoreContext);
    const navigate = useNavigate();
    
    useEffect(() => {
      getMovies().then(res => movieListState.setMovieList(res.data));
    }, [movieListState.movieList]);

    const toReviewsPage = (movieId) => {
      navigate(`/review-page/${movieId}`, { state: movieListState.movieList});
    };

    const formatDate = (date) => {
      const currDate = new Date(date);
      const res = currDate.getDate() + '-' + currDate.getMonth() + '-' + currDate.getFullYear();
      return res;
    };

    const renderedList = movieListState.movieList.map(movie => (
      <div key={movie._id} className='card' onClick={() => toReviewsPage(movie._id)}>
        <div className='card-body'>
          <div className='movie-name'>{movie.name}</div>
          <div className='movie-release-date'>{'Released: ' + formatDate(movie.releaseDate)}</div>
          <div className='movie-rating'><b>Rating: {movie.rating != undefined ? movie.rating + '/10' : 'Not yet reviewed'}</b></div>
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