import React from 'react'
import {Card} from 'react-bootstrap'
import styled from 'styled-components'



const Pokecard = ({singleMon}) =>(
  <Scene>
    <Card>
      <PokeCard>
        <div className="card__face card__face--front">
          <figure>
            <figcaption>
              {singleMon.name}
            </figcaption>
          </figure>

        </div>
      </PokeCard>
    </Card>

  </Scene>
)




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
border-radius: 15%;
background-color: none;
box-shadow: 5px 5px 10px 5px rgba(0, 0, 0, 0.37);
`