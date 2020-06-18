import React, {Component} from 'react';

class SimpleComponent extends Component {

 
    // Initial state here...
    state = {
        mood: 'happy'
    }

  handleClick = () => {
    // Probably do some work to update the state
    this.setState ({
      mood: 'sad'
    })
  }
 
  render() {
    return (
      <div 
        onClick={this.handleClick}>{this.state.mood}
      </div>
    )
  }
}

export default SimpleComponent;
