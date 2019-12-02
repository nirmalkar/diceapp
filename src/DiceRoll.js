import React, { Component } from 'react'
import Dice from './Dice'

export default class DiceRoll extends Component {
  static defaultProps = {
    // sides=['one', 'two', 'three', 'four', 'five', 'six']
  }
  constructor(props) {
    super(props)

    this.state = {
      die1: 'one',
      die2: 'one'
    }
  }

  render() {
    return (
      <div>
        <Dice face={this.state.die1} />
        <Dice face={this.state.die2} />
        <button>Roll Dice!</button>
      </div>
    )
  }
}
