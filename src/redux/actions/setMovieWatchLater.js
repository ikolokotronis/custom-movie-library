export const SET_MOVIE_WATCH_LATER = 'SET_MOVIE_WATCH_LATER';

export const setMovieWatchLater = (movie) => {
  return {
    type: SET_MOVIE_WATCH_LATER,
    payload: movie,
  };
};