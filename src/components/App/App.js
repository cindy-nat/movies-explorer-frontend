import React from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import PageNotFound from "../PageNotFound/PageNotFound";

function App() {
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
        <Route path="*">
          <PageNotFound/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
