import React from 'react'
import {Card} from 'react-bootstrap'


const Pokecard = ({singleMon}) =>(

  <Card>
    <Card.Title>{singleMon.name}</Card.Title>
  </Card>
)




export default Pokecard