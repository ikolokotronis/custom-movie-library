import {ADD_MOVIE_FROM_FETCH} from "../actions/addMovieFromFetch";
import {START_FETCHING_MOVIE} from "../actions/startFetchingMovie";
import {STOP_FETCHING_MOVIE} from "../actions/stopFetchingMovie";
import {ERROR_WHILE_FETCHING_MOVIE} from "../actions/errorWhileFetchingMovie";


const initialState = {
    movieList: localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies')) : [],
    isLoading: false,
    error: null
};

export function moviesReducer(state = initialState, action){
  switch(action.type){
      case START_FETCHING_MOVIE:
          return {
              ...state,
              isLoading: true
          };
      case STOP_FETCHING_MOVIE:
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
      default:
          return state;
  }
}