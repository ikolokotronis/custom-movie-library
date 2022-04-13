import {addMovieFromFetch} from "./addMovieFromFetch";
import {fetchByTitle} from "../../api/fetchByTitle";
import {startFetchingMovie} from "./startFetchingMovie";
import {stopFetchingMovie} from "./stopFetchingMovie";

export const fetchMovie = (movie_title) => dispatch => {
    dispatch(startFetchingMovie());
    fetchByTitle(movie_title)
        .then(res => res.json())
        .then(data => {
            dispatch(addMovieFromFetch(data));
            dispatch(stopFetchingMovie());
        })
        .catch(err => console.log(err));
}