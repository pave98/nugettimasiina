import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
export default class Riddles extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: 1
    }
  }

  render() {
    let block

    switch (this.state.page) {
      case 1:
        block = (
          <div>
            <Card.Title>Riddle n. 1</Card.Title>
            <Card.Text>
              What has roots as nobody sees,<br /> Is taller than trees,<br /> Up, up it goes,<br /> And yet never
              grows?
            </Card.Text>
            <Form style={{ border: 'solid 1px #0069D9', borderRadius: '.25rem', margin: 5 }}>
              <Form.Group controlId="Answer">
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
      case 2:
        block = (
          <div>
            <Card.Title>Riddle n. 2</Card.Title>
            <Card.Text>
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
            <Card.Text>
              Voiceless it cries,<br /> Wingless flutters,<br /> Toothless bites,<br /> Mouthless mutters.
            </Card.Text>
          </div>
        )
        break
      case 4:
        block = (
          <div>
            <Card.Title>Riddle n. 4</Card.Title>
            <Card.Text>
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
            <Card.Text>
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
            <Card.Text>
              A box without hinges, key, or lid,<br /> Yet golden treasure inside is hid.
            </Card.Text>
          </div>
        )
        break
      case 7:
        block = (
          <div>
            <Card.Title>Riddle n. 7</Card.Title>
            <Card.Text>
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
            <Card.Text>
              This thing all things devours: <br />Birds, beasts, trees, flowers; <br />Gnaws iron, bites steel;<br />{' '}
              Grinds hard stones to meal;<br /> Slays king, ruins town,<br /> And beats high mountain down.
            </Card.Text>
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
            }}
          >
            Seuraava
          </Button>
        </Card.Body>
      </Card>
    )
  }
}
