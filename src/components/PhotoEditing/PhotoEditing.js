import React from 'react'
import Bg from './Bg.png'
import styled from "styled-components";

function PhotoEditing() {
  return (
    <Container>
        <img src={Bg} />
    </Container>
  )
}

export default PhotoEditing

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 1100px;
    height: 100vh;
  }
`