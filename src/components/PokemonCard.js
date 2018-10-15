import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    flipped: false
  }

  handleFlip = () => {
    this.setState({flipped: !this.state.flipped})
  }

  render() {
    const {name, stats, sprites} = this.props.poke

    return (
      <Card onClick={this.handleFlip}>
        <div>
          <div className="image">
            <img src={this.state.flipped ? sprites.back : sprites.front} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              hp {stats.find(item => item.name === "hp").value}
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
