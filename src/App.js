import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Navbar from "./shared/Navbar";
import Footer from "./shared/Footer";

import Homepage from "./pages/Homepage";
import Statuspage from "./pages/Statuspage";

const App = () => (
  <Router>
    <Navbar />
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route path="/status">
        <Statuspage />
      </Route>
    </Switch>
    <Footer />
  </Router>
);

export default App;
