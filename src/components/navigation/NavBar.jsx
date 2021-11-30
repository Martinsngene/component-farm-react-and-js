import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { RiSearchLine } from "react-icons/ri";

function NavBar() {
  return (
    <Container>
      <div className="navBarContainer">
        <div className="itemOne">
          <div className="logo">
            <span>I Am Martins</span>
          </div>
        </div>
        <div className="itemTwo">
          <div className="searchBar">
            <RiSearchLine className="search" />
            <input placeholder="Search" type="text" />
          </div>
        </div>

        <div className="itemThree">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">About</Link>
            </li>
            <li>
              <Link to="/">Contact</Link>
            </li>
            <li>
              <Link to="/">Advertisement</Link>
            </li>
          </ul>
        </div>
      </div>
    </Container>
  );
}

export default NavBar;
