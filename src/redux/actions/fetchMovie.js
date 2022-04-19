import {addMovieFromFetch} from "./addMovieFromFetch";
import {fetchByTitle} from "../../api/fetchByTitle";
import {startLoading} from "./startLoading";
import {stopLoading} from "./stopLoading";
import {errorWhileFetchingMovie} from "./errorWhileFetchingMovie";

export const fetchMovie = (movie_title) => dispatch => {
    dispatch(startLoading());
    fetchByTitle(movie_title)
        .then(res => res.json())
        .then(data => {
            if (data.Error) {
                dispatch(errorWhileFetchingMovie(data.Error));
                dispatch(stopLoading());
            }
            else {
                dispatch(addMovieFromFetch(data));
                dispatch(stopLoading());
            }
        })
        .catch(err => dispatch(errorWhileFetchingMovie(err)));
}