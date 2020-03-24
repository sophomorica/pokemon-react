import React, { Component } from 'react'
import Pokecard from './Pokecard'
import pokemon from '../data/pokemon.js'
import Error from './Error'
import {Container , Row} from 'react-bootstrap'

class Pokecards extends Component {

  constructor(props){
    super(props)
    this.state={
      pokecards: [...pokemon],
      error: false,
    }
  }
  renderItems(){
    if(!this.state.error){
      return this.state.pokecards.map((p)=>(
        <Pokecard key={p.url} singleMon={p} />
      ))
    } else{
      return <Error />
    }
  }

  render(){
    return(
      <Container>
        <Row>
          {this.renderItems()}
        </Row>
      </Container>
    )
  }

}

export default Pokecards