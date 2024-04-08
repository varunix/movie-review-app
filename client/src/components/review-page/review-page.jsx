import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getReviews } from "../api/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import "./review-page.scss";

const ReviewPage = () => {
  const [reviewList, setReviewList] = useState([]);
  const location = useLocation();
  const params = useParams();
  const moviesList = location.state;
  const movie = moviesList.find((x) => x._id === params.id);

  useEffect(() => {
    getReviews(params.id).then((res) => setReviewList(res.data));
  }, []);

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
                style={{ color: "#e3e8ed", marginRight: "20px" }}
            />
            <FontAwesomeIcon icon={faTrash} style={{ color: "#e3e8ed" }} />
            </div>
        </div>
        </div>
    </div>
  ));

  return (
    <div className="review-page-container">
      <div className="review-header">
        <span className="movie-name">{movie.name}</span>
        <span className="movie-rating">{movie.averageRating + "/10"}</span>
      </div>
        {renderedList.length ? (
          renderedList
        ) : (
          <div className="no-reviews-container">
            <span className="no-reviews-text">No Reviews yet! Click on Add new review to add a review</span>
          </div>
        )}
      </div>
  );
};

export default ReviewPage;
