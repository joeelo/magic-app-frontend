import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router} from "react-router-dom"; 
import './App.css';
import Nav from "./Components/Nav/Nav";
import UserProfile from "./Components/UserProfile/UserLayout";
import CardContainer from "./Components/Collection/cardContainer"

class App extends Component {



  render() {
    return (
      <Router>
        <div className="App">

          <Nav/>
          
          <Route exact path="/user" render={(props) => (<UserProfile {...props} props={props}/>) }/>
          <Route exact path="/collection" render={(props) => (<CardContainer props={props} />)} />

        </div>
      </Router>
      
    );
  }
}

export default App;
