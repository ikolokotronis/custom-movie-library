export const ADD_MOVIE_FROM_SEARCH = 'ADD_MOVIE_FROM_SEARCH';

export const addMovieFromFetch = (movie) => {
  return {
    type: ADD_MOVIE_FROM_SEARCH,
    payload: movie
  }
}