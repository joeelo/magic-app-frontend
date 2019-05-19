import React, { Component } from 'react';
// import { Link } from "react-router-dom"

class MTGcard extends Component {

    render() {
        const { card } = this.props
        const href = `https://gatherer.wizards.com/pages/card/Details.aspx?multiverseid=${card.multiverseid}`;
        // console.log(card.multiverseid)
        return (

            <div className="magic-card">   
                    <img alt={card.name} src={card.imageUrl}/><br/>
                    <a href={href} target="_blank" rel="noopener noreferrer"> Rulings </a>
                    <button> own </button>
            </div>
        );
    }
}

export default MTGcard;