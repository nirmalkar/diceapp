import React, { Component } from 'react'
import Dice from './Dice'

export default class DiceRoll extends Component {
  static defaultProps = {
    sides: ['one', 'two', 'three', 'four', 'five', 'six']
  }
  constructor(props) {
    super(props)

    this.state = {
      die1: 'one',
      die2: 'one'
    }
    this.roll = this.roll.bind(this)
  }
  roll() {
    const forDieOne = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
    const forDieTwo = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
    this.setState({ die1: forDieOne, die2: forDieTwo })
  }

  render() {
    return (
      <div>
        <Dice face={this.state.die1} />
        <Dice face={this.state.die2} />
        <button onClick={this.roll} className='btn btn-light'>Roll Dice!</button>
      </div>
    )
  }
}
