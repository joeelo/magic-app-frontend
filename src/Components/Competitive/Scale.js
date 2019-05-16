import React, { Component } from 'react';
import MoodStatement from './MoodStatement';

class Scale extends Component {

    state = {
        mood: 1,
        backgroundColor: "light-blue-gradient" 
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
            case 1 || 2 || 3 : this.setState({backgroundColor: "light-blue-gradient"}) 
                break;
            case 4 || 5 || 6 : this.setState({backgroundColor: "dark-blue-gradient"})
                break; 
            case 7 || 8 || 9 : this.setState({backgroundColor: "dark-red-gradient"});
                break; 
            default: 
                return null;
        }
    }

    render() {
        const { player } = this.props
        return (

            
        <div className={`${this.state.backgroundColor} scale`}>
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