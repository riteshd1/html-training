import React from "react";
import Slider from "../../Slider";
import CardExample from "../../CardExample";
import img1 from "../../CardExample/images/1.webp";
import img2 from "../../CardExample/images/2.webp";
import img3 from "../../CardExample/images/3.webp";
import img4 from "../../CardExample/images/4.webp";
import img5 from "../../CardExample/images/5.webp";
import img6 from "../../CardExample/images/6.webp";
import img7 from "../../CardExample/images/7.webp";

const Home = ()=>{
    const cardData = [
        {
          title:'Samsung A1',
          image:img1,
          description:'can be a convenient attire option for men to wear on'
        },
        {
          title:'Samsung A2',
          image:img2,
          description:'can be a convenient attire option for men to wear on'
        },
        {
          title:'Samsung A3',
          image:img3,
          description:'can be a convenient attire option for men to wear on'
        },
        {
          title:'Samsung A4',
          image:img4,
          description:'can be a convenient attire option for men to wear on'
        },
        
      ]
    return(
        <><Slider />
         {cardData.map(item=>(
        <CardExample cardName={item.title} cardImage={item.image} cardDescription={item.description} />
      ))}
        </>
    )
}
export default Home;