import React from 'react'
import Item from '../Architecture/Item';
import styled from "styled-components";
import q1 from './PicA/Q1.jpg'
import q2 from './PicA/Q2.jpg'
import q3 from './PicA/Q3.jpg'
import q4 from './PicA/Q4.jpg'
import q5 from './PicA/Q5.png'
import q6 from './PicA/Q6.png'

function Architecture() {
  return (
    <Container>
      <Best> 
        <div>
          <Item 
            pic={q1}
            Name ='Dorji'
            ProjectArea = '500sq'
          />
        </div>
        <div>
          <Item 
            pic={q2}
            Name ='Dorji'
            ProjectArea = '500sq'
          />
        </div>
        <div>
          <Item 
            pic={q3}
            Name ='Dorji'
            ProjectArea = '500sq'
          />
        </div>
        <div>
          <Item 
            pic={q4}
            Name ='Dorji'
            ProjectArea = '500sq'
          />
        </div>
        <div>
          <Item 
            pic={q5}
            Name ='Dorji'
            ProjectArea = '500m/sq'
          />
        </div>
        <div>
          <Item 
            pic={q6}
            Name ='Dorji'
            ProjectArea = '500m/sq'
          />
        </div>

          
      </Best>
        
    </Container>

    
  )
}

export default Architecture

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