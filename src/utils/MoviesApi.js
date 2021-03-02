import { MOVIES_URL } from "./Constants";
import { getResponseData } from './helper';


export const getMovies = () => {
  return fetch(`${MOVIES_URL}/movies`, {
    headers: {
      "Content-Type": "application/json"
    },      credentials: 'include',})
    .then(response => getResponseData(response));
}
