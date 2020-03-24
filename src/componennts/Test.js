import React , {useEffect, useState} from 'react'
import { Container} from 'react-bootstrap'
import pokemon from '../data/pokemon.js'
import axios from 'axios'
const Test = (props) =>{

  const [cards, setCards] = useState([])

  useEffect((e)=>{
    pokemon.forEach(p=>{
      axios.get(p.url).then((res)=>{
        setCards(prev => ([...prev, res.data]))
      })
    })
  },[])

  return(
    <Container>
      <div>
        {console.log(cards)}
        {cards.map(p=>{
          return (
            <h1 key={p.id}>{p.moves.move[0].name}</h1>
          )
        })}
      </div>
    </Container>
  )
  
}

export default Test