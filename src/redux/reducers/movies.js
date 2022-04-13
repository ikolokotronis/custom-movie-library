import {ADD_MOVIE_FROM_SEARCH} from "../actions/addMovieFromFetch";

const initialState = localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies')) : [];

export function moviesReducer(state = initialState, action){
  switch(action.type){
      case ADD_MOVIE_FROM_SEARCH:
          return [...state, action.payload];
      default:
          return state;
  }
}