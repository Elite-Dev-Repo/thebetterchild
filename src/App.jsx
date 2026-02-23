import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Testimonial from "./components/Team";
import Vm from "./components/Vm";
import Story from "./components/Story";
import Nav from "./components/Nav";
import Filler from "./components/Filler";
import Gallery from "./components/Gallery";

const App = () => {
  return (
    <>
      <Nav />
      <Header />
      <Story />
      <Filler />
      <Vm />
      <Gallery />
      <Testimonial />
      <Footer />
    </>
  );
};

export default App;
