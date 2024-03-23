import axios from 'axios';

export const getMovies = async () => {
    return await axios({ 
        method: 'GET',
        url: 'http://localhost:5000/api/movies'
    });
}

export const getReviews = async (id) => {
    return await axios({
        method: 'GET',
        url: `http://localhost:5000/api/reviews/movie/${id}`
    });
}