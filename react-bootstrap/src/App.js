import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import CardExample from "./components/CardExample";
import img1 from "./components/CardExample/images/1.webp";
import img2 from "./components/CardExample/images/2.webp";
import img3 from "./components/CardExample/images/3.webp";
import img4 from "./components/CardExample/images/4.webp";
import img5 from "./components/CardExample/images/5.webp";
import img6 from "./components/CardExample/images/6.webp";
import img7 from "./components/CardExample/images/7.webp";
import TopMenu from "./components/TopMenu";
import Slider from "./components/Slider";
import { Container } from "react-bootstrap";
function App() {
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
  return (
    <>
    <TopMenu />
    <Container>
      
      <Slider />
      {cardData.map(item=>(
        <CardExample cardName={item.title} cardImage={item.image} cardDescription={item.description} />
      ))}
      
    </Container>
    </>
  );
}

export default App;
