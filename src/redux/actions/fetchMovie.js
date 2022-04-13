import {addMovieFromFetch} from "./addMovieFromFetch";
import {fetchByTitle} from "../../api/fetchByTitle";

export const fetchMovie = (movie_title) => dispatch => {
    fetchByTitle(movie_title)
        .then(res => res.json())
        .then(data => {
            dispatch(addMovieFromFetch(data));
        })
        .catch(err => console.log(err));
}