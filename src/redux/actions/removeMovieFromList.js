export const REMOVE_MOVIE_FROM_LIST = 'REMOVE_MOVIE_FROM_LIST';


export const removeMovieFromList = (payload) => {
  return {
    type: REMOVE_MOVIE_FROM_LIST,
    payload
  }
}