import React, { Component } from 'react'
import { Link } from "react-router-dom"; 

export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
          <Link to="/"><button> Home </button></Link>
          <Link to="/collection"> <button> Search </button> </Link>
          <Link to="/competitivegame"> <button> Compete </button> </Link>
          <Link to="/sign-up"> <button> Sign In </button> </Link>
          
        </nav>
      </div>
    )
  }
}
