import React, {useState, useEffect} from 'react'
import {Card} from 'react-bootstrap'
import styled from 'styled-components'
import pokeball_1 from '../images/pokeball_1.png'
import bulbasaur from '../images/001Bulbasaur.png'


const Pokecard = (props) =>{
  const [pokeImage, setPokeImage] = useState(require("../images/008Wartortle.png"))
  const singleMon = props.singleMon
  const image = props.image
  useEffect((e)=>{
    // const imgSrc = (findImage(singleMon))
    // runCheck(singleMon, props.pokeImage)

  },[])
 
  // const imgSrc = (findImage(singleMon))

  const runCheck = (data)=>{
    
    if (data.id !== 0) {
      data.imageID = `../images/${data.imageID}${data.name}.png`;
    
    }
    else {
      data.imageID = `../images/pokeball_1.png`;
    }
    return data
  }
  
return(
  <Scene>
    <Card>
      <PokeCard>
        <div className="card__face card__face--front">
          <Card.Title>
            {console.log(props.image)}
            <Image src={
              require(`../images/${image}${singleMon.name}.png`)
            }/>
            <figcaption>
              {singleMon.name}
            </figcaption>
          </Card.Title>
        </div>
      </PokeCard>
    </Card>

  </Scene>
  )
}





export default Pokecard

const Scene = styled.section`
width: 260px;
height: 260px;
margin: 20px;
perspective: 600px;
`;
const PokeCard = styled.div`
text-align: center;
width: 100%;
height: 100%;
transition: all 0.25s ease;
transform-style: preserve-3d;
cursor: pointer;
position: relative;
border-radius: 6px;
background-color: none;
box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.37);
`
const Image = styled.img`
  width: 200px;
  height: 200px;
  padding: 4px;

`