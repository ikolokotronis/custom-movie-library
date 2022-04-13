import {ADD_MOVIE_FROM_FETCH} from "../actions/addMovieFromFetch";


const initialState = {
    movieList: localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies')) : [],
    isLoading: false,
    error: null
};

export function moviesReducer(state = initialState, action){
  switch(action.type){
      case ADD_MOVIE_FROM_FETCH:
          return {
              ...state,
              movieList: [...state.movieList, action.payload]
          };
      default:
          return state;
  }
}