import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { updateReview } from "../../api/api";
import "./edit-review-modal.scss";

const UpdateReviewModal = ({ open, onClose, reviewData }) => {
  const [formData, setFormData] = useState({ reviewerName: '', rating: undefined, reviewerComment: '' })

  if(!open) return false;

  const handleSubmit = async (event) => {
    event.preventDefault();
    await updateReview(reviewData, formData.reviewerName, formData.rating, formData.reviewerComment).then(alert("Review updated successfully!"));
    onClose(true);
    setFormData({ reviewerName: '', reviewerRating: undefined, reviewerComment: '' });
    window.location.reload();
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
              <div className="form-title">Edit review</div>
              <input className='details-input' type="text" name={'reviewerName'} required defaultValue={formData.reviewerName} onChange={handleChange} placeholder={"Your Name"} />
              <input className='details-input' type="number" name={'reviewerRating'} required defaultValue={formData.rating} onChange={handleChange} placeholder={"Rate movie out of 10"} />
              <textarea className='details-input' type="text" name={'reviewerComment'} required defaultValue={formData.reviewerComment} onChange={handleChange} placeholder={"Review comments"}/>
              <button type="submit" className="submit-button">
                Update review
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateReviewModal;
