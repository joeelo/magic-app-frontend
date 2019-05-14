import React, { Component } from 'react'
import MTGcard from "./MTGcard"

class cardContainer extends Component {

  state = {
    formValue: "",
    searchIndex: false,
    cards: [] 
  }

  foundCards = (cards) => {
    return this.state.cards.filter(card => !!card.imageUrl).map((card, index) => <MTGcard key={index} card={card} />)
  }
  
  formHandler = async (event) => {
    event.preventDefault();
    this.setState({searchIndex: this.state.searchIndex + 1 });
    let url = `http://localhost:3000/collection/?name=${this.state.formValue}`
    console.log(url);
    try {
      const response = await fetch(url) 
      const json = await response.json();
      await this.setState({cards: json});
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
        <p> { this.state.formValue }</p>
        <form onSubmit={this.formHandler}> 
          <label>Card Name</label>
          <input 
            type="text" 
            value={this.state.formValue}
            onChange={this.changeHandler}
          />
          <button>Submit</button>
        </form>
        <div className="card-grid"> 
          {this.state.searchIndex > 0 ? this.foundCards(this.state.cards) : null}
        </div>
    </div>
    )
  }
}

export default cardContainer