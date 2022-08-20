import React from 'react'
import styled from "styled-components";
import Item from '../InteriorDesign/Item';
import q1 from './Img/q1.png'
import q2 from './Img/q2.png'
import q3 from './Img/q3.png'
import q4 from './Img/q4.jpg'
import q5 from './Img/q5.jpg'
import q6 from './Img/q6.png'

function InteriorDesign() {
  return (
    <Container>
      <Best> 
        <div>
          <Item 
            pic={q1}
            Name ='Lobzang'
            ProjectArea = '500sq'
          />
        </div>
        <div>
          <Item 
            pic={q2}
            Name ='Lobzang'
            ProjectArea = '500sq'
          />
        </div>
        <div>
          <Item 
            pic={q3}
            Name ='Lobzang'
            ProjectArea = '500sq'
          />
        </div>
        <div>
          <Item 
            pic={q4}
            Name ='Lobzang'
            ProjectArea = '500sq'
          />
        </div>
        <div>
          <Item 
            pic={q5}
            Name ='Lobzang'
            ProjectArea = '500m/sq'
          />
        </div>
        <div>
          <Item 
            pic={q6}
            Name ='Lobzang'
            ProjectArea = '500m/sq'
          />
        </div>

          
      </Best>
        
    </Container>
  )
}

export default InteriorDesign

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
    margin:0 10px;

  }
`