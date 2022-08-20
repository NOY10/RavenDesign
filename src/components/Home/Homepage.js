import React from 'react'
import styled from "styled-components";
import Tops from './Tops';
import BestD from './Best'
import pro1 from "./profile/pro1.avif"
import pro2 from "./profile/pro2.jpg"
import pro3 from "./profile/pro3.avif"
import pro4 from "./profile/pro4.avif"
import pro5 from "./profile/pro5.webp"
import t1 from "./TopD/T1.png"
import t2 from "./TopD/T2.png"
import t3 from "./TopD/T3.jpg"
import t4 from "./TopD/T4.png"
import t5 from "./TopD/T5.png"
import p1 from "./Arts/Picture6.png"
import p2 from "./Arts/Picture7.png"
import p3 from "./Arts/Picture8.png"
import p4 from "./Arts/Picture9.png"
import p5 from "./Arts/Picture10.png"


function Homepage() {
  return (
    <Container>
      <h1>Popular designer</h1>
      <Best>
        <div>
          <Tops 
            pic={pro1}
            Name ='Dorji'
            Noofsells='240'
            tag = 'Interior Design'
            />
          </div>
          <div>
          <Tops 
            pic={pro2}
            Name ='Dorji'
            Noofsells='240'
            tag = 'Architecture'
            />
          </div>
          <div>
          <Tops 
            pic={pro3}
            Name ='Dorji'
            Noofsells='240'
            tag = 'Interior Design'
            />
          </div>
          <div>
          <Tops 
            pic={pro4}
            Name ='Dorji'
            Noofsells='240'
            tag = 'Interior Design'
            />
          </div>
          <div>
          <Tops 
            pic={pro5}
            Name ='Dorji'
            Noofsells='240'
            tag = 'Architecture'
            />
          </div>
      </Best>

      <h1>Popular designs</h1>

      <Best>
        <div>
          <BestD 
            pic={t1}
          />
          </div>
          <div>
          <BestD 
            pic={t2}
            />
          </div>
          <div>
          <BestD 
            pic={t3}
            />
          </div>
          <div>
          <BestD 
            pic={t4}
            />
          </div>
          <div>
          <BestD 
            pic={t5}
            />
          </div>
      </Best>
      <h1>Top Craftmen</h1>
      <Best>
        <div>
          <Tops 
            pic={p1}
            Name ='Dorji'
            Noofsells='240'
            tag = 'Art and Craft'
            />
          </div>
          <div>
          <Tops 
            pic={p2}
            Name ='Dorji'
            Noofsells='240'
            tag = 'Art and Craft'
            />
          </div>
          <div>
          <Tops 
            pic={p3}
            Name ='Dorji'
            Noofsells='240'
            tag = 'Art and Craft'
            />
          </div>
          <div>
          <Tops 
            pic={p4}
            Name ='Dorji'
            Noofsells='240'
            tag = 'Art and Craft'
            />
          </div>
          <div>
          <Tops 
            pic={p5}
            Name ='Dorji'
            Noofsells='240'
            tag = 'Art and Craft'
            />
          </div>
      </Best>
      
         
        
    </Container>
  )
}

export default Homepage

const Container = styled.div`
    display:flex;
    flex-direction:column;
    margin: 5px;
    align-items:center;
  `
const Best = styled.div`
  display:flex;
  margin: 10px 0;
  

  div{
    margin:0 10px;

  }
`