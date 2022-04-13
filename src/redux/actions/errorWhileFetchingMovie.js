export const ERROR_WHILE_FETCHING_MOVIE = 'ERROR_WHILE_FETCHING_MOVIE';

export const errorWhileFetchingMovie = (error) => ({
  type: ERROR_WHILE_FETCHING_MOVIE,
  error,
});