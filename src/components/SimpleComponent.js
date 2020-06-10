import React, {Component} from 'react'

class SimpleComponent extends Component {
  constructor() {
    super()
    this.state = {
      mood: 'happy'
    }
  }

  handleClick = () => {
    this.setState(prevState => {
      return {
        mood: (this.state.mood === 'happy' ? 'sad' : 'happy')
      }
    }, console.log(this.state))
  }
  render() {
    return(
      <div onClick={this.handleClick}><p>{this.state.mood}</p></div>
    )
  }
  
}

export default SimpleComponent
