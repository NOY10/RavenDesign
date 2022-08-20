import React, { useRef} from "react";
import styled from "styled-components";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import Pic from './/..//Img/bg.png'
import w1 from './Pic/w1.png'
import w2 from './Pic/w2.png'
import w3 from './Pic/w3.png'
import w4 from './Pic/w4.jpg'
import w5 from './Pic/w5.png'

function Sideimg() {
  const slideRef = useRef();
  const properties = {
    autoplay: true,
    arrows: false,
    // infinite: false,
  };

  const slideImages = [
    {
      url:w1
    },
    {
      url:w2
    },
    {
      url:w3
    },
    {
      url:w4
    },
    {
      url:w5
    },
     
     
     
];


  return (
    <Container >
        <Slider style = {{'backgroundImage': `url(${Pic})`,backgroundRepeat:"no-repeat"}}>
        <Slide ref={slideRef} {...properties}>
        {
          slideImages.map((slideImage, index)=> (
            <div className="each-slide" key={index}>
              <ImgSlider style={{'backgroundImage': `url(${slideImage.url})`, backgroundRepeat:"no-repeat"}}>
          
              </ImgSlider>
            </div>
          )) 
        } 
        
        </Slide>
          
        </Slider>
    </Container>
  )
}

export default Sideimg

const Container = styled.div`
    display:flex;
    flex:0.1;
    
`
const ImgSlider = styled.div`
  width:100% ;

  height: 250px;
`
const Slider = styled.div`
  width: 190px;
  border-radius: 3px;
`