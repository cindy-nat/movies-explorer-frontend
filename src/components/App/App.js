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
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";


function App() {
  const history = useHistory();
  const [isRegisteredError, setIsRegisteredError] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isLoginError, setIsLoginError] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({});

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

  //проверка зарегестирован ли пользователь
  const isLoggedInCheck = () => {
    getInfo()
      .then(data=>{
        if(data) {
          setCurrentUser(data);
          console.log(currentUser);
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
  },[isLoggedIn]);

  // логаут
  const handleSignOut = () => {
    logout().then(() => {
      {
        history.push('/');
        setIsLoggedIn(false);
      }
    })
      .catch(err=>{
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
                          isLoggedIn={isLoggedIn}/>
          <ProtectedRoute path = "/movies" component={Movies}
                          isLoggedIn={isLoggedIn}/>
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
