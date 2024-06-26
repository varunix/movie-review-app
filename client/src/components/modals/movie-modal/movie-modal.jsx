import React, { useState } from 'react';
import { updateMovies } from '../../api/api';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import './movie-modal.scss';

const MovieModal = ({ open, onClose }) => {
  const [movieName, setMovieName] = useState('');
  const [movieReleaseDate, setMovieReleaseDate] = useState('');
  const [movieRating, setMovieRating] = useState(0);

  const onSubmit = async (e) => {
    e.preventDefault();
    
    await updateMovies(movieName, movieReleaseDate, movieRating).then(res => console.log(res.data));
    setMovieName('');
    setMovieReleaseDate('');
    setMovieRating(0);
  };

  if (!open) return false;

  return (
    <div className='overlay'>
      <div className='modal'>
        <div className='modal-container'>
          <div onClick={onClose} className='cross-icon'>
            <FontAwesomeIcon icon={faXmark} style={{ color: '#e3e8ed', height: '20px' }} />
          </div>
          <div className='form-container'>
            <form className='movie-form' onSubmit={onSubmit}>
              <div className='add-movie-title'>Add new movie</div>
              <input
                className='details-input'
                type='text'
                value={movieName}
                onChange={(e) => setMovieName(e.target.value)}
                placeholder='Name'
              />
              <input
                className='details-input'
                type='date'
                value={movieReleaseDate}
                onChange={(e) => setMovieReleaseDate(e.target.value)}
                placeholder='Release date'
                style={{ color: '#e3e8ed' }}
              />
              <button type='submit' className='submit-button'>Create movie</button>
          </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
