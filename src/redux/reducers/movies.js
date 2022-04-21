import {ADD_MOVIE_FROM_FETCH} from "../actions/addMovieFromFetch";
import {START_LOADING} from "../actions/startLoading";
import {STOP_LOADING} from "../actions/stopLoading";
import {ERROR_WHILE_FETCHING_MOVIE} from "../actions/errorWhileFetchingMovie";
import {REMOVE_MOVIE_FROM_LIST} from "../actions/removeMovieFromList";
import {SET_MOVIE_IS_FAVOURITE} from "../actions/setMovieIsFavourite";
import {SET_MOVIE_RATING} from "../actions/setMovieRating";
import {SET_MOVIE_WATCH_LATER} from "../actions/setMovieWatchLater";


const initialState = {
    movieList: localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies')) : [],
    isLoading: false,
    error: null
};

export function moviesReducer(state = initialState, action){
  switch(action.type){
      case START_LOADING:
          return {
              ...state,
              isLoading: true
          };
      case STOP_LOADING:
          return {
              ...state,
              isLoading: false
          };
      case ERROR_WHILE_FETCHING_MOVIE:
          return {
              ...state,
              error: action.error
          };
      case ADD_MOVIE_FROM_FETCH:
          return {
              ...state,
              movieList: [...state.movieList, action.payload]
          };
      case REMOVE_MOVIE_FROM_LIST:
          return {
              ...state,
              movieList: [...state.movieList.filter(movie => movie.imdbID !== action.payload)]
          };
      case SET_MOVIE_IS_FAVOURITE:
          return {
              ...state,
              movieList: [...state.movieList.map(movie => {
                  if(movie.imdbID === action.payload.imdbID){
                      movie.isFavourite = !action.payload.isFavourite;
                  }
                  return movie;
              })]
          };
      case SET_MOVIE_RATING:
          return {
              ...state,
              movieList: [...state.movieList.map(movie => {
                  if(movie.imdbID === action.payload.movie.imdbID){
                      movie.localUserRating = action.payload.rating;
                  }
                  return movie;
              })]
          };
      case SET_MOVIE_WATCH_LATER:
          return {
              ...state,
              movieList: [...state.movieList.map(movie => {
                  if(movie.imdbID === action.payload.imdbID){
                      movie.watchLater = !action.payload.watchLater;
                  }
                  return movie;
              })]
          };
      default:
          return state;
  }
}