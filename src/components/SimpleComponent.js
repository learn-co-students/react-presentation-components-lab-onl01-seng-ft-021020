// Code SimpleComponent Here

import React, { Component } from 'react'

export default class SimpleComponent extends Component {

    constructor(props) {
        super(props)

        this.state = {
            mood: "happy"
        }
    }

    handleClick = () => {
        if (this.state.mood === "happy") {
            this.setState({mood: 'sad'})
        } else {
            this.setState({mood: 'happy'})
        }
        // const newMood = this.state.mood === 'happy' ? 'sad' : 'happy';
        // this.setState({ mood: newMood });
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                {this.state.mood}
            </div>
        )
    }
}
