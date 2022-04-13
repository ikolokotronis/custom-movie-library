import {addMovieFromFetch} from "./addMovieFromFetch";
import {fetchByTitle} from "../../api/fetchByTitle";
import {startFetchingMovie} from "./startFetchingMovie";
import {stopFetchingMovie} from "./stopFetchingMovie";
import {errorWhileFetchingMovie} from "./errorWhileFetchingMovie";

export const fetchMovie = (movie_title) => dispatch => {
    dispatch(startFetchingMovie());
    fetchByTitle(movie_title)
        .then(res => res.json())
        .then(data => {
            if (data.Error) {
                dispatch(errorWhileFetchingMovie(data.Error));
                dispatch(stopFetchingMovie());
            }
            else {
                dispatch(addMovieFromFetch(data));
                dispatch(stopFetchingMovie());
            }
        })
        .catch(err => dispatch(errorWhileFetchingMovie(err)));
}