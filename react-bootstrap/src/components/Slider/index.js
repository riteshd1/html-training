import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';
import img1 from "./images/1.jpg";
import img2 from "./images/2.jpg";
import img3 from "./images/3.jpg";
import { Button } from 'react-bootstrap';
function Slider() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src={img1} />
        {/* <ExampleCarouselImage text="First slide" /> */}
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img2} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={img3} />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}
// const Slider = ()=>{
//   let imageArr = [img1,img2,img3];
//   const [sliderImage, setSliderImage] = useState(img1);

//   const changeSlider = ()=>{
//     let imageIndex = parseInt(Math.random() * 3);
//     console.log("imageIndex",imageIndex);
//     setSliderImage(imageArr[imageIndex]);
//   }

//   setInterval(changeSlider,5000);
//   return (
//     <>
//       <img src={sliderImage}  />
//       <Button onClick={changeSlider} >Change Slider</Button>
//     </>
//   )
// }
export default Slider;