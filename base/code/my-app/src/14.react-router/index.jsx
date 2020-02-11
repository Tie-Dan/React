import React, { Component, Fragment } from "react";
import Home from "./Home";
import Detil from "./Detil";
// import { BrowserRouter as Router, Route } from "react-router-dom";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./component/Nav";
import User from "./User";
import H404 from "./404";
class App extends Component {
  render() {
    return (
      <Fragment>
        <Router>
          <Nav />
          <Switch>
            <Route exact path="/home" component={Home}></Route>
            <Route path="/home/user/:id?" component={User}></Route>
            <Route path="/detail" component={Detil}></Route>
            <Route component={H404}></Route>
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
