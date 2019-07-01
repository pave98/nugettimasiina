import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'

export default class Reveal extends Component {
  render() {
    return (
      <Card className="CardReveal" style={{  }}>
        <Card.Body>
          In mommy’s belly I will grow
          <br />Tiny fingers and tiny toes
          <br />Some don’t know what my gender will be
          <br />Although you might already see!
          <br />Guess if I’m a girl or boy
          <br />I’m sure either way you will jump for joy!
          <br />Read this riddle with great care
          <br />Look really close and we will share!
          <br />
          ----------------------------------------
          <br />
          In the belly I will grow
          <br />Tiny hands and tiny toes
          <br />Secret will my gender be
          <br />Although you might already see
          <br />Between the lines the truth does lay
          <br />On the surface confused you’ll stay
          <br />You might be happy either way!
        </Card.Body>
      </Card>
    )
  }
}
