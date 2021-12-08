import React from "react";
import { Container } from "react-bootstrap";
import "./Hero.css";

function Hero() {
  return (
    <Container>
      <div className="row align-items-center justify-content-center heroSection">
        <div className="col-md-6">
          <div className="heroTxt">
            <h1>
              Make better coffee{" "}
              <img src="/media/coffee.png" alt="coffee_pic" />
            </h1>

            <h2>why learn how to blog?</h2>
          </div>
        </div>
        <div className="col-md-6">
          <div className="heroImg">
            <img
              className="img-fluid"
              src="/media/hero-section.gif"
              alt="hero_pic"
            />
            {/* <a href="https://storyset.com/work">
              Work illustrations by Storyset
            </a> */}
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Hero;
