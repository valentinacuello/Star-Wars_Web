import React from "react";
import NavBar from "./components/NavBar";
import Home from "./views/home";
import "../src/scss/app.scss";

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Home/>
    </div>
  );
}

export default App;
