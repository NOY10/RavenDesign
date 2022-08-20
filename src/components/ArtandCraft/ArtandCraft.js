import React from 'react'
import Item from '../ArtandCraft/Item';
import styled from "styled-components";
import q1 from './Pic/P1.png'
import q2 from './Pic/P2.png'
import q3 from './Pic/P3.png'
import q4 from './Pic/P4.png'
import q5 from './Pic/P5.jpg'
import q6 from './Pic/P6.png'

function ArtandCraft() {
  return (
    <Container>
    <Best> 
      <div>
        <Item 
          pic={q1}
          Name ='Mask'
          ProjectArea = '500sq'
        />
      </div>
      <div>
        <Item 
          pic={q2}
          Name ='Fabrics'
          ProjectArea = '500sq'
        />
      </div>
      <div>
        <Item 
          pic={q3}
          Name ='Bamboo Bangchung'
          ProjectArea = '500sq'
        />
      </div>
      <div>
        <Item 
          pic={q4}
          Name ='Palang'
          ProjectArea = '500sq'
        />
      </div>
      <div>
        <Item 
          pic={q5}
          Name ='Bamboo Basket'
          ProjectArea = '500m/sq'
        />
      </div>
      <div>
        <Item 
          pic={q6}
          Name ='Statue'
          ProjectArea = '500m/sq'
        />
      </div>

        
    </Best>
      
  </Container>
  )
}

export default ArtandCraft

const Container = styled.div`
    display:flex;
    flex-direction:column;
    margin: 5px;
    align-items:center;
  `
const Best = styled.div`
  display:flex;
  flex-wrap: wrap;
  margin: 10px 0;
  

  div{
    margin:15px 10px;

  }
`