import React, { Component } from 'react';
import Scale from "./Scale"

class CompetitiveScreen extends Component {
    state = {
        players: [{name: "cesar", id: 1}, {name: "whill", id: 2}, {name: "nick", id: 3}]
    }

    renderScales = () => {
        const scales = this.state.players.map(player => {
            return <Scale key={player.id} player={player}/>
        })
        return scales
    }
    render() {
        return (
            <div className="scale-grid">
                {this.renderScales()}
            </div>
        );
    }
}

export default CompetitiveScreen;