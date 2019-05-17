import React, { Component } from 'react';
import MoodStatement from './MoodStatement';

class Scale extends Component {

    state = {
        mood: 1,
        backgroundColor: "" 
    }

    componentDidUpdate(prevProps, prevState){
        if (prevState.mood !== this.state.mood) {
         this.backgroundClass();
        }
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
        if (this.state.mood === 1 || this.state.mood === 2 || this.state.mood === 3) {
            this.setState({
                backgroundColor: "light-blue-gradient"
            })
            return; 
        } else if (this.state.mood === 4 || this.state.mood === 5 || this.state.mood === 6) {
            this.setState({
                backgroundColor: "dark-blue-gradient"
            })     
            return;    
        } else if (this.state.mood === 7 || this.state.mood === 8 || this.state.mood === 9) {
            this.setState({
                backgroundColor: "dark-red-gradient"
            })
            return;
        }
    }

    render() {
        const { player } = this.props
        console.log(this.state.backgroundColor);
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