import { MOVIES_URL } from "./Constants";
import { getResponseData } from './helper';


export const getMovies = () => {
  return fetch(`${MOVIES_URL}`, {
    headers: {
      "Content-Type": "application/json"
    },
  })
    .then(response => getResponseData(response));
}
