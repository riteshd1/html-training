import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import CardExample from "./components/CardExample";

import TopMenu from "./components/TopMenu";
import Slider from "./components/Slider";
import { Container } from "react-bootstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import Blogs from "./components/pages/Blogs";
function App() {
  return (
    <>
      <BrowserRouter>
        <TopMenu />
        <Container>
          <Routes>
            <Route>
              <Route path="/home" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/blogs" element={<Blogs />} />
            </Route>
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
