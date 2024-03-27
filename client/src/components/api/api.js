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

export const updateMovies = async (movie) => {
    return await axios({
        method: 'PATCH',
        url: `http://localhost:5000//api/movies/${movie._id}`,
        body: {
            name: movie.name,
            releaseDate: movie.releaseDate,
            averageRating: movie.averageRating
        }
    });
}

// export const updateReviews = async (id) => {
//     return await axios({
//         method: 'PATCH',
//         url: `http://localhost:5000/api/reviews/${id}`,
//         body: {
//             reviewerName: ,
//             rating:,
//             reviewComments
//         }
//     });
// }