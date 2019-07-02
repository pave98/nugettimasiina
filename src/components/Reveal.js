import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

export default class Reveal extends Component {
  render() {
    return (
      <Card className='CardReveal' style={{}}>
        <Card.Body>
          In mommy’s belly I will grow
          <br />Tiny fingers and tiny toes
          <br />Some don’t know what my gender will be
          <br />Although you might already see!
          <br />Guess if I’m a girl or boy
          <br />I’m sure either way you will jump for joy!
          <br />Read this riddle with great care
          <br />Look really close and we will share!
        </Card.Body>
      </Card>
    )
  }
}
