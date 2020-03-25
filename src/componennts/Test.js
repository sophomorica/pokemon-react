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

  const mapImage = cards.map(singleMon=>{
    if (singleMon.id === 0) {
      singleMon.imageID = 0;
    }
    if (singleMon.id < 10) {
      singleMon.imageID = "00" + singleMon.id;
    }
    if (singleMon.id > 9 && singleMon.id < 100) {
      singleMon.imageID = "0" + singleMon.id;
    }
    if (singleMon.id > 99) {
      singleMon.imageID = singleMon.id;
    }
  
    if (singleMon.name === "mr-mime") {
      singleMon.name = "mr_Mime";
    }
    if (singleMon.name === "mime-jr") {
      singleMon.name = "mime_jr";
    }
  
    let dashIndex = singleMon.name.indexOf("-");
    if (dashIndex !== -1) {
      // Found a few pokemon who have a dash in their name
      singleMon.name = singleMon.name.slice(0, dashIndex);
    }
    singleMon.name =
      singleMon.name.charAt(0).toUpperCase() + singleMon.name.slice(1);
    return singleMon;
  })
  // const foundImage = (mapImage())

  // const runCheck = data =>{
  //   if (data.id !== 0) {
  //     data.imageID = `../images/${data.imageID}${data.name}.png`;
    
  //   }
  //   else {
  //     data.imageID = `../images/pokeball_1.png`;
  //   }
  //   return data
  // }
  const renderItems = () => {
    if(!error){
      return mapImage.map((p, idx)=>(
        <Pokecard key={idx} singleMon={p} pokeImage={require(`${p.imageID}`)} />
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