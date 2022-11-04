import React, { useState, useEffect } from "react";
import "./App.css";
import Cover from "./components/cover/Cover";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Slider from "./components/slider/Slider";
import Tecnologies from "./components/technologies/Technologies";
import Footer from "./components/footer/Footer";


function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight} />
      <Cover />
      <section id="info" >
      <About />
      </section>
      <section id="proyectos" >
      <Slider />
      </section>
      <section id="habilidades" >
      <Tecnologies />
      </section>
      <section id="contacto" >
      <Footer />
      </section>
    </div>
  );
}

export default App;