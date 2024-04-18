import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './main.scss';
import { movieStoreContext } from '../../context/movies';

const Main = () => {
    const [query, setQuery] = useState('');
    const movieListState = useContext(movieStoreContext);
    const navigate = useNavigate();

    const toReviewsPage = (movieId) => {
      navigate(`/review-page/${movieId}`, { state: movieListState.movieList});
    };

    const getFilteredMoviesList = (query) => {
      if (!query) {
        return movieListState.movieList;
      }

      return movieListState.movieList.filter(movie => movie.name.includes(query));
    }

    const filteredMovieList = getFilteredMoviesList(query);

    const formatDate = (date) => {
      const currDate = new Date(date);
      const res = currDate.getDate() + '-' + currDate.getMonth() + '-' + currDate.getFullYear();
      return res;
    };

    const renderedList = filteredMovieList.map(movie => (
      <div key={movie._id} className='card' onClick={() => toReviewsPage(movie._id)}>
        <div className='card-body'>
          <div className='movie-name'>{movie.name}</div>
          <div className='movie-release-date'>{'Released: ' + formatDate(movie.releaseDate)}</div>
          <div className='movie-rating'><b>Rating: {movie.rating !== undefined ? movie.rating + '/10' : 'Not yet reviewed'}</b></div>
        </div>
      </div>
    ));

    return (
      <div className='main'>
          <span className='title'>The best movie reviews site!</span>
          <div className='search-bar'>
            <button className='search-button'>Search</button>
            <input type="text" className='search-input' onChange={(e) => setQuery(e.target.value)} />
          </div>
          <div className='card-container'>
            {renderedList}
          </div>
      </div>
    )
}

export default Main;