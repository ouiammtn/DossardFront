import React from "react";
import "./styles/home.css";
import { MdOutlineCameraRoll } from "react-icons/md";
import SmallCard from "./components/SmallCard";
import Gallery from "./components/gallery";
import Hero from "./components/hero";
const Home = () => {
  return (
    <>
      <Hero />
      <Gallery />
    </>
  );
};

export default Home;
