import React from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import './App.css';
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";
import Profile from "../Profile/Profile";

function App() {
  const history = useHistory();

  // получение данных с API и утановка их в стейт переменные
  let name = 'Виталий';
  let email = 'pochta@yandex.ru';

  // функция необходима для перемещения пользователя на главный экран при логауте
  const handleSignOut = () => {
      history.push('/');
    }

  return (
    <div className="page">
      <Switch>
        <Route exact path = "/">
          <Main/>
        </Route>
        <Route path = "/signup">
          <Register/>
        </Route>
        <Route path = "/signin">
          <Login/>
        </Route>
        <Route path = "/profile">
          <Profile name = {name}
                   email = {email}
                   handleSignOut = { handleSignOut }/>
        </Route>
        <Route path="*">
          <PageNotFound history={history}/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
