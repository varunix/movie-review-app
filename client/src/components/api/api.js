import axios from 'axios';

const backendURL = 'https://movie-review-app-backend-omega.vercel.app';

export const getMovies = async () => {
    try {
        return await axios({ 
            method: 'GET',
            url: `${backendURL}/api/movies`
        });
    } catch (error) {
        console.log('Error: ', error);
    }
};

export const getReviews = async (id) => {
    try {
        return await axios({
            method: 'GET',
            url: `${backendURL}/api/reviews/movie/${id}`
        });
    } catch (error) {
        console.log('Error: ', error);
    }
};

export const updateMovies = async (movieName, movieReleaseDate, movieRating) => {
    try {
        const data = {
            "name": movieName,
            "releaseDate": movieReleaseDate,
            "rating": movieRating
        };
    
        return await axios({
            method: 'POST',
            url: `${backendURL}/api/movies`,
            data
        });
    } catch (error) {
        console.log('Error: ', error);
    }
};

export const addReviews = async (movieId, reviewerName, rating, reviewComments) => {
    try {
        const data = {
            movieId: movieId,
            reviewerName: reviewerName,
            rating: rating,
            reviewComments: reviewComments
        };

        return await axios({
            method: 'POST',
            url: `${backendURL}/api/reviews`,
            data
        });
    } catch (error) {
        console.log('Error: ', error);
    }
};

export const updatedMovieRating = async (id, movieName, movieReleaseDate, movieRating) => {
    const data = {
        name: movieName,
        releaseDate: movieReleaseDate,
        rating: movieRating
    };

    try {
        return await axios({
            method: 'POST',
            url: `${backendURL}/api/movies/${id}`,
            data
        });
    } catch (error) {
        console.log('Error: ', error);
    }
};

export const deleteReview = async (id) => {
    try {
        return await axios({
            method: 'DELETE',
            url: `${backendURL}/api/reviews/${id}`
        });
    } catch (error) {
        console.log('Error', error);
    }
};

export const updateReview = async (id, name, rating, comments) => {
    const data = {
        reviewerName: name,
        rating: rating,
        reviewComments: comments
    };
    try {
        return await axios({
            method: 'PATCH',
            url: `${backendURL}/api/reviews/${id}`,
            data
        });
    } catch (error) {
        console.log('Error', error);
    }
}