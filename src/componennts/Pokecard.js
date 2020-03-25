import React, {useState, useEffect} from 'react'
import {Card} from 'react-bootstrap'
import styled from 'styled-components'
import pokeball_1 from '../images/pokeball_1.png'
import bulbasaur from '../images/001Bulbasaur.png'


const Pokecard = ({singleMon}) =>{
  const [pokeImage, setPokeImage] = useState(require("../images/008Wartortle.png"))

  useEffect((e)=>{
    // const imgSrc = (findImage(singleMon))
    // runCheck(imgSrc)

  },[])
  // const findImage = (singleMon) =>{
  //   if (singleMon.id === 0) {
  //     singleMon.imageID = 0;
  //   }
  //   if (singleMon.id < 10) {
  //     singleMon.imageID = "00" + singleMon.id;
  //   }
  //   if (singleMon.id > 9 && singleMon.id < 100) {
  //     singleMon.imageID = "0" + singleMon.id;
  //   }
  //   if (singleMon.id > 99) {
  //     singleMon.imageID = singleMon.id;
  //   }
  
  //   if (singleMon.name === "mr-mime") {
  //     singleMon.name = "mr_Mime";
  //   }
  //   if (singleMon.name === "mime-jr") {
  //     singleMon.name = "mime_jr";
  //   }
  
  //   let dashIndex = singleMon.name.indexOf("-");
  //   if (dashIndex !== -1) {
  //     // Found a few pokemon who have a dash in their name
  //     singleMon.name = singleMon.name.slice(0, dashIndex);
  //   }
  //   singleMon.name =
  //     singleMon.name.charAt(0).toUpperCase() + singleMon.name.slice(1);
  //   return singleMon;
    
 
  // }
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
            {console.log(pokeImage)}
            <Image src={
              pokeImage
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