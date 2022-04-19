import {combineReducers} from "redux";

import {moviesReducer} from "./movies";
import {favouriteMoviesReducer} from "./favouriteMovies";

export default combineReducers({
  movies: moviesReducer,
  favourite_movies: favouriteMoviesReducer,
});