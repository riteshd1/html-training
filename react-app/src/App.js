import logo from './logo.svg';
import './bootstrap.min.css';
import Grid from './Grid.js';
import Alert from './components/Alert';

function App() {
  var a=50;
  var b=20;
  let fullName = (firstName, lastName)=>{
    return firstName+lastName;
  }
  let logoUrl ="https://thetools.co.in/images/logo/tools.png";
  return (
    <>
    <h1>Welcome to ReactJS World - {fullName("John","Dove")}</h1>
    <img src={logoUrl} />
    <img src={logoUrl} />
    <img src={logoUrl} />
    <img src={logoUrl} />
    <Grid title={"Grid 1"} colorName={"#f00"} />
    <Grid title={"Grid 2"} colorName={"#0f0"} />
    <Grid title={"Grid 3"} colorName={"#00f"} />
    <Grid title={"Grid 4"} colorName={"#CCC"} />
    <Alert />
    </>
  );
}

export default App;
