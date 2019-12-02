import React, { Component } from 'react'
import Dice from './Dice'
import './RollDice.css'

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
      <div className='roll-dice'>
        <div className='roll-dice-container'>
          <Dice face={this.state.die1} />&nbsp;&nbsp;
          <Dice face={this.state.die2} />
        </div>
        <button onClick={this.roll} className='btn btn-dark'>Roll Dice!</button>
      </div>
    )
  }
}
