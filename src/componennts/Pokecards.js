import React, { useEffect, useState } from 'react'
import Pokecard from './Pokecard'
import pokemon from '../data/pokemon.js'
import Error from './Error'
import {Container, Row} from 'react-bootstrap'
import axios from 'axios'

const Pokecards = () => {

  const [cards, setCards] = useState([])
  const [error, setError] = useState(false)
  
  useEffect((e)=>{
    pokemon.forEach(p=>{
      axios.get(p.url).then((res)=>{
        setCards(prev => ([...prev, res.data]))
      })
      .catch((error)=>{
        setError(true)
      })
    })
  },[])

  const renderItems = () => {
    if(!error){
      return cards.map((p, idx)=>(
        <Pokecard key={idx} singleMon={p} />
      ))
    } else{
      return <Error />
    }

  }
  
  
   
    return(
      <Container >
        <Row>
          {renderItems()}
        </Row>
      </Container>
    )

}

export default Pokecards