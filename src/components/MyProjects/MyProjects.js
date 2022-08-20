import React from 'react'
import styled from "styled-components";
import bg from "./img/bg.png"
import p1 from "./img/Picture1.png"
import p2 from "./img/Picture2.png"
import p3 from "./img/Picture3.png"
import p4 from "./img/Picture4.png"


function MyProjects() {
  return (
    <Container>
        <img src={bg} />

        <Hop>
          <img src={p1} />
          <img src={p2} />
          <img src={p3} />
          <img src={p4} />

        </Hop>
    </Container>
  )
}

export default MyProjects

const Container = styled.div`

`

const Hop = styled.div`
  img {
    margin: 20px;
    object-fit: contain;
    height: 260px;
  }
`