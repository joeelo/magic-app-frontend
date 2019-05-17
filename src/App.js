import React, { Component } from 'react';
import { Route, BrowserRouter as Router} from "react-router-dom"; 
import './App.css';
import Nav from "./Components/Nav/Nav";
import UserProfile from "./Components/UserProfile/UserLayout";
import CardContainer from "./Components/Collection/cardContainer"
import CompetitiveScreen from "./Components/Competitive/CompetitiveScreen"
import SignUpForm from "./Components/Forms/SignUpForm"

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
          
          <Route exact path="/user" render={(props) => (<UserProfile {...props} props={props}/>) }/>
          <Route path="/collection" render={(props) => (<CardContainer props={props} />)} />
          <Route path="/competitivegame" render={(props) => (<CompetitiveScreen props={props} />) }/>
          <Route exact path="/sign-up" render={(props) => (<SignUpForm props={props} />) } />

        </div>
      </Router>
      
    );
  }
}

export default App;
