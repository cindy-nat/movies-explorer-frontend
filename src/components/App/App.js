import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import './App.css';
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import Profile from "../Profile/Profile";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import { register, authorize, getInfo, logout } from '../../utils/MainApi';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import Header from "../Header/Header";


function App() {
  const history = useHistory();
  const [isRegisteredError, setIsRegisteredError] = React.useState(false);

  // получение данных с API и утановка их в стейт переменные
  let name = 'Виталий';
  let email = 'pochta@yandex.ru';

  // функция необходима для перемещения пользователя на главный экран при логауте
  const handleSignOut = () => {
      history.push('/');
    }

  // регистрация пользователя
  const handleRegister = (email, password, name) => {
    register(email, password, name)
      .then(data => {
        if(data) {
          history.push('/');
        }
      })
      .catch(err => {
        setIsRegisteredError(true);
      });
  }

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <Header isLoggedIn = {isLoggedIn}/>
        <Switch>
          <Route exact path = "/">
            <Main/>
          </Route>
          <Route path = "/signup">
            <Register handleRegister ={handleRegister} isRegisteredError = {isRegisteredError}/>
          </Route>
          <Route path = "/signin">
            <Login handleLogin = {handleLogin} isLoginError = {isLoginError}/>
          </Route>

          <Route path = "/profile">
            <Profile handleSignOut = { handleSignOut }/>
          </Route>
          <Route path = "/movies">
            <Movies/>
          </Route>
          <Route path = "/saved-movies">
            <SavedMovies/>
          </Route>
          <Route path="*">
            <PageNotFound history={history}/>
          </Route>
        </Switch>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
