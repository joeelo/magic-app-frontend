import React, { Component } from 'react'
import MTGcard from "./MTGcard"

class cardContainer extends Component {

  state = {
    formValue: "",
  }

  componentDidMount() {

  }

  foundCards = (objects) => {
    const cards = objects.forEach(obj => console.log(obj.name))
    return cards;
  }


  formHandler = async (event) => {
    event.preventDefault();
    let url = `http://localhost:3000/collection/?name=${this.state.formValue}`
    console.log(url);
    try {
      const response = await fetch(url) 
      const json = await response.json();
      this.foundCards(json);
    } catch (error) {
      console.log(error);
    }
  }

  changeHandler = (event) => {
    this.setState({
      formValue: event.target.value
    })
  }

  render() {
    return (
      <div>
        <p>  "i'm connected!" </p>
        <p> { this.state.formValue }</p>
        <form onSubmit={this.formHandler}> 

          <label>Card Name</label>
          <input 
            type="text" 
            // value={this.state.formValue}
            onChange={this.changeHandler}
          />
          <button>Submit</button>

        </form>
        <MTGcard/>
    </div>
    )
  }
}

export default cardContainer