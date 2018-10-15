import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import { Search } from 'semantic-ui-react'
import _ from 'lodash'

class PokemonPage extends React.Component {

  state = {
    allPoke: [],
    inputValue: "",
    searchedPoke: []
  }

  componentDidMount(){
    fetch("http://localhost:3000/pokemon")
    .then(r => r.json())
    .then(data => this.setState({
      allPoke: data
    }))
    
    // fetch("http://localhost:3000/pokemon/207", {
    //   method:"DELETE"
    // })
  }

  handleSearch = (inputValue) => {
    this.setState({
      inputValue: inputValue,
      searchedPoke: this.state.allPoke.filter(poke => poke.name.includes(inputValue))
    })
  }

  handleSubmit = (event, newPokeObj) => {
    event.preventDefault();
    const newPoke = {
      name: newPokeObj.name,
      stats: [{
        "value": newPokeObj.hp,
        "name": "hp"
      }],
      sprites: {
        front: newPokeObj.frontUrl,
        back: newPokeObj.backUrl
      }
    }
    this.setState({
      allPoke: [...this.state.allPoke, newPoke]
    })
    fetch("http://localhost:3000/pokemon", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(
        newPoke
      )
    })
    .then(r => r.json())
    .then(data => console.log(data))
  }


  render() {
    return (
      <div>
        <h1>Pokemon Searcher</h1>
        <br />
        <Search value={this.state.inputValue} onSearchChange={event => this.handleSearch(event.target.value)} showNoResults={false} />
        <br />
        <PokemonCollection pokeArr={this.state.inputValue ? this.state.searchedPoke : this.state.allPoke}/>
        <br />
        <PokemonForm handleSubmit={this.handleSubmit} />
      </div>
    )
  }
}

export default PokemonPage
