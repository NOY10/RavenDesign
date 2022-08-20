import React from 'react'
import styled from "styled-components";
import Pic from './/../Img/pic.png'

function Sideimg2() {
  return (
    <Container>
        <img src={Pic} />
    </Container>
  )
}

export default Sideimg2

const Container = styled.div`
    display:flex;
    flex:0.1;
`