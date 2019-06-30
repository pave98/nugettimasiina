import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
export default class Riddles extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1,
      answer1: '',
      answer2: '',
      answer3: '',
      answer4: '',
      answer5: '',
      answer6: '',
      answer7: '',
      answer8: '',
      isEnabled: false,
      checkable: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.setKaikki = this.setKaikki.bind(this)
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value })
  }

  setKaikki(checkable) {
    this.setState({ checkable })
  }

  handleSubmit(event, answer) {
    if (this.state.page === 1) {
      this.setState({ isEnabled: this.state.answer1.toLowerCase() === 'mountain' })
    } else if (this.state.page === 2) {
      this.setState({ isEnabled: this.state.answer2.toLowerCase() === 'teeth' })
    } else if (this.state.page === 3) {
      this.setState({ isEnabled: this.state.answer3.toLowerCase() === 'wind' })
    } else if (this.state.page === 4) {
      this.setState({ isEnabled: this.state.answer4.toLowerCase() === 'the sun' })
    } else if (this.state.page === 5) {
      this.setState({ isEnabled: this.state.answer5.toLowerCase() === 'dark' })
    } else if (this.state.page === 6) {
      this.setState({ isEnabled: this.state.answer6.toLowerCase() === 'an egg' })
    } else if (this.state.page === 7) {
      this.setState({ isEnabled: this.state.answer7.toLowerCase() === 'fish' })
    } else if (this.state.page === 8) {
      this.setState({ isEnabled: this.state.answer8.toLowerCase() === 'time' })
    }

    event.preventDefault()
  }

  render() {
    let block
    let checkable

    if (this.state.page === 1) {
      this.checkable = this.state.answer1
      console.log('32423423')
    } else if (this.state.page === 2) {
      this.checkable = this.state.answer2
    } else if (this.state.page === 3) {
      this.checkable = this.state.answer3
    } else if (this.state.page === 4) {
      this.checkable = this.state.answer4
    } else if (this.state.page === 5) {
      this.checkable = this.state.answer5
    } else if (this.state.page === 6) {
      this.checkable = this.state.answer6
    } else if (this.state.page === 7) {
      this.checkable = this.state.answer7
    } else if (this.state.page === 8) {
      this.checkable = this.state.answer8
    }

    this.setKaikki(checkable)

    switch (this.state.page) {
      case 1:
        block = (
          <div>
            <Card.Title>Riddle n. 1</Card.Title>
            <Card.Text className="textContainer">
              What has roots as nobody sees,<br /> Is taller than trees,<br /> Up, up it goes,<br /> And yet never
              grows?
            </Card.Text>
            <Form className="formContainer">
              <Form.Group controlId="answer1">
                <Form.Label>Answer</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter Your Answer"
                  value={this.state.answer1}
                  onChange={this.handleChange}
                />
              </Form.Group>

              <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                Submit
              </Button>
            </Form>
          </div>
        )
        break
      case 2:
        block = (
          <div>
            <Card.Title>Riddle n. 2</Card.Title>
            <Card.Text className="textContainer">
              Thirty white horses on a red hill,<br /> First they champ,<br /> Then they stamp,<br /> Then they stand
              still.
            </Card.Text>
            <Form className="formContainer">
              <Form.Group controlId="answer2">
                <Form.Label>Answer</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Answer" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        )
        break
      case 3:
        block = (
          <div>
            <Card.Title>Riddle n. 3</Card.Title>
            <Card.Text className="textContainer">
              Voiceless it cries,<br /> Wingless flutters,<br /> Toothless bites,<br /> Mouthless mutters.
            </Card.Text>
            <Form className="formContainer">
              <Form.Group controlId="answer3">
                <Form.Label>Answer</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Answer" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        )
        break
      case 4:
        block = (
          <div>
            <Card.Title>Riddle n. 4</Card.Title>
            <Card.Text className="textContainer">
              An eye in a blue face<br /> Saw an eye in a green face.<br /> "That eye is like to this eye"<br /> Said
              the first eye,<br /> "But in low place,<br /> Not in high place."
            </Card.Text>
            <Form className="formContainer">
              <Form.Group controlId="answer4">
                <Form.Label>Answer</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Answer" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        )
        break
      case 5:
        block = (
          <div>
            <Card.Title>Riddle n. 5</Card.Title>
            <Card.Text className="textContainer">
              It cannot be seen, cannot be felt,<br /> Cannot be heard, cannot be smelt.<br /> It lies behind stars and
              under hills,<br />
              And empty holes it fills.<br /> It comes first and follows after,<br /> Ends life, kills laughter.
            </Card.Text>
            <Form className="formContainer">
              <Form.Group controlId="answer5">
                <Form.Label>Answer</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Answer" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        )
        break
      case 6:
        block = (
          <div>
            <Card.Title>Riddle n. 6</Card.Title>
            <Card.Text className="textContainer">
              A box without hinges, key, or lid,<br /> Yet golden treasure inside is hid.
            </Card.Text>
            <Form className="formContainer">
              <Form.Group controlId="answer6">
                <Form.Label>Answer</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Answer" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        )
        break
      case 7:
        block = (
          <div>
            <Card.Title>Riddle n. 7</Card.Title>
            <Card.Text className="textContainer">
              Alive without breath,<br /> As cold as death;<br /> Never thirsty, ever drinking,<br /> All in mail never
              clinking.
            </Card.Text>
            <Form className="formContainer">
              <Form.Group controlId="answer7">
                <Form.Label>Answer</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Answer" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        )
        break
      case 8:
        block = (
          <div>
            <Card.Title>Riddle n. 8</Card.Title>
            <Card.Text className="textContainer">
              This thing all things devours: <br />Birds, beasts, trees, flowers; <br />Gnaws iron, bites steel;<br />{' '}
              Grinds hard stones to meal;<br /> Slays king, ruins town,<br /> And beats high mountain down.
            </Card.Text>
            <Form className="formContainer">
              <Form.Group controlId="answer8">
                <Form.Label>Answer</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Answer" />
              </Form.Group>

              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </div>
        )
        break
      default:
        block = <Card.Title>Something Broke!</Card.Title>
    }
    return (
      <Card className="Card" style={{}}>
        <Card.Body>
          {block}
          <Button
            variant="primary"
            onClick={() => {
              if (this.state.page > 1) {
                this.setState({ page: this.state.page - 1 })
              }
            }}
          >
            Edellinen
          </Button>
          <Button
            variant="primary"
            onClick={() => {
              if (this.state.page < 8) {
                this.setState({ page: this.state.page + 1 })
              }
              this.setState({ isEnabled: false })
            }}
            disabled={!this.state.isEnabled}
          >
            Seuraava
          </Button>
        </Card.Body>
      </Card>
    )
  }
}
