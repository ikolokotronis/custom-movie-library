import {ADD_MOVIE_FROM_FETCH} from "../actions/addMovieFromFetch";
import {START_LOADING} from "../actions/startLoading";
import {STOP_LOADING} from "../actions/stopLoading";
import {ERROR_WHILE_FETCHING_MOVIE} from "../actions/errorWhileFetchingMovie";
import {REMOVE_MOVIE_FROM_LIST} from "../actions/removeMovieFromList";
import {MOVIE_IS_FAVORITE} from "../actions/movieIsFavorite";


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
          console.log('error!')
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
      case MOVIE_IS_FAVORITE:
          return {
              ...state,
              movieList: [...state.movieList.map(movie => {
                  if(movie.imdbID === action.payload.imdbID){
                      movie.isFavorite = !action.payload.isFavorite;
                  }
                  return movie;
              })]
          };
      default:
          return state;
  }
}