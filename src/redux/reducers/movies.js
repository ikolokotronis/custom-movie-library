
const initState = localStorage.getItem('movies') ? JSON.parse(localStorage.getItem('movies')) : [];

export function moviesReducer(state = initState, action){
  switch(action.type){
    default:
      return state;
  }
}