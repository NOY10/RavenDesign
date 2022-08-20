import React from 'react'
import styled from "styled-components";
import { NavLink } from 'react-router-dom';

function Navigate() {
  return (
    <Container>
        <NavLink activeClassName="active" to="/">Home</NavLink>
        <NavLink activeClassName="active" to="/Architecture"> Architecture</NavLink>
        <NavLink activeClassName="active" to="/InteriorDesign">Interior Design</NavLink>
        <NavLink activeClassName="active" to="/ArtandCraft">Art and Craft</NavLink>
        <NavLink activeClassName="active" to="/PhotoEditing"> Photo Editing</NavLink>
        <NavLink activeClassName="active" to="/MyProjects">My Projects</NavLink>

    </Container>
  )
}

export default Navigate

const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    a{
        width: 100%;;
        padding: 5px;
        cursor: pointer;
        align-items: center;
        text-decoration: none;
        
        cursor: pointer;
        border:0.5px solid black;
        text-align: center; 
    }

    .active{
        border-bottom: none;
    }
`