import React from "react";
import Card from "react-bootstrap/Card";
import Img1 from "../Images/nature.jpg";
import Button from "react-bootstrap/esm/Button";
import "./Food.css";
const Food = () => {
  return (
    <div>
      {" "}
      <div className="heading">
        <h4>Best Food to try in France</h4>
      </div>
      <div className="container-fluid outer-container">
        <div>
          <ol>
            <li>
              <h5>Paris</h5>
              <div className="align-center">
                <img src={Img1} alt="" width={800} height={300} />
                <div className="row">
                  <div className="col-md-2"></div>
                  <div className="col-md-8" style={{ paddingTop: "23px" }}>
                    <p>
                      "But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth, the
                      master-builder of human happiness. No one rejects,
                      dislikes, or avoids pleasure itself, because it is
                      pleasure, but because those who do not know how to pursue
                      pleasure rationally encounter consequences that are
                      extremely painful. Nor again is there anyone who loves or
                      pursues or desires to obtain pain of itself, because it is
                      pain, but because occasionally circumstances occur in
                      which toil and pain can procure him some great pleasure.
                      To take a trivial example, which of us ever undertakes
                      laborious physical exercise, except to obtain some
                      advantage from it? But who has any right to find fault
                      with a man who chooses to enjoy a pleasure that has no
                      annoying consequences, or one who avoids a pain that
                      produces no resultant pleasure?"
                    </p>
                  </div>
                  <div className="col-md-2"></div>
                </div>
              </div>
            </li>
            <li>
              <h5>Paris</h5>
              <div className="align-center">
                <img src={Img1} alt="" width={800} height={300} />
              </div>
              <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8" style={{ paddingTop: "23px" }}>
                  <p>
                    "But I must explain to you how all this mistaken idea of
                    denouncing pleasure and praising pain was born and I will
                    give you a complete account of the system, and expound the
                    actual teachings of the great explorer of the truth, the
                    master-builder of human happiness. No one rejects, dislikes,
                    or avoids pleasure itself, because it is pleasure, but
                    because those who do not know how to pursue pleasure
                    rationally encounter consequences that are extremely
                    painful. Nor again is there anyone who loves or pursues or
                    desires to obtain pain of itself, because it is pain, but
                    because occasionally circumstances occur in which toil and
                    pain can procure him some great pleasure. To take a trivial
                    example, which of us ever undertakes laborious physical
                    exercise, except to obtain some advantage from it? But who
                    has any right to find fault with a man who chooses to enjoy
                    a pleasure that has no annoying consequences, or one who
                    avoids a pain that produces no resultant pleasure?"
                  </p>
                </div>
                <div className="col-md-2"></div>
              </div>
            </li>
            <li>
              <h5>Paris</h5>
              <div className="align-center">
                <img src={Img1} alt="" width={800} height={300} />
                <div className="row">
                  <div className="col-md-2"></div>
                  <div className="col-md-8" style={{ paddingTop: "23px" }}>
                    <p>
                      "But I must explain to you how all this mistaken idea of
                      denouncing pleasure and praising pain was born and I will
                      give you a complete account of the system, and expound the
                      actual teachings of the great explorer of the truth, the
                      master-builder of human happiness. No one rejects,
                      dislikes, or avoids pleasure itself, because it is
                      pleasure, but because those who do not know how to pursue
                      pleasure rationally encounter consequences that are
                      extremely painful. Nor again is there anyone who loves or
                      pursues or desires to obtain pain of itself, because it is
                      pain, but because occasionally circumstances occur in
                      which toil and pain can procure him some great pleasure.
                      To take a trivial example, which of us ever undertakes
                      laborious physical exercise, except to obtain some
                      advantage from it? But who has any right to find fault
                      with a man who chooses to enjoy a pleasure that has no
                      annoying consequences, or one who avoids a pain that
                      produces no resultant pleasure?"
                    </p>
                  </div>
                  <div className="col-md-2"></div>
                </div>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Food;
