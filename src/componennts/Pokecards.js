import React, { Component } from 'react'
import Pokecard from './Pokecard'
import pokemon from '../data/pokemon.js'
// import Error from './Error'
import {Container, Row} from 'react-bootstrap'
import axios from 'axios'

class Pokecards extends Component {

  constructor(props){
    super(props)
    this.state={
      allFetchedPokemon: [],
      error: false,
    }
  }

  

  // componentDidMount() {
    
  //   pokemon.forEach(p =>{
  //     axios.get(p.url)
  //     .then((res)=>{
  //       this.setState({
  //         allFetchedPokemon: res.data
  //       })
  //     })
  //     .catch((error) =>{
  //       this.setState({
  //         error:true,
  //       })
  //     })
  //   })
  // }
  // renderItems(){
  //   // const data = this.state.allFetchedPokemon
  //   if(!this.state.error){
  //     return this.state.allFetchedPokemon.map((p, idx)=>(
  //       <Pokecard key={idx} singleMon={p} />
  //     ))
  //   } else{
  //     return <Error />
  //   }

  // }
  
  
  render(){
   
    // return(
    //   <Container >
    //     <Row>

    //       {renItem}
    //       {/* {console.log(this.state.allFetchedPokemon)} */}
    //     </Row>
    //   </Container>
    // )
  }

}

export default Pokecards