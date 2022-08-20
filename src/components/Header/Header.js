import React from 'react'
import SearchIcon from '@material-ui/icons/Search';
import styled from "styled-components";
import Logo from "../Img/Logo.jpg"
import Profile from "../Img/Profile.jpg"
import { Settings } from '@material-ui/icons';
import { Avatar } from '@material-ui/core';


function Header() {
  return (
    <MainHeader>
        <HeaderLeft>
            <img src={Logo} alt="logo" />
            <p>RAVENDESIGN.bt</p>
        </HeaderLeft> 
        <SearchBox>
            <input placeholder='Search' type="text"/>
            <SearchIcon /> 
        </SearchBox>
        <HeaderRight>
            <Settings />
            <Avatar src={Profile} />
        </HeaderRight>
    </MainHeader>
  )
}

export default Header

const MainHeader = styled.header`
    display: flex;
    margin:15px 20px;
    justify-content: space-between;
`

const HeaderLeft = styled.div`
    display: flex;
    align-items: center;
    
   

    img{
        object-fit: contain;
        height: 30px;
    }
    p {
        margin-left: 20px;
    }
`
const SearchBox = styled.div`
    padding: 10px;
    display:flex;
    align-items: center;
    border-radius: 5px;
    height: 22px;
    color: grey;
    background-color: #eef3f8;

    input {
        width:250px;
        outline: none;
        border: none;
        background: none;

    }

`;
const HeaderRight = styled.header`
    display: flex;
    align-items: center;

    .MuiSvgIcon-root {
        font-size: 28px;
    }

`;