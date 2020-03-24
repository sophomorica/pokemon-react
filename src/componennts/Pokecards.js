import React, { Component } from 'react'
import Pokecard from './Pokecard'
import pokemon from '../data/pokemon.js'
import {Container} from 'react-bootstrap'

class Pokecards extends Component {

  constructor(props){
    super(props)
    this.state={
      pokecards: [...pokemon],
      
    }
  }

  render(){
    return(
      <Container>

      {this.state.pokecards.map(p=>{
        
         <Pokecard singlMon={p}/>
      })}
      </Container>
    )
  }

}

export default Pokecards