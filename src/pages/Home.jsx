import React from "react";
import Hero from "../components/main/Hero";
import NavBar from "../components/navigation/NavBar";
import Newsletter from "../components/newsletter/Newsletter";

function Home() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Newsletter />
    </div>
  );
}

export default Home;
