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
}

export const getReviews = async (id) => {
    try {
        return await axios({
            method: 'GET',
            url: `http://localhost:5000/api/reviews/movie/${id}`
        });
    } catch (error) {
        console.log('Error: ', error);
    }
}

export const updateMovies = async (movieName, movieReleaseDate) => {
    try {
        const data = {
            "name": movieName,
            "releaseDate": movieReleaseDate
        };
    
        return await axios({
            method: 'POST',
            url: `http://localhost:5000/api/movies`,
            data
        });
    } catch (error) {
        console.log('Error: ', error);
    }
}

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
}