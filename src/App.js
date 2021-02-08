import React from "react";
import './App.css';
import {  BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Users from "./Users";
import User from "./User";

export default function App() {
  return (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" children={<Users />} />
        <Route path="/user/:id" children={<User />} />
      </Switch>
    </Router>
      
    </div>
    );
}
