export const ADD_MOVIE_FROM_FETCH = 'ADD_MOVIE_FROM_FETCH';

export const addMovieFromFetch = (movie) => {
  return {
    type: ADD_MOVIE_FROM_FETCH,
    payload: movie
  }
}