export const REMOVE_FAVOURITE_MOVIE = 'REMOVE_FAVOURITE_MOVIE';

export const removeFavouriteMovie = (movie) => {
    return {
        type: REMOVE_FAVOURITE_MOVIE,
        payload: movie
    }
}