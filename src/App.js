import React, { Component } from 'react';
import { Route, Link, BrowserRouter as Router} from "react-router-dom"; 
import './App.css';
import Nav from "./Components/Nav/Nav";
import UserProfile from "./Components/UserProfile/UserLayout";
import CardContainer from "./Components/Collection/cardContainer"

class App extends Component {

  state = {
    visible: false
  }

  changeVisible = () => {
    alert("connected");
  }

  render() {
    return (
      <Router>
        <div className="App">

          <Nav/>
          
          <Route exact path="/user" render={(props) => (<UserProfile {...props} />) }/>
          <Route exact path="/collection" render={(props) => (<CardContainer props={this.state} changeVisible={this.changeVisible} />)} />

        </div>
      </Router>
      
    );
  }
}

export default App;
