import {ADD_FAVOURITE_MOVIE} from "../actions/addFavouriteMovie";
import {REMOVE_FAVOURITE_MOVIE} from "../actions/removeFavouriteMovie";

export function favouriteMoviesReducer(state = [], action){
    switch(action.type){
        case ADD_FAVOURITE_MOVIE:
            return [...state, action.payload];
        case REMOVE_FAVOURITE_MOVIE:
            return state.filter(movie => movie.imdbID !== action.payload.imdbID);
        default:
            return state;
    }
}