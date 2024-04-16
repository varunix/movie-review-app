import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getReviews } from "../api/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import fetchTotalRating from "../../utilities/rating";
import { updatedMovieRating } from "../api/api";
import "./review-page.scss";
import { deleteReview } from "../api/api";

const ReviewPage = ({ setReviewUpdateModal, setReviewData }) => {
  const [reviewList, setReviewList] = useState([]);
  const location = useLocation();
  const params = useParams();
  const moviesList = location.state;
  const movie = moviesList.find((x) => x._id === params.id);

  useEffect(() => {
    getReviews(params.id).then((res) => {
      setReviewList(res.data);
      const ratings = res.data.map((review) => review.rating);
      const calculatedTotalRating = fetchTotalRating(ratings);
      updatedMovieRating(
        params.id,
        movie.name,
        movie.releaseDate,
        calculatedTotalRating
      ).then((res) => console.log(res.data));
    });
  }, [params.id]);

  const handleDeleteReview = (reviewId) => {
    deleteReview(reviewId).then((res) => alert(res.data));
    window.location.reload();
  };

  const handleUpdateReview = (reviewId) => {
    setReviewData(reviewId);
    setReviewUpdateModal(true);
  }

  const renderedList = reviewList.map((review) => (
    <div key={review._id} className="card-container">
      <div className="review-card">
        <div className="comments-container">
          <div className="review-comment">{review.reviewComments}</div>
          <div className="comment-rating">{review.rating + "/10"}</div>
        </div>
        <div className="comments-container">
          <div className="reviewer-name">{"By " + review.reviewerName}</div>
          <div className="icons-container">
            <FontAwesomeIcon
              icon={faPenToSquare}
              style={{ color: "#e3e8ed", marginRight: "20px", cursor: 'pointer' }}
              onClick={() => handleUpdateReview(review._id)}
            />
            <FontAwesomeIcon icon={faTrash} style={{ color: "#e3e8ed", cursor: 'pointer' }} onClick={() => handleDeleteReview(review._id)} />
          </div>
        </div>
      </div>
    </div>
  ));

  return (
    <div className="review-page-container">
      <div className="review-header">
        <span className="movie-name">{movie.name}</span>
        <span className="movie-rating">
          {movie.rating ? movie.rating + "/10" : "No reviews"}
        </span>
      </div>
      {renderedList.length ? (
        renderedList
      ) : (
        <div className="no-reviews-container">
          <span className="no-reviews-text">
            No Reviews yet! Click on Add new review to add a review
          </span>
        </div>
      )}
    </div>
  );
};

export default ReviewPage;
