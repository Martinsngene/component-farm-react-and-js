import React from "react";
import {
  FaInstagramSquare,
  FaLinkedin,
  AiFillTwitterSquare,
  AiFillFacebook,
} from "react-icons/all";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container-fluid footer">
      <div className="itemOne">
        <div className="followUs">
          <h4>Follow Us</h4>
        </div>
        <div className="socialsContainer">
          <ul className="socials">
            <li className="linkItem">
              <span>
                <FaLinkedin size={28} />
              </span>
            </li>
            <li className="linkItem">
              <span>
                <AiFillTwitterSquare size={28} />
              </span>
            </li>
            <li className="linkItem">
              <span>
                <AiFillFacebook size={28} />
              </span>
            </li>
            <li className="linkItem">
              <span>
                <FaInstagramSquare size={28} />
              </span>
            </li>
          </ul>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <ul className="linksFooter2">
            <li className="title1">Links</li>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
            <li>Sitemap</li>
          </ul>
        </div>
        <div className="col-md-6">
          <ul className="linksFooter3">
            <li className="title2">Advertise With Us</li>
            <li>Tech Jobs Advertisement</li>
            <li>Product Advertisement</li>
            <li>Service Advertisement</li>
          </ul>
        </div>
      </div>
      <p className="text-center mb-0">&copy; Martinium Enterprises 2022</p>
    </div>
  );
};

export default Footer;
