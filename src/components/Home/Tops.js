import { Avatar } from '@material-ui/core';
import React from 'react'
import styled from "styled-components";
import { LocalOffer } from '@material-ui/icons';

function Tops({pic,Name,Noofsells,tag}) {
  return (
    <Container>
        <Img>
            <Avatar src={pic} style={{ height: '150px', width: '150px' }} />
            <p>Name: {Name}</p>
            <div>
                <LocalOffer />
                <p>{tag}</p>
            </div>
        </Img>

    </Container>
  )
}

export default Tops

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
