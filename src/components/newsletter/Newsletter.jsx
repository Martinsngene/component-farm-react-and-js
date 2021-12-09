import React from "react";
import { Container } from "react-bootstrap";
import "./Newsletter.css";

function Newsletter() {
  return (
    <Container>
      <div className="container newsLetterSection">
        <div className="containerNews">
          <div className="newsLetterImg">
            <img
              className="img-fluid"
              src="/media/newsletter.gif"
              alt="newsletter_pic"
            />
          </div>

          <div className="newsLetterTxt">
            <h5>GET OUR WEEKLY</h5>
            <h1>NEWSLETTER</h1>
            <p>
              Get the latest articles on developer topics and anything tech
              related right in your mailbox.
              <br /> <strong>Subscribe now!</strong>
            </p>
            <div className="newsLetterForm">
              <input placeholder="Email Address" type="text" />
              <button>Subscribe</button>
            </div>
            <div className="assureEmail">
              <p>Your email is safe with us, we don't spam</p>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Newsletter;
