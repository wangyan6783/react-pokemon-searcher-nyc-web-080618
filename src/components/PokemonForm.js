import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  render() {
    let {name, hp, frontUrl, backUrl} = this.state;
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={event => {
            this.props.handleSubmit(event, this.state);
            this.setState({
              name: '',
              hp: '',
              frontUrl: '',
              backUrl: ''
            })
          }}>
          <Form.Group widths="equal">
            <Form.Input value={name} onChange={this.handleInput} fluid label="Name" placeholder="Name" name="name" />
            <Form.Input value={hp} onChange={this.handleInput} fluid label="hp" placeholder="hp" name="hp" />
            <Form.Input value={frontUrl} onChange={this.handleInput} fluid label="Front Image URL" placeholder="url" name="frontUrl" />
            <Form.Input value={backUrl} onChange={this.handleInput} fluid label="Back Image URL" placeholder="url" name="backUrl" />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
