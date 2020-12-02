import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./index.css";
import Navbar from "./Navbar.jsx";
import { Switch, Route, Redirect } from "react-router-dom";
import Home from "./Home.jsx";
import Quotes from "./Quotes.jsx";
import Contact from "./Contact.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/Quotes" component={Quotes}></Route>
        <Route exact path="/contact" component={Contact}></Route>
        <Redirect to="/" />
      </Switch>
    </>
  );
}

export default App;
