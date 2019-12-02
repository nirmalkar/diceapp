import React, { Component } from 'react'
import './Dice.css'

export default class Dice extends Component {
  render() {
    let cls = `dice fas fa-dice-${this.props.face}`
    return (
      <div>
        <i className={cls}></i>
      </div>
    )
  }
}
