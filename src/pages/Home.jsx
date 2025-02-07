import React from "react";
import NavCards from "../components/NavCards";
import Subscribe from "../components/Subscribe";
import Posts from "../components/Posts";
import Instagram from "../components/Instagram";
import Slider from "../components/Slider";

function Home() {
  return (
    <main>
      <Slider />
      <NavCards />
      <Subscribe />

      <Posts />
      <Instagram />
    </main>
  );
}

export default Home;
