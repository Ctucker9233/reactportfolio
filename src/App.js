import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Nav from "./components/Nav/index"
import About from "./pages/About"
import Portfolio from "./pages/Portfolio"
import Resume from "./pages/Resume"


function App() {
  return (
    <Router>
      <div className="wrapper">
        <Nav />
        <Switch>
          <Route exact path ={["/", "/about"]}>
            <About />
          </Route>
          <Route exact path ={"/portfolio"}>
            <Portfolio />
          </Route>
          <Route exact path ={"/resume"}>
            <Resume />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
