import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./views/home";
import "../src/scss/app.scss";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/galery">
            <Home/>
          </Route>
          <Route exact path="/characters">
            <Home/>
          </Route>
          <Route exact path="/planets">
            <Home/>
          </Route>
          <Route exact path="/characters/:ch_id">
            <Home/>
          </Route>
          <Route exact path="/characters/:pl_id">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
