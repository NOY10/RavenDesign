import { Avatar } from '@material-ui/core';
import React from 'react'
import styled from "styled-components";

function BestD({pic}) {
  return (
    <Container>
        <Img>
            <Avatar src={pic} style={{ height: '150px', width: '150px' }} />
        </Img>

    </Container>
  )
}

export default BestD

const Container = styled.div`
    margin-top: 10px;

`

const Img = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;

    div {
        display: flex;
    }
`