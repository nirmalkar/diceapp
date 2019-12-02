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
      die2: 'one',
      isRolling: false
    }
    this.roll = this.roll.bind(this)
  }
  roll() {
    const forDieOne = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
    const forDieTwo = this.props.sides[Math.floor(Math.random() * this.props.sides.length)]
    this.setState({ die1: forDieOne, die2: forDieTwo, isRolling: true })

    // wait one second, then set rolling to false
    setTimeout(() => {
      this.setState({ isRolling: false })
    }, 1000)
  }

  render() {
    return (
      <div className='roll-dice'>
        <div className='roll-dice-container'>
          <Dice face={this.state.die1} />&nbsp;&nbsp;&nbsp;&nbsp;
          <Dice face={this.state.die2} />
        </div>
        <button onClick={this.roll} className='btn btn-dark btn-lg mt-3'>
          {this.state.isRolling ? 'Rolling...' : 'Roll Dice'}
        </button>
      </div>
    )
  }
}
