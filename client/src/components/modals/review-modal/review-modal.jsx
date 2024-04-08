import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import "./review-modal.scss";
import { movieStoreContext } from "../../../context/movies";
import { addReviews } from "../../api/api";

const ReviewModal = ({ open, onClose }) => {
  const movieListState = useContext(movieStoreContext);
  const [formData, setFormData] = useState({selectedMovieId: '65ff514d6bcacf2690de4d73', reviewerName: '', reviewerRating: 0, reviewerComment: ''})

  if(!open) return false;

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(formData.selectedMovieId, formData.reviewerName, formData.reviewerRating, formData.reviewerComment);
    await addReviews(formData.selectedMovieId, formData.reviewerName, formData.reviewerRating, formData.reviewerComment).then(res => alert("Review added successfully!"));
    onClose(true);
    setFormData({selectedMovieId: '65ff514d6bcacf2690de4d73', reviewerName: '', reviewerRating: 0, reviewerComment: ''});
  }

  const handleChange = (event) => {
    event.preventDefault();
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value}));
  }

  return (
    <div className="overlay">
      <div className="review-modal">
        <div className="modal-container">
          <div className="cross-icon" onClick={onClose}>
          <FontAwesomeIcon icon={faXmark} style={{ color: '#e3e8ed', height: '20px' }} />
          </div>
          <div className="form-container">
            <form className="review-form" onSubmit={handleSubmit}>
              <div className="form-title">Add new review</div>
              <select className="details-input" name={'selectedMovieId'} onChange={handleChange} style={{ width: '315px', color: '#e3e8ed' }}>
              {movieListState.movieList.map(movie => (
                <option key={movie._id} value={movie._id}>{movie.name}</option>    
                ))}
              </select> 
              <input className='details-input' type="text" name={'reviewerName'} defaultValue={formData.reviewerName} onChange={handleChange} placeholder={"Your Name"} />
              <input className='details-input' type="number" name={'reviewerRating'} defaultValue={formData.reviewerRating} onChange={handleChange} placeholder={"Rating out of 10"} />
              <textarea className='details-input' type="text" name={'reviewerComment'} defaultValue={formData.reviewerComment} onChange={handleChange} placeholder={"Review comments"}/>
              <button type="submit" className="submit-button">
                Add review
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewModal;
