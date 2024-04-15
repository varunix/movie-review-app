import axios from 'axios';

export const getMovies = async () => {
    try {
        return await axios({ 
            method: 'GET',
            url: 'http://localhost:5000/api/movies'
        });
    } catch (error) {
        console.log('Error: ', error);
    }
};

export const getReviews = async (id) => {
    try {
        return await axios({
            method: 'GET',
            url: `http://localhost:5000/api/reviews/movie/${id}`
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
            url: `http://localhost:5000/api/movies`,
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
            url: `http://localhost:5000/api/reviews`,
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
            url: `http://localhost:5000/api/movies/${id}`,
            data
        });
    } catch (error) {
        console.log('Error: ', error);
    }
};