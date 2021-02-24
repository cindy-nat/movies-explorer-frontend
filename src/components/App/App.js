import React from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
import Main from "../Main/Main";
import Register from "../Register/Register";

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
      </Switch>
    </div>
  );
}

export default App;
