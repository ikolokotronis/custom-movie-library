export const ADD_FAVOURITE_MOVIE = 'ADD_FAVOURITE_MOVIE';

export const addFavouriteMovie = (movie) => {
  return {
    type: ADD_FAVOURITE_MOVIE,
    payload: movie
  }
}