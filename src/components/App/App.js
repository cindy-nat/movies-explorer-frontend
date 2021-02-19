import React from "react";
import { Route, Switch } from "react-router-dom";
import './App.css';
import Main from "../Main/Main";
// import Header from "../Header/Header";

function App() {
  return (

<Switch>
  <Route exact path = "/">
    <Main/>
  </Route>
  <div className="page">
    {/*<Header/>*/}
  </div>
</Switch>

  );
}

export default App;
