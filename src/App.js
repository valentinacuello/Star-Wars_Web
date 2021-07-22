import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./views/Home";
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
          <Route exact path="/galeria">
            <Home/>
          </Route>
          <Route exact path="/personajes">
            <Home/>
          </Route>
          <Route exact path="/planetas">
            <Home/>
          </Route>
          <Route exact path="/personajes/:ch_id">
            <Home/>
          </Route>
          <Route exact path="/planetas/:pl_id">
            <Home/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
