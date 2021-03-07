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
import { register, authorize, getInfo, logout, setInfo } from '../../utils/MainApi';
import { getMovies } from '../../utils/MoviesApi';
import {CurrentUserContext} from '../../contexts/CurrentUserContext';
import Header from "../Header/Header";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";


function App() {
  const history = useHistory();
  const [isRegisteredError, setIsRegisteredError] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isLoginError, setIsLoginError] = React.useState(false);
  const [isEditError, setIsEditError] = React.useState(false);
  const [isEditSuccess, setIsEditSuccess] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});
  const [movies, setMovies] = React.useState({});
  const [isLoading, setIsLoading] = React.useState(false);

  //проверка зарегестирован ли пользователь
  const isLoggedInCheck = () => {
    getInfo()
      .then(data=>{
        if(data) {
          setCurrentUser(data);
          setIsLoggedIn(true);
          history.push("/movies");
        }
      })
      .catch(err=>{
        console.log(err);
      })
  };
  React.useEffect(() => {
    isLoggedInCheck();
    setIsLoading(true);
    getMovies()
      .then((moviesInfo)=>{
        setMovies(moviesInfo);
      })
      .finally(() => setIsLoading(false));
  },[isLoggedIn]);

  // регистрация пользователя
  const handleRegister = (email, password, name) => {
    register(email, password, name)
      .then(data => {
        if(data) {
          setIsLoggedIn(true);
          history.push('/movies');
        }
      })
      .catch(err => {
        setIsRegisteredError(true);
      });
  };

  //логин
  const handleLogin = (email,password) => {
    authorize(email, password)
      .then((data) => {
        if (data) {
        history.push("/");
        setIsLoggedIn(true);
        }
      })
      .catch(err=>{
        setIsLoginError(true);
        console.log(err);
      });
  };

  // логаут
  const handleSignOut = () => {
    logout().then(() => {
      {
        history.push('/');
        setIsLoggedIn(false);
      }
    })
      .catch((err) => {
      console.log(err);
    })
  };

  // изменить данные пользователя
  const changeProfileInfo = (name, email) => {
    setInfo(name, email)
      .then((info) => {
      setCurrentUser(info);
      setIsEditSuccess(true);
        setIsEditError(false);
        setTimeout(function removeSuccessMessage(){
          setIsEditSuccess(false);
        }, 5000);
    })
      .catch((err) => {
        console.log(err);
        setIsEditError(true);
      })
  }

  // получение всех фильмов с moviesApi
  const getAllMovies = () => {
    getMovies()
      .then((moviesData) => {
        setMovies(moviesData);

      })
      .catch((err) => {
        console.log(err);
      })
  };

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

          <ProtectedRoute path = "/profile"
                          component={Profile}
                          handleSignOut = {handleSignOut}
                          changeProfileInfo = {changeProfileInfo}
                          isEditSuccess = {isEditSuccess}
                          isEditError = {isEditError}
                          isLoggedIn={isLoggedIn}/>
          <ProtectedRoute path = "/movies" component={Movies}
                          isLoggedIn={isLoggedIn}
                          movies = {movies}
                          isLoading = {isLoading}/>
          <ProtectedRoute path = "/saved-movies" component={SavedMovies}
                          isLoggedIn={isLoggedIn}/>

          <Route path="*">
            <PageNotFound history={history}/>
          </Route>
        </Switch>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
