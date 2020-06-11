//component imports
import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Search from "./components/Search";


function App() {
  return (
    <Router>
      <div>
        <Nav />
          <Switch>
            {/* our application routes, two pages, default is home, the other is the search google books api page */}
            <Route exact path = "/" component = {Home} />
            <Route exact path = "/home" component = {Home} />
            <Route exact path = "/search" component = {Search} />
          </Switch>
        
      </div>
    </Router>
  );
}

export default App;
