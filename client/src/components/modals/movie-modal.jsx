import React, { useState } from 'react';
import { updateMovies } from '../api/api';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import './movie-modal.scss';

const MovieModal = ({ open, onClose }) => {
  const [movieName, setMovieName] = useState('');
  const [movieReleaseDate, setMovieReleaseDate] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    updateMovies();
  };

  if (!open) return null;

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
                type='text'
                value={movieReleaseDate}
                onChange={(e) => setMovieReleaseDate(e.target.value)}
                placeholder='Release date'
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
