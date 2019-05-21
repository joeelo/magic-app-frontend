import React, { Component } from 'react';
import Scale from "./Scale"

class CompetitiveScreen extends Component {

    state = {
        players: [{name: "cesar", id: 1},{name: "cesar", id: 2}], 
        addPlayerScreen: false
    }

    renderScales = () => {
        const scales = this.state.players.map(player => {
            return <Scale key={player.id} player={player}/>
        })
        return scales
    }

    render() {
        return (
            <div> 
                <div className="scale-grid">
                    {this.renderScales()}
                </div>
            </div>
        );
    }
}

export default CompetitiveScreen;