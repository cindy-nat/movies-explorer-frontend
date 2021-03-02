import { MAIN_API_URL } from './Constants';
import { getResponseData } from './helper';


export const register = (email, password, name) => {
  return fetch(`${MAIN_API_URL}/signup` , {
    method: 'POST',
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({email, password, name})})
    .then(response => getResponseData(response));
}

export const authorize = (email, password) => {
  return fetch(`${MAIN_API_URL}/signin`, {
    method: 'POST',
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({email, password})})
    .then(response => getResponseData(response));
}

//запрос информации с сервера о данных пользователя
export const getInfo = () => {
  return fetch(`${MAIN_API_URL}/users/me`, {
    headers: {
      "Content-Type": "application/json"
    },
    credentials: 'include',})
    .then(getResponseData);
}

// отправка новых данных о пользователе на сервер
export const setInfo = ({name, email}) => {
  return fetch(`${MAIN_API_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      "Content-Type": "application/json"
    },      credentials: 'include',
    body: JSON.stringify({
      name,
      email
    })
  })
    .then(getResponseData);
}

// получение фильмов
export const getMovies = () => {
  return fetch(`${MAIN_API_URL}/movies`, {
    headers: {
      "Content-Type": "application/json"
    },      credentials: 'include',})
    .then(getResponseData);
}

//добавление карточки на сервер
export const addCard = (data) => {
  return fetch(`${MAIN_API_URL}/movies `, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },      credentials: 'include',
    body: JSON.stringify({
      country: data.country,
      director: data.director,
      duration: data.duration,
      year: data.year,
      description: data.description,
      image: data.image.url,
      trailer: data.trailerLink,
      movieId: data.id,
      nameRU: data.nameRU,
      nameEN: data.nameEN,
      thumbnail: data.image.thumbnail.url
    })
  })
    .then(getResponseData);
}

//удаление карточки с сервера
export const deleteCard = (id) => {
  return fetch(`${MAIN_API_URL}/movies/${id} `, {
    method: 'DELETE',
    credentials: 'include',
    headers: {
      "Content-Type": "application/json"
    },    })
    .then(getResponseData);
}
