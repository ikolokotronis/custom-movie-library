import {API_KEY} from "./config";

export function fetchByTitle(movie_title) {
  return fetch(`http://www.omdbapi.com/?t=${movie_title}&apikey=${API_KEY}`)
}