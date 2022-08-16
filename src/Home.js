import React, { Component } from 'react'

export default class Home extends Component {

  render() {
    return (
      <>
        <h1 className='hi'>Hello</h1>
            <ul>
            <li>Hola</li>
            <li>Aloha</li>
            <li>Bonjour</li>
            <li>{this.props.ageXYZ}</li>
        </ul>
    </>
    )
  }
}
