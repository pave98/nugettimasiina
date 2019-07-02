import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import { withRouter } from 'react-router-dom'

class Riddles extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page       : 1,
      answer     : '',
      realAnswer : 'mountain',
      isEnabled  : false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.changeAnswer = this.changeAnswer.bind(this)
    this.routeChange = this.routeChange.bind(this)
  }

  componentDidUpdate() {}

  handleChange(e) {
    this.setState({ answer: e.target.value })
  }

  routeChange() {
    let path = `/RevealReal`
    this.props.history.push(path)
  }

  handleSubmit(event) {
    event.preventDefault()
    let x = String(this.state.answer.toLowerCase())
    let y = String(this.state.realAnswer.toLowerCase())

    setTimeout(() => {
      if (x.includes(y)) {
        alert('Oikein')
        this.setState({ isEnabled: true })
      } else {
        alert('Väärin')
      }
      this.setState({ answer: '' })
    }, 1000)
  }

  changeAnswer() {
    if (this.state.page === 1) {
      this.setState({ realAnswer: 'mountain' })
    } else if (this.state.page === 2) {
      this.setState({ realAnswer: 'teeth' })
    } else if (this.state.page === 3) {
      this.setState({ realAnswer: 'wind' })
    } else if (this.state.page === 4) {
      this.setState({ realAnswer: 'sun' })
    } else if (this.state.page === 5) {
      this.setState({ realAnswer: 'dark' })
    } else if (this.state.page === 6) {
      this.setState({ realAnswer: 'egg' })
    } else if (this.state.page === 7) {
      this.setState({ realAnswer: 'fish' })
    } else if (this.state.page === 8) {
      this.setState({ realAnswer: 'time' })
    } else if (this.state.page === 9) {
      this.setState({ realAnswer: 'nugetti' })
    }
  }

  render() {
    let block

    switch (this.state.page) {
      case 1:
        block = (
          <div>
            <Card.Title>Riddle n. 1</Card.Title>
            <Card.Text className='textContainer'>
              What has roots as nobody sees,<br /> Is taller than trees,<br /> Up, up it goes,<br /> And yet never
              grows?
            </Card.Text>
          </div>
        )
        break
      case 2:
        block = (
          <div>
            <Card.Title>Riddle n. 2</Card.Title>
            <Card.Text className='textContainer'>
              Thirty white horses on a red hill,<br /> First they champ,<br /> Then they stamp,<br /> Then they stand
              still.
            </Card.Text>
          </div>
        )
        break
      case 3:
        block = (
          <div>
            <Card.Title>Riddle n. 3</Card.Title>
            <Card.Text className='textContainer'>
              Voiceless it cries,<br /> Wingless flutters,<br /> Toothless bites,<br /> Mouthless mutters.
            </Card.Text>
          </div>
        )
        break
      case 4:
        block = (
          <div>
            <Card.Title>Riddle n. 4</Card.Title>
            <Card.Text className='textContainer'>
              An eye in a blue face<br /> Saw an eye in a green face.<br /> "That eye is like to this eye"<br /> Said
              the first eye,<br /> "But in low place,<br /> Not in high place."
            </Card.Text>
          </div>
        )
        break
      case 5:
        block = (
          <div>
            <Card.Title>Riddle n. 5</Card.Title>
            <Card.Text className='textContainer'>
              It cannot be seen, cannot be felt,<br /> Cannot be heard, cannot be smelt.<br /> It lies behind stars and
              under hills,<br />
              And empty holes it fills.<br /> It comes first and follows after,<br /> Ends life, kills laughter.
            </Card.Text>
          </div>
        )
        break
      case 6:
        block = (
          <div>
            <Card.Title>Riddle n. 6</Card.Title>
            <Card.Text className='textContainer'>
              A box without hinges, key, or lid,<br /> Yet golden treasure inside is hid.
            </Card.Text>
          </div>
        )
        break
      case 7:
        block = (
          <div>
            <Card.Title>Riddle n. 7</Card.Title>
            <Card.Text className='textContainer'>
              Alive without breath,<br /> As cold as death;<br /> Never thirsty, ever drinking,<br /> All in mail never
              clinking.
            </Card.Text>
          </div>
        )
        break
      case 8:
        block = (
          <div>
            <Card.Title>Riddle n. 8</Card.Title>
            <Card.Text className='textContainer'>
              This thing all things devours: <br />Birds, beasts, trees, flowers; <br />Gnaws iron, bites steel;<br />{' '}
              Grinds hard stones to meal;<br /> Slays king, ruins town,<br /> And beats high mountain down.
            </Card.Text>
          </div>
        )
        break
      case 9:
        block = (
          <div>
            <Card.Title>Decode</Card.Title>
            <Card.Text className='textContainer'>
              01101110 01110101 01100111 01100101 01110100 01110100 01101001
            </Card.Text>
          </div>
        )
        break
      default:
        block = <Card.Title>Something Broke!</Card.Title>
    }
    return (
      <Card className='Card' style={{}}>
        <Card.Body>
          {block}
          <Form className='formContainer'>
            <Form.Group controlId='answer'>
              <Form.Label>Answer</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Your Answer'
                value={this.state.answer}
                onChange={this.handleChange}
              />
            </Form.Group>

            <Button variant='primary' type='submit' onClick={this.handleSubmit}>
              Submit
            </Button>
          </Form>
          <Button
            className='Buttons'
            variant='primary'
            onClick={() => {
              if (this.state.page > 1) {
                this.setState({ page: this.state.page - 1, isEnabled: false, answer: '' })
                setTimeout(() => {
                  this.changeAnswer()
                }, 100)
              }
            }}
          >
            Previous
          </Button>
          <Button
            className='Buttons'
            variant='primary'
            onClick={() => {
              if (this.state.page < 9) {
                this.setState({ page: this.state.page + 1, isEnabled: false, answer: '' })
                setTimeout(() => {
                  this.changeAnswer()
                }, 100)
              } else if (this.state.page === 9) {
                this.routeChange()
              }
            }}
            disabled={!this.state.isEnabled}
          >
            Next
          </Button>
        </Card.Body>
      </Card>
    )
  }
}

export default withRouter(Riddles)
