import React from 'react'
import styled from "styled-components";
import { Star, StarHalf } from '@material-ui/icons';

function Item({pic,ProjectArea,Name,discription}) {
  return (
    <Container>
        <img src={pic} />
        <p>Architect: {Name}</p>
        <p>Project Area: {ProjectArea}</p>
      <div>
        <Rating>
          <h4>Rating</h4>
          <Star />
          <Star />
          <Star />
          <Star />
          <StarHalf />
        </Rating>
        <p>More Details</p>
      </div>
    </Container>
  )
}

export default Item

const Container = styled.div`
  
    margin: 5px;
    img{
        object-fit: contain;
        height: 200px;
    }

    div{
      display: flex;
      justify-content: space-between;
    }
`

const Rating = styled.div`
  display:flex;
`