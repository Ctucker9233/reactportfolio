import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Nav from "./components/Nav/index"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path ={["/", "/about"]}>
            <About />
          </Route>
          <Route exact path ={"/portfolio"}>
            <Portfolio />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
