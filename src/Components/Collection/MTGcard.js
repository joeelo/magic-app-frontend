import React, { Component } from 'react';

class MTGcard extends Component {
    render() {

        const { card } = this.props
        console.log(card.imageUrl)
        return (
            <div className="magic-card">
                {card.name}    
                <img alt="" src={card.imageUrl}/>
            </div>
        );
    }
}

export default MTGcard;