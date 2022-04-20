export const SET_MOVIE_RATING = 'SET_MOVIE_RATING';
export const setMovieRating = (movie, rating) => ({
  type: SET_MOVIE_RATING,
  payload: {
    movie,
    rating,
  },
});