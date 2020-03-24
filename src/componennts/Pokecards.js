import React, { Component } from 'react'
import Pokecard from './Pokecard'
import pokemon from '../data/pokemon.js'
import Error from './Error'
import {Container, Row} from 'react-bootstrap'
import axios from 'axios'

class Pokecards extends Component {

  constructor(props){
    super(props)
    this.state={
      pokecards: [],
      error: false,
    }
  }
  handleClick(){
    console.log("you did it")
  }
  componentDidMount() {
    pokemon.forEach(p =>{
      axios.get(p.url)
      .then((res)=>{
        console.log(res.data)
      })
      .catch((error) =>{
        this.setState({
          error:true,
        })
      })
    })
  }
  renderItems(){
    if(!this.state.error){
      return this.state.pokecards.map((p)=>(
        <Pokecard key={p.url} singleMon={p}  />
      ))
    } else{
      return <Error />
    }
  }

  render(){
    return(
      <Container >
        <Row>

          {/* {this.renderItems()} */}
               {/* {console.log(pokecards)} */}
        </Row>
      </Container>
    )
  }

}

export default Pokecards