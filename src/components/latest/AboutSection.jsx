import React from "react";
import { Container } from "react-bootstrap";

function Latest() {
  return (
    <Container>
      <div className="row align-items-center justify-content-center">
        <div className="col-md-6">
          <div className="newsLetterImg">
            <img
              className="img-fluid"
              src="/media/latest.gif"
              alt="latest_pic"
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="latestText">
            <h5>About Me</h5>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime
              voluptates quisquam aliquid rerum necessitatibus omnis explicabo
              laborum velit sed sint laudantium hic ex enim tempore est neque,
              error, illum laboriosam.
              {/* <span>
                Reiciendis nesciunt architecto culpa, exercitationem deserunt!
                Vitae quibusdam atque expedita dolore libero animi consequatur,
                adipisci, numquam ea culpa, aliquam sint distinctio saepe magni
                iusto qui amet! Iure minima amet laudantium corrupti quae
                voluptatum et a vitae qui fugiat minus iste rem consequuntur,
                reprehenderit deserunt, officiis accusantium aperiam aliquam
                fugit consequatur repellat facilis nam. Officia earum dolor, quo
                magnam similique et impedit ut quasi hic harum laborum ipsam,
                eius explicabo error repellat consequatur labore reprehenderit
                tenetur inventore soluta doloremque? Totam dicta at, non atque
                consequatur magnam commodi, assumenda aliquam architecto dolores
                placeat dignissimos voluptatibus voluptatum eum exercitationem
                nobis harum natus ad eius aperiam odio. Fugiat quia tenetur
                explicabo ratione dolores consequuntur sed, inventore eum quidem
                nam nihil! Quidem error blanditiis officia.
              </span> */}
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default Latest;
