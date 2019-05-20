import React, { Component } from 'react';

class LibraryContainer extends Component {
    
    state = {
        library: []
    }

    componentDidMount() {
        this.fetchCollections();
    }

    fetchCollections = async () => {
        const url = `http://localhost:3000/user-collection`
        try {
            const response = await fetch(url);
            const json = await response.json()
            console.log(json);
            return
        } catch (error) {
            console.log(error);
        }
    }


    render() {
        return (
            <div>
                
            </div>
        );
    }
}

export default LibraryContainer;