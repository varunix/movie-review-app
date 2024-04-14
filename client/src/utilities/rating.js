const fetchTotalRating = (ratings) => {
    let calculateTotalRating = 0;
    ratings.map(x => {
        calculateTotalRating += x;
    });

    return calculateTotalRating/ratings.length;
};

export default fetchTotalRating;