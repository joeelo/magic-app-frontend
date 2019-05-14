import React, { Component } from 'react';
import MoodStatement from './MoodStatement';
import ColoredDiv from "./ColoredDiv"

class Scale extends Component {

    state = {
        mood: 1,
        background: [""]
    }

    removeFromScale = () => {
        if (this.state.mood > 0) {
            this.setState({
                mood: this.state.mood - 1 
            })
        }
    }

    addToScale = () => {
        if (this.state.mood < 10 ) {
            this.setState({
                mood: this.state.mood + 1
            })
        }
    }

    backgroundClass = () => {
        switch(this.state.mood) {
            case 1 || 2 || 3 : this.setState({background: "light-blue-gradient"}) 
                break;
            case 4 || 5 || 6 : this.setState({background: "dark-blue-gradient"})
                break; 
            case 7 || 8 || 9 : this.setState({background: "dark-red-gradient"});
                break; 
            default: 
                return null;
        }
    }

    render() {
        console.log(<ColoredDiv />)
        const { player } = this.props
        return (

            
        <div className="scale ">
            <p>{player.name} </p>
            <div className="will-buttons"> 
                <button onClick={this.removeFromScale}> Will </button>
                    <MoodStatement mood={this.state.mood}/>

                <button onClick={this.addToScale}> Whill </button>
            </div> 
        </div>
            
            
            
        );
    }
}

export default Scale;