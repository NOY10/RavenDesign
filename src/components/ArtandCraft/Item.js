import React from 'react'
import styled from "styled-components";
import { Star, StarHalf } from '@material-ui/icons';
import { Button } from '@material-ui/core';

function Item({pic,Name}) {
  return (
    <Container>
        <Box>
            <img src={pic} />
            <Button >{Name}</Button>
        </Box>
        
    </Container>
  )
}

export default Item

const Container = styled.div`
    margin: 50px;

`
const Box = styled.div`
    margin: 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img{
        object-fit: contain;
        height: 260px;
    }
    button {
        padding: 10px 20px;
        background-color: rgb(186, 186, 186);
        border:none;
        width: 200px;
    }
`