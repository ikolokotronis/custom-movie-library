import {API_ADDRESS} from "../../api/config";
import {addMovieFromFetch} from "./addMovieFromFetch";

export const fetchMovie = (movie_name) => dispatch => {
    fetch(API_ADDRESS+'?t='+movie_name, {
    })
        .then(res => res.json())
        .then(data => {
            dispatch(addMovieFromFetch(data));
        })
        .catch(err => {
            console.log(err);
        })
}